import type { FirestoreTimestamp, MemberId } from './common'

export type NicknameLogDocument = {
  memberId: MemberId
  memberSrl: number
  beforeNickName: string
  afterNickName: string
  userId?: string
  regdate?: FirestoreTimestamp
}

