import type { RhymixDocumentQueryDefinition } from './types'

export const updateDocumentCategoryQuery = {
  id: 'updateDocumentCategory',
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
  notes: [],
} as const satisfies RhymixDocumentQueryDefinition

export type UpdateDocumentCategoryQueryDefinition = typeof updateDocumentCategoryQuery
