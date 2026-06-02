import type { RhymixModuleQueryDefinition } from './types'

export const getModuleByMidQuery = {
  id: 'getModuleByMid',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['modules'],
  targets: [
    {
      collection: 'modules',
      pathPattern: 'modules/{moduleSrl}',
      purpose: 'unique-lookup',
    },
  ],
  requiresTransaction: false,
  notes: [
    "mid is stored as a unique field; query by where('mid', '==', mid)",
  ],
} as const satisfies RhymixModuleQueryDefinition

export type GetModuleByMidQueryDefinition = typeof getModuleByMidQuery
