import type { FirestoreTimestamp, MemberId } from './common'

export type AuthSmsCodeDocument = {
  memberId?: MemberId
  memberSrl?: number
  phoneNumber?: string
  phoneCountry?: string
  phoneKey?: string
  codeHash: string
  regdate?: FirestoreTimestamp
  expiresAt: FirestoreTimestamp
  ipaddress?: string
  consumedAt?: FirestoreTimestamp
}

