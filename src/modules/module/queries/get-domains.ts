import type { RhymixModuleQueryDefinition } from './types'

export const getDomainsQuery = {
  id: 'getDomains',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['domains'],
  targets: [
    {
      collection: 'domains',
      pathPattern: 'domains/{domainSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Check Firestore indexes, ordering, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixModuleQueryDefinition

export type GetDomainsQueryDefinition = typeof getDomainsQuery
