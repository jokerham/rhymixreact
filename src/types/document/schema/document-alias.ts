export interface DocumentAlias {
  aliasSrl: number
  moduleSrl: number
  documentSrl: number
  aliasTitle: string
}

export type DocumentAliasCreate = Omit<DocumentAlias, 'aliasSrl'> & {
  aliasSrl?: number
}

export type DocumentAliasUpdate = Partial<Omit<DocumentAlias, 'aliasSrl' | 'documentSrl'>>
