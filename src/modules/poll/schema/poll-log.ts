import type { FirestoreTimestamp } from './common'

export interface PollLogDocument {
  pollSrl: number
  memberSrl: number
  ipaddress: string
  regdate?: FirestoreTimestamp
  pollItem?: string
}

export type PollLogCreate = Omit<PollLogDocument, 'regdate'> & {
  regdate?: FirestoreTimestamp
}
