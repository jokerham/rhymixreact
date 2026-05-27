import type { FirestoreTimestamp, UnknownRecord } from './common'

export type LayoutType = 'P' | 'M' | string

export interface LayoutDocument {
  layoutSrl: number
  siteSrl: number
  layout?: string
  title?: string
  extraVars?: UnknownRecord
  legacyExtraVarsRaw?: string
  layoutPath?: string
  moduleSrl: number
  regdate?: FirestoreTimestamp
  layoutType: LayoutType
}

export type LayoutCreate = Omit<LayoutDocument, 'regdate'> & {
  regdate?: FirestoreTimestamp
}

export type LayoutUpdate = Partial<
  Pick<LayoutDocument, 'title' | 'extraVars' | 'legacyExtraVarsRaw' | 'layout' | 'layoutPath'>
>
