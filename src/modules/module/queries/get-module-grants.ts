import type { RhymixModuleQueryDefinition } from './types'

export const getModuleGrantsQuery = {
  id: 'getModuleGrants',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['module_grants'],
  targets: [
    {
      collection: 'moduleGrants',
      pathPattern: 'moduleGrants/{id}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixModuleQueryDefinition

export type GetModuleGrantsQueryDefinition = typeof getModuleGrantsQuery
