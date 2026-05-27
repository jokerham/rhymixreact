import type { RhymixDocumentQueryDefinition } from './types'

export const getCategoryListQuery = {
  id: 'getCategoryList',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['document_categories'],
  targets: [
    {
      collection: 'documentCategories',
      pathPattern: 'documentCategories',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['List categories for a specific moduleSrl.'],
} as const satisfies RhymixDocumentQueryDefinition

export type GetCategoryListQueryDefinition = typeof getCategoryListQuery
