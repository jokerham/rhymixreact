import type { RhymixDocumentQueryDefinition } from './types'

export const deleteDeclaredDocumentsQuery = {
  id: 'deleteDeclaredDocuments',
  rhymixAction: 'delete',
  firestoreOperation: 'batch',
  sourceTables: ['document_declared'],
  targets: [
    {
      collection: 'documentDeclared',
      pathPattern: 'documentDeclared/{documentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Use a Firestore batch to keep related document-module records consistent.',
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type DeleteDeclaredDocumentsQueryDefinition = typeof deleteDeclaredDocumentsQuery
