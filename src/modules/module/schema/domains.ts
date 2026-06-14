import type { FirestoreTimestamp } from './common'

export interface DomainDocument {
  domainSrl: number
  domain: string
  isDefaultDomain: 'Y' | 'N'
  indexModuleSrl: number
  indexDocumentSrl: number
  defaultLayoutSrl: number
  defaultMlayoutSrl: number
  defaultMenuSrl: number
  httpPort?: number
  httpsPort?: number
  security: string
  description?: string
  settings?: string
  regdate?: FirestoreTimestamp
}

export type DomainCreate = Omit<DomainDocument, 'regdate'> & {
  regdate?: FirestoreTimestamp
}

export type DomainUpdate = Partial<Omit<DomainDocument, 'domainSrl' | 'regdate'>>
