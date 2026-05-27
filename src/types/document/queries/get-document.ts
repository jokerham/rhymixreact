import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentQuery = {
  id: 'getDocument',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['documents'],
  targets: [
    {
      collection: 'documents',
      pathPattern: 'documents/{documentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Read document by documentSrl.'],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDocumentQueryDefinition = typeof getDocumentQuery
