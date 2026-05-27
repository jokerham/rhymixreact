import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentsQuery = {
  id: 'getDocuments',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['documents'],
  targets: [
    {
      collection: 'documents',
      pathPattern: 'documents',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Read multiple documents by documentSrl list.'],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDocumentsQueryDefinition = typeof getDocumentsQuery
