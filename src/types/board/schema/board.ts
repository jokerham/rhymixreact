import type { FirestoreTimestamp } from './common'

export interface BoardModuleDocument {
  moduleSrl: number
  module: 'board'
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
  browserTitle: string
  description?: string
  content?: string
  mcontent?: string
  isDefault: boolean
  openRss: boolean
  headerText?: string
  footerText?: string
  regdate?: FirestoreTimestamp
}

export type BoardModuleListItem = BoardModuleDocument & {
  domain?: string
}

export type BoardModuleCreate = Omit<BoardModuleDocument, 'module' | 'regdate'> & {
  module?: 'board'
  regdate?: FirestoreTimestamp
}

export type BoardModuleUpdate = Partial<
  Omit<BoardModuleDocument, 'moduleSrl' | 'module' | 'regdate'>
>
