import type { RhymixModuleQueryDefinition } from './types'

export const getModuleCategoryQuery = {
  id: 'getModuleCategory',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetModuleCategoryQueryDefinition = typeof getModuleCategoryQuery
