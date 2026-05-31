import type { FirestoreTimestamp } from './common'

export type CommentStatus = 0 | 1 | 2 | number

export interface CommentDocument {
  commentSrl: number
  moduleSrl: number
  documentSrl: number
  parentSrl: number
  isSecret: boolean
  content: string
  votedCount: number
  blamedCount: number
  notifyMessage: boolean
  password?: string
  userId?: string
  userName: string
  nickName: string
  memberSrl: number
  emailAddress: string
  homepage: string
  uploadedCount: number
  regdate?: FirestoreTimestamp
  lastUpdate?: FirestoreTimestamp
  ipaddress: string
  listOrder: number
  status: CommentStatus
}

export type CommentCreate = Omit<
  CommentDocument,
  'regdate' | 'lastUpdate' | 'votedCount' | 'blamedCount' | 'uploadedCount' | 'listOrder'
> & {
  regdate?: FirestoreTimestamp
  lastUpdate?: FirestoreTimestamp
  votedCount?: number
  blamedCount?: number
  uploadedCount?: number
  listOrder?: number
}

export type CommentUpdate = Partial<
  Omit<CommentDocument, 'commentSrl' | 'documentSrl' | 'regdate' | 'ipaddress'>
>
