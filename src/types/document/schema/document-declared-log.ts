import type { FirestoreTimestamp } from './common'

export interface DocumentDeclaredLog {
  documentSrl: number
  memberSrl: number
  ipaddress: string
  declareMessage?: string
  regdate?: FirestoreTimestamp
}

export type DocumentDeclaredLogCreate = Omit<DocumentDeclaredLog, 'regdate'> & {
  regdate?: FirestoreTimestamp
}
