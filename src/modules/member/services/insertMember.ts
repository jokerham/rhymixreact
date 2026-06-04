import { serverTimestamp } from 'firebase/firestore'

import { queryTransaction, stripUndefined } from '../../../lib/firestore/executor'
import { insertMemberQuery } from '../queries/insert-member'

export class MemberInsertError extends Error {
  readonly code: 'userId-taken' | 'email-taken' | 'nickname-taken'
  constructor(code: 'userId-taken' | 'email-taken' | 'nickname-taken') {
    super(code)
    this.code = code
    this.name = 'MemberInsertError'
  }
}

export type InsertMemberInput = {
  memberId: string
  memberSrl: number
  userId: string
  emailAddress: string
  nickName: string
  phoneNumber?: string
  preferences: { allowMailing: boolean; allowMessage: boolean }
  profile: {
    homepage?: string
    blog?: string
    birthday?: string
    description?: string
  }
}

export async function insertMember(input: InsertMemberInput): Promise<void> {
  const {
    memberId,
    memberSrl,
    userId,
    emailAddress,
    nickName,
    phoneNumber,
    preferences,
    profile,
  } = input

  const normalizedUserId = userId.toLowerCase()
  const normalizedEmail = emailAddress.toLowerCase()
  const normalizedNickname = nickName.toLowerCase()
  const phoneKey = phoneNumber?.replace(/\D/g, '') ?? ''

  console.log('[insertMember] start', { memberId, userId, emailAddress, nickName })

  await queryTransaction(
    insertMemberQuery,
    {
      memberId,
      normalizedUserId,
      normalizedEmail,
      normalizedNickname,
      phoneKey,
    },
    async (tx, refs) => {
      console.log('[insertMember] transaction started — reading uniqueness docs', {
        refs: Object.fromEntries(Object.entries(refs).map(([k, v]) => [k, v?.path ?? null])),
      })

      const [userIdSnap, emailSnap, nicknameSnap] = await Promise.all([
        tx.get(refs['uniqueUserIds']!),
        tx.get(refs['uniqueEmails']!),
        tx.get(refs['uniqueNicknames']!),
      ])

      console.log('[insertMember] uniqueness checks', {
        userIdExists: userIdSnap.exists(),
        emailExists: emailSnap.exists(),
        nicknameExists: nicknameSnap.exists(),
      })

      if (userIdSnap.exists()) throw new MemberInsertError('userId-taken')
      if (emailSnap.exists()) throw new MemberInsertError('email-taken')
      if (nicknameSnap.exists()) throw new MemberInsertError('nickname-taken')

      const now = serverTimestamp()
      const identity = { memberId, memberSrl, createdAt: now }

      console.log('[insertMember] all unique — writing docs')

      tx.set(refs['members']!, {
        memberSrl,
        userId,
        normalizedUserId,
        emailAddress,
        normalizedEmail,
        emailId: emailAddress.split('@')[0],
        emailHost: emailAddress.split('@')[1],
        phoneNumber: phoneNumber || null,
        nickName,
        normalizedNickName: normalizedNickname,
        userName: nickName,
        passwordHash: '',
        moderation: { isAdmin: false, denied: false, status: 'APPROVED' },
        preferences,
        profile: stripUndefined(profile),
        groups: [],
        listOrder: 0,
        createdAt: now,
        updatedAt: now,
      })

      tx.set(refs['uniqueUserIds']!, identity)
      tx.set(refs['uniqueEmails']!, identity)
      tx.set(refs['uniqueNicknames']!, identity)

      if (phoneNumber && refs['uniquePhones']) {
        tx.set(refs['uniquePhones'], identity)
      }

      console.log('[insertMember] transaction writes queued')
    },
  )

  console.log('[insertMember] transaction committed successfully')
}
