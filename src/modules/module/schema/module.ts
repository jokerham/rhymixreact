import type { FirestoreTimestamp } from './common'

export interface ModuleDocument {
  moduleSrl: number
  module: string
  moduleCategorySrl: number
  menuSrl: number
  siteSrl: number
  domainSrl: number
  mid: string
  layoutSrl: number
  mlayoutSrl: number
  useMobile: boolean
  skin?: string
  isSkinFix: boolean
  mskin?: string
  isMskinFix: boolean
  browserTitle?: string
  description?: string
  content?: string
  mcontent?: string
  isDefault: boolean
  openRss: boolean
  headerText?: string
  footerText?: string
  regdate?: FirestoreTimestamp
}

export type ModuleCreate = Omit<ModuleDocument, 'regdate'> & {
  regdate?: FirestoreTimestamp
}

export type ModuleUpdate = Partial<
  Omit<ModuleDocument, 'moduleSrl' | 'regdate'>
>
