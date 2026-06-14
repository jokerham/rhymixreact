import type { RhymixModuleQueryDefinition } from './types'

export const getNonuniqueDomainsQuery = {
  id: 'getNonuniqueDomains',
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
    'Groups by domain and counts occurrences; find duplicates by filtering count > 1 in application layer.',
  ],
} as const satisfies RhymixModuleQueryDefinition

export type GetNonuniqueDomainsQueryDefinition = typeof getNonuniqueDomainsQuery
