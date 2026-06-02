import type { RhymixModuleQueryDefinition } from './types'

export const deleteModuleGrantsQuery = {
  id: 'deleteModuleGrants',
  rhymixAction: 'delete',
  firestoreOperation: 'batch',
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

export type DeleteModuleGrantsQueryDefinition = typeof deleteModuleGrantsQuery
