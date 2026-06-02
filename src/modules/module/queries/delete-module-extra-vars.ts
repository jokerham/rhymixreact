import type { RhymixModuleQueryDefinition } from './types'

export const deleteModuleExtraVarsQuery = {
  id: 'deleteModuleExtraVars',
  rhymixAction: 'delete',
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
  notes: [],
} as const satisfies RhymixModuleQueryDefinition

export type DeleteModuleExtraVarsQueryDefinition = typeof deleteModuleExtraVarsQuery
