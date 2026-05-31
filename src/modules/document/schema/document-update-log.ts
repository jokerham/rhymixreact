import type { FirestoreTimestamp, UnknownRecord } from './common'

export interface DocumentUpdateLog {
  updateId: number
  documentSrl: number
  updateMemberSrl: number
  moduleSrl: number
  categorySrl?: number
  ipaddress: string
  nickName: string
  regdate?: FirestoreTimestamp
  title?: string
  titleBold: boolean
  titleColor?: string
  content: string
  updateNickName?: string
  tags?: string
  extraVars?: UnknownRecord
  reasonUpdate?: string
  isAdmin?: boolean
}

export type DocumentUpdateLogCreate = Omit<DocumentUpdateLog, 'updateId' | 'regdate'> & {
  updateId?: number
  regdate?: FirestoreTimestamp
}
