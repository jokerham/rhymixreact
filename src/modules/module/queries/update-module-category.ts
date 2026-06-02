import type { RhymixModuleQueryDefinition } from './types'

export const updateModuleCategoryQuery = {
  id: 'updateModuleCategory',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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

export type UpdateModuleCategoryQueryDefinition = typeof updateModuleCategoryQuery
