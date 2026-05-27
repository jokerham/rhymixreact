import type { FirestoreTimestamp } from './common'

export type PageType = 'ARTICLE' | 'OUTSIDE' | 'WIDGET' | string

export interface PageModuleDocument {
  moduleSrl: number
  module: 'page'
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

export type PageModuleListItem = PageModuleDocument & {
  domain?: string
  pageType?: PageType
}

export type PageModuleCreate = Omit<PageModuleDocument, 'module' | 'regdate'> & {
  module?: 'page'
  regdate?: FirestoreTimestamp
}

export type PageModuleUpdate = Partial<Omit<PageModuleDocument, 'moduleSrl' | 'module' | 'regdate'>>
