import type { FirestoreTimestamp } from './common'

export interface DocumentHistory {
  historySrl: number
  moduleSrl: number
  documentSrl: number
  content?: string
  nickName: string
  memberSrl?: number
  regdate?: FirestoreTimestamp
  ipaddress: string
}

export type DocumentHistoryCreate = Omit<DocumentHistory, 'historySrl' | 'regdate'> & {
  regdate?: FirestoreTimestamp
}
