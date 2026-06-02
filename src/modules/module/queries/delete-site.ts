import type { RhymixModuleQueryDefinition } from './types'

export const deleteSiteQuery = {
  id: 'deleteSite',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['sites'],
  targets: [
    {
      collection: 'sites',
      pathPattern: 'sites/{siteSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixModuleQueryDefinition

export type DeleteSiteQueryDefinition = typeof deleteSiteQuery
