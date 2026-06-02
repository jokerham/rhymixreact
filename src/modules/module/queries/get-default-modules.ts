import type { RhymixModuleQueryDefinition } from './types'

export const getDefaultModulesQuery = {
  id: 'getDefaultModules',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['modules'],
  targets: [
    {
      collection: 'modules',
      pathPattern: 'modules/{moduleSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    "filter where is_default == 'Y'",
  ],
} as const satisfies RhymixModuleQueryDefinition

export type GetDefaultModulesQueryDefinition = typeof getDefaultModulesQuery
