import type { RhymixModuleQueryDefinition } from './types'

export const insertModulePartConfigQuery = {
  id: 'insertModulePartConfig',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['module_part_config'],
  targets: [
    {
      collection: 'modulePartConfigs',
      pathPattern: 'modulePartConfigs/{id}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'upsert per (module, moduleSrl)',
  ],
} as const satisfies RhymixModuleQueryDefinition

export type InsertModulePartConfigQueryDefinition = typeof insertModulePartConfigQuery
