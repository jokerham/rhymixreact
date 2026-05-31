import type { RhymixDocumentQueryDefinition } from './types'

export const updateCategoryOrderQuery = {
  id: 'updateCategoryOrder',
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
  notes: [],
} as const satisfies RhymixDocumentQueryDefinition

export type UpdateCategoryOrderQueryDefinition = typeof updateCategoryOrderQuery
