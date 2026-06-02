import type { RhymixModuleQueryDefinition } from './types'

export const getModuleQuery = {
  id: 'getModule',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetModuleQueryDefinition = typeof getModuleQuery
