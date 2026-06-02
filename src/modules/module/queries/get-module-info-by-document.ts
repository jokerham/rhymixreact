import type { RhymixModuleQueryDefinition } from './types'

export const getModuleInfoByDocumentQuery = {
  id: 'getModuleInfoByDocument',
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
    "requires join with documents collection; fetch documentSrl's moduleSrl first",
  ],
} as const satisfies RhymixModuleQueryDefinition

export type GetModuleInfoByDocumentQueryDefinition = typeof getModuleInfoByDocumentQuery
