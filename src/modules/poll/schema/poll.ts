import type { FirestoreTimestamp } from './common'

export interface PollDocument {
  pollSrl: number
  stopDate?: FirestoreTimestamp
  uploadTargetSrl: number
  pollCount: number
  memberSrl: number
  ipaddress: string
  regdate?: FirestoreTimestamp
  listOrder: number
  pollType: number
}

export type PollCreate = Omit<PollDocument, 'pollCount' | 'regdate' | 'listOrder' | 'pollType'> & {
  pollCount?: number
  regdate?: FirestoreTimestamp
  listOrder?: number
  pollType?: number
}

export type PollUpdate = Partial<
  Omit<PollDocument, 'pollSrl' | 'memberSrl' | 'ipaddress' | 'regdate'>
>
