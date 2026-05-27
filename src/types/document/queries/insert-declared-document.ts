import type { RhymixDocumentQueryDefinition } from './types'

export const insertDeclaredDocumentQuery = {
  id: 'insertDeclaredDocument',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['document_declared'],
  targets: [
    {
      collection: 'documentDeclared',
      pathPattern: 'documentDeclared/{documentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixDocumentQueryDefinition

export type InsertDeclaredDocumentQueryDefinition = typeof insertDeclaredDocumentQuery
