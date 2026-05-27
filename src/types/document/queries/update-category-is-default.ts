import type { RhymixDocumentQueryDefinition } from './types'

export const updateCategoryIsDefaultQuery = {
  id: 'updateCategoryIsDefault',
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

export type UpdateCategoryIsDefaultQueryDefinition = typeof updateCategoryIsDefaultQuery
