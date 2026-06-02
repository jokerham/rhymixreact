import type { RhymixModuleQueryDefinition } from './types'

export const insertModuleConfigQuery = {
  id: 'insertModuleConfig',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['module_config'],
  targets: [
    {
      collection: 'moduleConfigs',
      pathPattern: 'moduleConfigs/{module}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'upsert semantics — use Firestore set with merge',
  ],
} as const satisfies RhymixModuleQueryDefinition

export type InsertModuleConfigQueryDefinition = typeof insertModuleConfigQuery
