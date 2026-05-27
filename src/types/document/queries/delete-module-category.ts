import type { RhymixDocumentQueryDefinition } from './types'

export const deleteModuleCategoryQuery = {
  id: 'deleteModuleCategory',
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
  notes: [],
} as const satisfies RhymixDocumentQueryDefinition

export type DeleteModuleCategoryQueryDefinition = typeof deleteModuleCategoryQuery
