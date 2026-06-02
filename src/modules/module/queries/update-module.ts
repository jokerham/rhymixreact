import type { RhymixModuleQueryDefinition } from './types'

export const updateModuleQuery = {
  id: 'updateModule',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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

export type UpdateModuleQueryDefinition = typeof updateModuleQuery
