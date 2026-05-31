import type { RhymixDocumentQueryDefinition } from './types'

export const insertDocumentDeclaredLogQuery = {
  id: 'insertDocumentDeclaredLog',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['document_declared_log'],
  targets: [
    {
      collection: 'documentDeclaredLog',
      pathPattern: 'documentDeclaredLog/{documentSrl}_{memberSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixDocumentQueryDefinition

export type InsertDocumentDeclaredLogQueryDefinition = typeof insertDocumentDeclaredLogQuery
