import type { RhymixModuleQueryDefinition } from './types'

export const getSitesQuery = {
  id: 'getSites',
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
  notes: [
    'Check Firestore indexes, ordering, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixModuleQueryDefinition

export type GetSitesQueryDefinition = typeof getSitesQuery
