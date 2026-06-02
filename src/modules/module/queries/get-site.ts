import type { RhymixModuleQueryDefinition } from './types'

export const getSiteQuery = {
  id: 'getSite',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetSiteQueryDefinition = typeof getSiteQuery
