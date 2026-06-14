import type { RhymixModuleQueryDefinition } from './types'

export const insertDomainQuery = {
  id: 'insertDomain',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertDomainQueryDefinition = typeof insertDomainQuery
