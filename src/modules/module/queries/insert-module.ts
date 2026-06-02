import type { RhymixModuleQueryDefinition } from './types'

export const insertModuleQuery = {
  id: 'insertModule',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['modules'],
  targets: [
    {
      collection: 'modules',
      pathPattern: 'modules/{moduleSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixModuleQueryDefinition

export type InsertModuleQueryDefinition = typeof insertModuleQuery
