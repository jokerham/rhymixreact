export interface DocumentDeclared {
  documentSrl: number
  declaredCount: number
}

export type DocumentDeclaredCreate = DocumentDeclared

export type DocumentDeclaredUpdate = Partial<Omit<DocumentDeclared, 'documentSrl'>>
