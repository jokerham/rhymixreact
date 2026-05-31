import type { FirestoreTimestamp } from './common'

export interface DocumentCategory {
  categorySrl: number
  moduleSrl: number
  parentSrl: number
  title: string
  description?: string
  groupSrls?: string
  color?: string
  expand: boolean
  isDefault: boolean
  documentCount: number
  regdate: FirestoreTimestamp
  lastUpdate?: FirestoreTimestamp
  listOrder: number
}

export type DocumentCategoryCreate = Omit<
  DocumentCategory,
  'categorySrl' | 'regdate' | 'lastUpdate'
> & {
  regdate?: FirestoreTimestamp
  lastUpdate?: FirestoreTimestamp
}

export type DocumentCategoryUpdate = Partial<
  Omit<DocumentCategory, 'categorySrl' | 'moduleSrl' | 'regdate'>
>
