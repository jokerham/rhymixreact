import type { RhymixModuleQueryDefinition } from './types'

export const deleteDomainQuery = {
  id: 'deleteDomain',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['domains'],
  targets: [
    {
      collection: 'domains',
      pathPattern: 'domains/{domainSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixModuleQueryDefinition

export type DeleteDomainQueryDefinition = typeof deleteDomainQuery
