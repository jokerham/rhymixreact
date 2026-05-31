import type { RhymixDocumentQueryDefinition } from './types'

export const updateCategoryQuery = {
  id: 'updateCategory',
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
  notes: ['Update a document category by categorySrl.'],
} as const satisfies RhymixDocumentQueryDefinition

export type UpdateCategoryQueryDefinition = typeof updateCategoryQuery
