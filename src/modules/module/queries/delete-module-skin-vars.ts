import type { RhymixModuleQueryDefinition } from './types'

export const deleteModuleSkinVarsQuery = {
  id: 'deleteModuleSkinVars',
  rhymixAction: 'delete',
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
  notes: [],
} as const satisfies RhymixModuleQueryDefinition

export type DeleteModuleSkinVarsQueryDefinition = typeof deleteModuleSkinVarsQuery
