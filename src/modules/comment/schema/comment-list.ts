import type { FirestoreTimestamp } from './common'

export interface CommentListDocument {
  commentSrl: number
  documentSrl: number
  head: number
  arrange: number
  moduleSrl: number
  regdate?: FirestoreTimestamp
  depth: number
}

export type CommentListCreate = Omit<CommentListDocument, 'regdate'> & {
  regdate?: FirestoreTimestamp
}

export type CommentListUpdate = Partial<Omit<CommentListDocument, 'commentSrl' | 'regdate'>>
