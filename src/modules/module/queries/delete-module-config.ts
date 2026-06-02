import type { RhymixModuleQueryDefinition } from './types'

export const deleteModuleConfigQuery = {
  id: 'deleteModuleConfig',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['module_config'],
  targets: [
    {
      collection: 'moduleConfigs',
      pathPattern: 'moduleConfigs/{module}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixModuleQueryDefinition

export type DeleteModuleConfigQueryDefinition = typeof deleteModuleConfigQuery
