import type { RhymixDocumentQueryDefinition } from './types'

export const insertCategoryQuery = {
  id: 'insertCategory',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['document_categories'],
  targets: [
    {
      collection: 'documentCategories',
      pathPattern: 'documentCategories/{categorySrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Create a new category record.'],
} as const satisfies RhymixDocumentQueryDefinition

export type InsertCategoryQueryDefinition = typeof insertCategoryQuery
