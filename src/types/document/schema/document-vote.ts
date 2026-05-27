import type { FirestoreTimestamp } from './common'

export interface DocumentVotedLog {
  documentSrl: number
  memberSrl: number
  ipaddress: string
  regdate?: FirestoreTimestamp
  point: number
}

export type DocumentVotedLogCreate = Omit<DocumentVotedLog, 'regdate'> & {
  regdate?: FirestoreTimestamp
}
