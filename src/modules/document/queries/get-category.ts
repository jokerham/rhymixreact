import type { RhymixDocumentQueryDefinition } from './types'

export const getCategoryQuery = {
  id: 'getCategory',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['document_categories'],
  targets: [
    {
      collection: 'documentCategories',
      pathPattern: 'documentCategories/{categorySrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Read category by categorySrl.'],
} as const satisfies RhymixDocumentQueryDefinition

export type GetCategoryQueryDefinition = typeof getCategoryQuery
