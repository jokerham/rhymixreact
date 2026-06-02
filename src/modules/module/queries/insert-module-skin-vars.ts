import type { RhymixModuleQueryDefinition } from './types'

export const insertModuleSkinVarsQuery = {
  id: 'insertModuleSkinVars',
  rhymixAction: 'insert',
  firestoreOperation: 'batch',
  sourceTables: ['module_skins'],
  targets: [
    {
      collection: 'moduleSkinVars',
      pathPattern: 'moduleSkinVars/{id}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'upsert per (moduleSrl, name)',
  ],
} as const satisfies RhymixModuleQueryDefinition

export type InsertModuleSkinVarsQueryDefinition = typeof insertModuleSkinVarsQuery
