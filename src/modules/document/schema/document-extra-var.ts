import type { UnknownRecord } from './common'

export interface DocumentExtraVar {
  moduleSrl: number
  documentSrl: number
  varIdx: number
  langCode: string
  value?: string
  eid?: string
  metadata?: UnknownRecord
}

export type DocumentExtraVarCreate = Omit<DocumentExtraVar, 'metadata'> & {
  metadata?: UnknownRecord
}
