import type { RhymixModuleQueryDefinition } from './types'

export const insertModuleExtraVarsQuery = {
  id: 'insertModuleExtraVars',
  rhymixAction: 'insert',
  firestoreOperation: 'batch',
  sourceTables: ['module_extra_vars'],
  targets: [
    {
      collection: 'moduleExtraVars',
      pathPattern: 'moduleExtraVars/{id}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'batch write; upsert semantics per (moduleSrl, name)',
  ],
} as const satisfies RhymixModuleQueryDefinition

export type InsertModuleExtraVarsQueryDefinition = typeof insertModuleExtraVarsQuery
