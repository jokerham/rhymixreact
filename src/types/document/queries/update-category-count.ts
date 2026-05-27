import type { RhymixDocumentQueryDefinition } from './types'

export const updateCategoryCountQuery = {
  id: 'updateCategoryCount',
  rhymixAction: 'update',
  firestoreOperation: 'update',
  sourceTables: ['document_categories'],
  targets: [
    {
      collection: 'documentCategories',
      pathPattern: 'documentCategories/{categorySrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type UpdateCategoryCountQueryDefinition = typeof updateCategoryCountQuery
