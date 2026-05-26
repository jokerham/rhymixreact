import type { FirestoreTimestamp, MemberId } from './common'

export type AuthMailTokenDocument = {
  authKey: string
  memberId: MemberId
  memberSrl: number
  userId: string
  newPasswordHash?: string
  authType: string
  isRegister: boolean
  regdate: FirestoreTimestamp
  expiresAt: FirestoreTimestamp
  consumedAt?: FirestoreTimestamp
}

