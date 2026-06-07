import {
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { FiHelpCircle, FiUserPlus, FiX } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { auth } from '../../lib/firebase'

type Props = {
  open: boolean
  onClose: () => void
  onLoginSuccess?: () => void
}

// Exact match of the n7 theme from Nanitelink's signin dialog
const dialogTheme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: { width: 320 },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #e0e0e0',
          marginBottom: '8px',
          paddingBottom: '8px',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #e0e0e0',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#D9534F',
          fontSize: '14px',
          '&:hover': { backgroundColor: '#C9302C' },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: { margin: '6px 16px' },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          '& .MuiButtonGroup-grouped': {
            borderColor: 'rgb(204,204,204)',
          },
          '& .MuiButton-root': {
            color: '#333',
            backgroundColor: '#FFF',
            fontSize: '11px',
            padding: '5px 0',
            '&:hover': { backgroundColor: '#E6E6E6' },
            '& .MuiButton-icon': {
              marginRight: '4px',
              '& > svg': { height: '11px', width: '11px' },
            },
          },
        },
      },
    },
  },
})

export default function LoginPopup({ open, onClose, onLoginSuccess }: Props) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [loading, setLoading] = useState(false)

  const reset = () => {
    setEmail('')
    setPassword('')
    setEmailError('')
    setPasswordError('')
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  const validate = () => {
    let valid = true
    if (!email) {
      setEmailError('Email is required')
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Enter a valid email address')
      valid = false
    } else {
      setEmailError('')
    }
    if (!password) {
      setPasswordError('Password is required')
      valid = false
    } else if (password.length < 8) {
      setPasswordError('At least 8 characters')
      valid = false
    } else {
      setPasswordError('')
    }
    return valid
  }

  const handleSignIn = async () => {
    if (!validate()) return
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      toast.success('Signed in successfully.')
      onLoginSuccess?.()
      handleClose()
    } catch (err: unknown) {
      const code = (err as { code?: string }).code
      if (code === 'auth/user-not-found') {
        toast.error('Email address not found.')
      } else if (code === 'auth/wrong-password') {
        toast.error('Incorrect password.')
      } else if (code === 'auth/invalid-credential') {
        toast.error('Invalid email or password.')
      } else if (code === 'auth/too-many-requests') {
        toast.error('Too many failed login attempts. Try again later.')
      } else {
        toast.error('Login failed. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <ThemeProvider theme={dialogTheme}>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          Sign In
          <IconButton size="small" onClick={handleClose} aria-label="close">
            <FiX />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Box
            component="form"
            onSubmit={(e) => { e.preventDefault(); handleSignIn() }}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}
          >
            <TextField
              id="email"
              label="Email"
              type="email"
              required
              fullWidth
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(emailError)}
              helperText={emailError}
              autoComplete="email"
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              required
              fullWidth
              size="small"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={Boolean(passwordError)}
              helperText={passwordError}
              autoComplete="current-password"
            />
          </Box>

          <Button variant="contained" fullWidth disabled={loading} onClick={handleSignIn} sx={{ mt: 2 }}>
            Sign In
          </Button>
        </DialogContent>

        <DialogActions>
          <ButtonGroup variant="contained" fullWidth>
            <Button startIcon={<FiUserPlus />} onClick={() => { handleClose(); navigate('/member/signup') }}>
              Sign Up
            </Button>
            <Button startIcon={<FiHelpCircle />} onClick={() => { handleClose(); navigate('/member/find-account') }}>
              Reset Password
            </Button>
          </ButtonGroup>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  )
}
