import type { FirestoreTimestamp, MemberId } from './common'

export type MemberCountHistoryDocument = {
  memberId: MemberId
  memberSrl: number
  content: unknown
  lastUpdate?: FirestoreTimestamp
}

