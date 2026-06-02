import type { RhymixModuleQueryDefinition } from './types'

export const insertModuleMobileSkinVarsQuery = {
  id: 'insertModuleMobileSkinVars',
  rhymixAction: 'insert',
  firestoreOperation: 'batch',
  sourceTables: ['module_mobile_skins'],
  targets: [
    {
      collection: 'moduleMobileSkinVars',
      pathPattern: 'moduleMobileSkinVars/{id}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixModuleQueryDefinition

export type InsertModuleMobileSkinVarsQueryDefinition = typeof insertModuleMobileSkinVarsQuery
