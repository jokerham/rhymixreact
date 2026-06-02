import type { RhymixModuleQueryDefinition } from './types'

export const deleteModulePartConfigQuery = {
  id: 'deleteModulePartConfig',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
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

export type DeleteModulePartConfigQueryDefinition = typeof deleteModulePartConfigQuery
