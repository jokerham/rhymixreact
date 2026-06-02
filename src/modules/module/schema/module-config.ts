import type { FirestoreTimestamp } from './common'

export interface ModuleConfigDocument {
  module: string
  siteSrl: number
  config?: string
  regdate?: FirestoreTimestamp
}

export type ModuleConfigCreate = Omit<ModuleConfigDocument, 'regdate'> & {
  regdate?: FirestoreTimestamp
}

export type ModuleConfigUpdate = Partial<
  Omit<ModuleConfigDocument, 'module' | 'regdate'>
>
