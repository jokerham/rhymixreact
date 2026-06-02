import type { RhymixModuleQueryDefinition } from './types'

export const getModuleExtraVarsQuery = {
  id: 'getModuleExtraVars',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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
    "query by compound filter where('moduleSrl', '==', moduleSrl); optionally add where('name', '==', name) for a specific var",
  ],
} as const satisfies RhymixModuleQueryDefinition

export type GetModuleExtraVarsQueryDefinition = typeof getModuleExtraVarsQuery
