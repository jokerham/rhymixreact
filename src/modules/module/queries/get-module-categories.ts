import type { RhymixModuleQueryDefinition } from './types'

export const getModuleCategoriesQuery = {
  id: 'getModuleCategories',
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
  notes: [
    'Check Firestore indexes, ordering, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixModuleQueryDefinition

export type GetModuleCategoriesQueryDefinition = typeof getModuleCategoriesQuery
