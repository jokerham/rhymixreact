import type { RhymixDocumentQueryDefinition } from './types'

export const updateDocumentsSecretQuery = {
  id: 'updateDocumentsSecret',
  rhymixAction: 'update',
  firestoreOperation: 'batch',
  sourceTables: ['documents'],
  targets: [
    {
      collection: 'documents',
      pathPattern: 'documents/{documentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Use a Firestore batch to keep related document-module records consistent.',
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type UpdateDocumentsSecretQueryDefinition = typeof updateDocumentsSecretQuery
