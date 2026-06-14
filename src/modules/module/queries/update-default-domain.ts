import type { RhymixModuleQueryDefinition } from './types'

export const updateDefaultDomainQuery = {
  id: 'updateDefaultDomain',
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
  notes: [
    'Sets is_default_domain on matching domain_srl and clears it on all others (not_domain_srl condition).',
    'Use a batch write to update multiple documents atomically.',
  ],
} as const satisfies RhymixModuleQueryDefinition

export type UpdateDefaultDomainQueryDefinition = typeof updateDefaultDomainQuery
