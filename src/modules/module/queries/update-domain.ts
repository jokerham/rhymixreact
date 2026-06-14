import type { RhymixModuleQueryDefinition } from './types'

export const updateDomainQuery = {
  id: 'updateDomain',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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

export type UpdateDomainQueryDefinition = typeof updateDomainQuery
