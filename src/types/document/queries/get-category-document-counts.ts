import type { RhymixDocumentQueryDefinition } from './types'

export const getCategoryDocumentCountsQuery = {
  id: 'getCategoryDocumentCounts',
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
  notes: [
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type GetCategoryDocumentCountsQueryDefinition = typeof getCategoryDocumentCountsQuery
