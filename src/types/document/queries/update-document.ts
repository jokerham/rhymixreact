import type { RhymixDocumentQueryDefinition } from './types'

export const updateDocumentQuery = {
  id: 'updateDocument',
  rhymixAction: 'update',
  firestoreOperation: 'update',
  sourceTables: ['documents'],
  targets: [
    {
      collection: 'documents',
      pathPattern: 'documents/{documentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Update document fields by documentSrl.'],
} as const satisfies RhymixDocumentQueryDefinition

export type UpdateDocumentQueryDefinition = typeof updateDocumentQuery
