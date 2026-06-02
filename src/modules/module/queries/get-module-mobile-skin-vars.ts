import type { RhymixModuleQueryDefinition } from './types'

export const getModuleMobileSkinVarsQuery = {
  id: 'getModuleMobileSkinVars',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetModuleMobileSkinVarsQueryDefinition = typeof getModuleMobileSkinVarsQuery
