import type { RhymixModuleQueryDefinition } from './types'

export const insertSiteQuery = {
  id: 'insertSite',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertSiteQueryDefinition = typeof insertSiteQuery
