import type { RhymixModuleQueryDefinition } from './types'

export const deleteModuleMobileSkinVarsQuery = {
  id: 'deleteModuleMobileSkinVars',
  rhymixAction: 'delete',
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

export type DeleteModuleMobileSkinVarsQueryDefinition = typeof deleteModuleMobileSkinVarsQuery
