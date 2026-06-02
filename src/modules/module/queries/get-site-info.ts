import type { RhymixModuleQueryDefinition } from './types'

export const getSiteInfoQuery = {
  id: 'getSiteInfo',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['sites'],
  targets: [
    {
      collection: 'sites',
      pathPattern: 'sites/{siteSrl}',
      purpose: 'unique-lookup',
    },
  ],
  requiresTransaction: false,
  notes: [
    "fetches by domain field; query by where('domain', '==', domain)",
  ],
} as const satisfies RhymixModuleQueryDefinition

export type GetSiteInfoQueryDefinition = typeof getSiteInfoQuery
