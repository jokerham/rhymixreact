import type { RhymixDocumentQueryDefinition } from './types'

export const deleteCategoryQuery = {
  id: 'deleteCategory',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['document_categories'],
  targets: [
    {
      collection: 'documentCategories',
      pathPattern: 'documentCategories/{categorySrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Delete a document category by categorySrl.'],
} as const satisfies RhymixDocumentQueryDefinition

export type DeleteCategoryQueryDefinition = typeof deleteCategoryQuery
