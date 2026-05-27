import type { FirestoreTimestamp } from './common'

export interface CommentVotedLogDocument {
  commentSrl: number
  memberSrl: number
  ipaddress: string
  regdate?: FirestoreTimestamp
  point: number
}

export type CommentVotedLogCreate = Omit<CommentVotedLogDocument, 'regdate'> & {
  regdate?: FirestoreTimestamp
}
