export interface ModuleConf {
  name: string
  title: string
  description: string
  category: 'service' | 'content' | 'member' | 'utility' | 'construction' | 'system'
  noSkin: boolean
  // page module only: virtual sub-types (e.g. ARTICLE, WIDGET, OUTSIDE)
  pageTypes?: Array<{ name: string; title: string; noSkin: boolean }>
}
