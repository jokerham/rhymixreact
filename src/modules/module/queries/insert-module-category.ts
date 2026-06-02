import type { RhymixModuleQueryDefinition } from './types'

export const insertModuleCategoryQuery = {
  id: 'insertModuleCategory',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertModuleCategoryQueryDefinition = typeof insertModuleCategoryQuery
