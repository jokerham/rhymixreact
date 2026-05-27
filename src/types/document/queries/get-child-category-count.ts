import type { RhymixDocumentQueryDefinition } from './types'

export const getChildCategoryCountQuery = {
  id: 'getChildCategoryCount',
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
  notes: [
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type GetChildCategoryCountQueryDefinition = typeof getChildCategoryCountQuery
