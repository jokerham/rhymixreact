import type { FirestoreTimestamp } from './common'

export interface PollTitleDocument {
  pollSrl: number
  pollIndexSrl: number
  title: string
  checkcount: number
  pollCount: number
  uploadTargetSrl: number
  memberSrl: number
  ipaddress: string
  regdate?: FirestoreTimestamp
  listOrder: number
}

export type PollTitleCreate = Omit<
  PollTitleDocument,
  'checkcount' | 'pollCount' | 'regdate' | 'listOrder'
> & {
  checkcount?: number
  pollCount?: number
  regdate?: FirestoreTimestamp
  listOrder?: number
}

export type PollTitleUpdate = Partial<
  Omit<PollTitleDocument, 'pollSrl' | 'pollIndexSrl' | 'memberSrl' | 'ipaddress' | 'regdate'>
>
