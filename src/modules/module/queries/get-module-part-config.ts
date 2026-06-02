import type { RhymixModuleQueryDefinition } from './types'

export const getModulePartConfigQuery = {
  id: 'getModulePartConfig',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['module_part_config'],
  targets: [
    {
      collection: 'modulePartConfigs',
      pathPattern: 'modulePartConfigs/{id}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixModuleQueryDefinition

export type GetModulePartConfigQueryDefinition = typeof getModulePartConfigQuery
