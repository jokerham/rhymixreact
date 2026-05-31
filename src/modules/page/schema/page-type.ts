import type { PageType } from './page'

export interface PageTypeDocument {
  moduleSrl: number
  name: 'page_type'
  value: PageType
}

export type PageTypeCreate = PageTypeDocument

export type PageTypeUpdate = Partial<Omit<PageTypeDocument, 'moduleSrl' | 'name'>>
