import type { RhymixModuleQueryDefinition } from './types'

export const getModulesQuery = {
  id: 'getModules',
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
  notes: [
    'Check Firestore indexes, ordering, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixModuleQueryDefinition

export type GetModulesQueryDefinition = typeof getModulesQuery
