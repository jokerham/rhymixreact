import type { RhymixDocumentQueryDefinition } from './types'

export const deleteDocumentQuery = {
  id: 'deleteDocument',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['documents'],
  targets: [
    {
      collection: 'documents',
      pathPattern: 'documents/{documentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Delete a document by documentSrl.'],
} as const satisfies RhymixDocumentQueryDefinition

export type DeleteDocumentQueryDefinition = typeof deleteDocumentQuery
