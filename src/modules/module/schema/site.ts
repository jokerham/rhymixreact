import type { FirestoreTimestamp } from './common'

export interface SiteDocument {
  siteSrl: number
  indexModuleSrl: number
  domain: string
  defaultLanguage?: string
  regdate?: FirestoreTimestamp
}

export type SiteCreate = Omit<SiteDocument, 'regdate'> & {
  regdate?: FirestoreTimestamp
}

export type SiteUpdate = Partial<
  Omit<SiteDocument, 'siteSrl' | 'regdate'>
>
