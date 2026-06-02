import type { RhymixModuleQueryDefinition } from './types'

export const deleteModuleCategoryQuery = {
  id: 'deleteModuleCategory',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['module_categories'],
  targets: [
    {
      collection: 'moduleCategories',
      pathPattern: 'moduleCategories/{moduleCategorySrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixModuleQueryDefinition

export type DeleteModuleCategoryQueryDefinition = typeof deleteModuleCategoryQuery
