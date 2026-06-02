import type { FirestoreTimestamp } from './common'

export interface ModulePartConfigDocument {
  module: string
  moduleSrl: number
  config?: string
  regdate?: FirestoreTimestamp
}

export type ModulePartConfigCreate = Omit<ModulePartConfigDocument, 'regdate'> & {
  regdate?: FirestoreTimestamp
}

export type ModulePartConfigUpdate = Partial<
  Omit<ModulePartConfigDocument, 'module' | 'moduleSrl' | 'regdate'>
>
