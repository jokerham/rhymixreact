import type { FirestoreTimestamp } from './common'

export interface ModuleCategoryDocument {
  moduleCategorySrl: number
  title?: string
  regdate?: FirestoreTimestamp
}

export type ModuleCategoryCreate = Omit<ModuleCategoryDocument, 'regdate'> & {
  regdate?: FirestoreTimestamp
}

export type ModuleCategoryUpdate = Partial<
  Omit<ModuleCategoryDocument, 'moduleCategorySrl' | 'regdate'>
>
