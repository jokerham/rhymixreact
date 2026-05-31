import type { RhymixDocumentQueryDefinition } from './types'

export const insertDocumentQuery = {
  id: 'insertDocument',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['documents'],
  targets: [
    {
      collection: 'documents',
      pathPattern: 'documents/{documentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Create a new document record.'],
} as const satisfies RhymixDocumentQueryDefinition

export type InsertDocumentQueryDefinition = typeof insertDocumentQuery
