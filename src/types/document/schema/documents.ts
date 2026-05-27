import type { FirestoreTimestamp, UnknownRecord } from './common'

export type DocumentStatus = 'PUBLIC' | 'PRIVATE' | 'DELETED' | string
export type CommentStatus = 'ALLOW' | 'DENY' | string

export interface DocumentDocument {
  documentSrl: number
  moduleSrl: number
  categorySrl: number
  langCode: string
  isNotice: boolean
  title: string
  titleBold: boolean
  titleColor?: string
  content: string
  readedCount: number
  votedCount: number
  blamedCount: number
  commentCount: number
  trackbackCount: number
  uploadedCount: number
  password?: string
  userId?: string
  userName: string
  nickName: string
  memberSrl: number
  emailAddress: string
  homepage: string
  tags?: string
  extraVars?: UnknownRecord
  regdate?: FirestoreTimestamp
  lastUpdate?: FirestoreTimestamp
  lastUpdater?: string
  ipaddress: string
  listOrder: number
  updateOrder: number
  allowTrackback: boolean
  notifyMessage: boolean
  status: DocumentStatus
  commentStatus: CommentStatus
}

export type DocumentCreate = Omit<
  DocumentDocument,
  | 'documentSrl'
  | 'regdate'
  | 'lastUpdate'
  | 'readedCount'
  | 'votedCount'
  | 'blamedCount'
  | 'commentCount'
  | 'trackbackCount'
  | 'uploadedCount'
  | 'listOrder'
  | 'updateOrder'
> & {
  regdate?: FirestoreTimestamp
  lastUpdate?: FirestoreTimestamp
  readedCount?: number
  votedCount?: number
  blamedCount?: number
  commentCount?: number
  trackbackCount?: number
  uploadedCount?: number
  listOrder?: number
  updateOrder?: number
}

export type DocumentUpdate = Partial<
  Omit<
    DocumentDocument,
    | 'documentSrl'
    | 'regdate'
    | 'lastUpdate'
    | 'memberSrl'
    | 'userId'
    | 'userName'
    | 'nickName'
    | 'emailAddress'
    | 'homepage'
    | 'ipaddress'
  >
>
