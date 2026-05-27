import type { FirestoreTimestamp } from './common'

export interface DocumentReadedLog {
  documentSrl: number
  memberSrl: number
  ipaddress: string
  regdate?: FirestoreTimestamp
}

export type DocumentReadedLogCreate = Omit<DocumentReadedLog, 'regdate'> & {
  regdate?: FirestoreTimestamp
}
