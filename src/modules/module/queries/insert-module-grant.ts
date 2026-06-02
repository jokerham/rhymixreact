import type { RhymixModuleQueryDefinition } from './types'

export const insertModuleGrantQuery = {
  id: 'insertModuleGrant',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertModuleGrantQueryDefinition = typeof insertModuleGrantQuery
