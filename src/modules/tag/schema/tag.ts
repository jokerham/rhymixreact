import type { FirestoreTimestamp } from './common'

export interface TagDocument {
  tagSrl: number
  moduleSrl: number
  documentSrl: number
  tag: string
  regdate?: FirestoreTimestamp
}

export type TagCreate = Omit<TagDocument, 'regdate'> & {
  regdate?: FirestoreTimestamp
}

export type TagUpdate = Partial<Omit<TagDocument, 'tagSrl' | 'regdate'>>
