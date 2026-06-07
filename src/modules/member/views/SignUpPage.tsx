import { Box, Container, Paper, Typography } from '@mui/material'
import { createUserWithEmailAndPassword, deleteUser, updateProfile } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import DynamicForm from '../../../components/DynamicForm/DynamicForm'
import type { ActionHandlers, FormConfig } from '../../../components/DynamicForm/types'
import { auth } from '../../../lib/firebase'
import { MemberInsertError, insertMember } from '../services/insertMember'

const signUpFormConfig: FormConfig = {
  id: 'member-signup',
  size: 'small',
  steps: [
    {
      title: 'Account',
      description: 'Create your login credentials.',
      fields: ['userId', 'emailAddress', 'nickName', 'password', 'confirmPassword'],
    },
    {
      title: 'Profile',
      description: 'All fields are optional — you can update these later.',
      fields: ['phoneNumber', 'birthday', 'homepage', 'blog', 'profileDescription', 'allowMailing', 'allowMessage'],
    },
  ],
  fields: [
    // ── Step 1: required ──────────────────────────────────────────────
    {
      name: 'userId',
      label: 'User ID',
      type: 'text',
      placeholder: 'Choose a user ID',
      validation: {
        required: 'User ID is required',
        minLength: { value: 4, message: 'At least 4 characters' },
        maxLength: { value: 40 },
        pattern: { value: '^[a-zA-Z0-9_]+$', message: 'Letters, numbers and underscores only' },
      },
    },
    {
      name: 'emailAddress',
      label: 'Email',
      type: 'text',
      placeholder: 'your@email.com',
      validation: {
        required: 'Email is required',
        email: 'Enter a valid email address',
      },
    },
    {
      name: 'nickName',
      label: 'Nickname',
      type: 'text',
      placeholder: 'Display name',
      validation: {
        required: 'Nickname is required',
        minLength: { value: 2, message: 'At least 2 characters' },
        maxLength: { value: 40 },
      },
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Minimum 8 characters',
      validation: {
        required: 'Password is required',
        minLength: { value: 8, message: 'At least 8 characters' },
      },
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Re-enter password',
      validation: {
        required: 'Please confirm your password',
        match: { field: 'password', message: 'Passwords do not match' },
      },
    },
    // ── Step 2: optional ─────────────────────────────────────────────
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'text',
      placeholder: '+1 234 567 8900',
    },
    {
      name: 'birthday',
      label: 'Birthday',
      type: 'date',
    },
    {
      name: 'homepage',
      label: 'Homepage',
      type: 'text',
      placeholder: 'https://yoursite.com',
      validation: {
        url: 'Enter a valid URL',
      },
    },
    {
      name: 'blog',
      label: 'Blog',
      type: 'text',
      placeholder: 'https://yourblog.com',
      validation: {
        url: 'Enter a valid URL',
      },
    },
    {
      name: 'profileDescription',
      label: 'About Me',
      type: 'textarea',
      placeholder: 'Tell us a little about yourself',
      validation: {
        maxLength: { value: 500 },
      },
    },
    {
      name: 'allowMailing',
      label: 'Receive email notifications',
      type: 'checkbox',
      default: true,
    },
    {
      name: 'allowMessage',
      label: 'Allow messages from other members',
      type: 'checkbox',
      default: true,
    },
  ],
  actions: [
    { label: 'Create Account', handler: 'signup', style: 'primary', submit: true },
  ],
}

export default function SignUpPage() {
  const navigate = useNavigate()
  const [serverError, setServerError] = useState<string | null>(null)

  const actionHandlers: ActionHandlers = {
    signup: async (values) => {
      setServerError(null)
      const email = values.emailAddress as string
      const password = values.password as string
      const nickName = values.nickName as string
      const userId = values.userId as string

      let firebaseUid: string | null = null
      try {
        console.log('[SignUpPage] step 1 — createUserWithEmailAndPassword', { email })
        const credential = await createUserWithEmailAndPassword(auth, email, password)
        firebaseUid = credential.user.uid
        console.log('[SignUpPage] step 1 — auth user created', { uid: firebaseUid })

        console.log('[SignUpPage] step 2 — updateProfile', { displayName: nickName })
        await updateProfile(credential.user, { displayName: nickName })
        console.log('[SignUpPage] step 2 — profile updated')

        console.log('[SignUpPage] step 3 — insertMember transaction')
        await insertMember({
          memberId: firebaseUid,
          memberSrl: Date.now(),
          userId,
          emailAddress: email,
          nickName,
          phoneNumber: (values.phoneNumber as string) || undefined,
          preferences: {
            allowMailing: (values.allowMailing as boolean) ?? true,
            allowMessage: (values.allowMessage as boolean) ?? true,
          },
          profile: {
            homepage: (values.homepage as string) || undefined,
            blog: (values.blog as string) || undefined,
            birthday: (values.birthday as string) || undefined,
            description: (values.profileDescription as string) || undefined,
          },
        })
        console.log('[SignUpPage] step 3 — insertMember complete, navigating')

        navigate('/')
      } catch (err: unknown) {
        console.error('[SignUpPage] signup error', err)

        // Roll back Firebase Auth user if Firestore transaction failed
        if (firebaseUid && auth.currentUser) {
          console.log('[SignUpPage] rolling back Firebase Auth user', firebaseUid)
          await deleteUser(auth.currentUser).catch((e) => console.warn('[SignUpPage] rollback failed', e))
        }

        if (err instanceof MemberInsertError) {
          const messages: Record<MemberInsertError['code'], string> = {
            'userId-taken': 'This user ID is already taken.',
            'email-taken': 'This email address is already registered.',
            'nickname-taken': 'This nickname is already taken.',
          }
          setServerError(messages[err.code])
        } else {
          const code = (err as { code?: string }).code
          console.log('[SignUpPage] Firebase error code', code)
          if (code === 'auth/email-already-in-use') {
            setServerError('This email address is already registered.')
          } else if (code === 'auth/weak-password') {
            setServerError('Password is too weak.')
          } else {
            setServerError('Sign up failed. Please try again.')
          }
        }
      }
    },
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
          Create Account
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Already have an account?{' '}
          <Box component="a" href="/" sx={{ color: 'primary.main' }}>
            Sign in
          </Box>
        </Typography>

        {serverError && (
          <Typography variant="body2" color="error" sx={{ mb: 2 }}>
            {serverError}
          </Typography>
        )}

        <DynamicForm config={signUpFormConfig} actionHandlers={actionHandlers} />
      </Paper>
    </Container>
  )
}
