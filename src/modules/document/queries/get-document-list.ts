import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentListQuery = {
  id: 'getDocumentList',
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
  notes: ['List documents with search / category / status filters.'],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDocumentListQueryDefinition = typeof getDocumentListQuery
