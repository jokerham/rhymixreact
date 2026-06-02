import type { RhymixModuleQueryDefinition } from './types'

export const getModuleSkinVarsQuery = {
  id: 'getModuleSkinVars',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetModuleSkinVarsQueryDefinition = typeof getModuleSkinVarsQuery
