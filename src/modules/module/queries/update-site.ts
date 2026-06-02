import type { RhymixModuleQueryDefinition } from './types'

export const updateSiteQuery = {
  id: 'updateSite',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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

export type UpdateSiteQueryDefinition = typeof updateSiteQuery
