import type { FirestoreTimestamp } from './common'

export interface CommentDeclaredLogDocument {
  commentSrl: number
  memberSrl: number
  ipaddress: string
  declareMessage?: string
  regdate?: FirestoreTimestamp
}

export type CommentDeclaredLogCreate = Omit<CommentDeclaredLogDocument, 'regdate'> & {
  regdate?: FirestoreTimestamp
}
