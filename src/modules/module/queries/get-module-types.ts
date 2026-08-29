import type { RhymixModuleQueryDefinition } from './types'

export const getModuleTypesQuery = {
  id: 'getModuleTypes',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['moduleTypes'],
  targets: [
    {
      collection: 'moduleTypes',
      pathPattern: 'moduleTypes/{name}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixModuleQueryDefinition

export type GetModuleTypesQueryDefinition = typeof getModuleTypesQuery
