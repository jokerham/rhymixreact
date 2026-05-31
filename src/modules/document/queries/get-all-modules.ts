import type { RhymixDocumentQueryDefinition } from './types'

export const getAllModulesQuery = {
  id: 'getAllModules',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['modules'],
  targets: [
    {
      collection: 'modules',
      pathPattern: 'external:modules/{moduleSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'This query references data owned by another module; keep that dependency explicit in runtime implementation.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type GetAllModulesQueryDefinition = typeof getAllModulesQuery
