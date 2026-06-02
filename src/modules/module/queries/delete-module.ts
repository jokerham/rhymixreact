import type { RhymixModuleQueryDefinition } from './types'

export const deleteModuleQuery = {
  id: 'deleteModule',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
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

export type DeleteModuleQueryDefinition = typeof deleteModuleQuery
