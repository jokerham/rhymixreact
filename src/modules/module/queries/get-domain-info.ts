import type { RhymixModuleQueryDefinition } from './types'

export const getDomainInfoQuery = {
  id: 'getDomainInfo',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['domains', 'modules'],
  targets: [
    {
      collection: 'domains',
      pathPattern: 'domains/{domainSrl}',
      purpose: 'primary',
    },
    {
      collection: 'modules',
      pathPattern: 'modules/{moduleSrl}',
      purpose: 'left-join',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Left joins modules on domains.index_module_srl = modules.module_srl.',
    'Accepts domain_srl, domain, or is_default_domain as filter conditions.',
  ],
} as const satisfies RhymixModuleQueryDefinition

export type GetDomainInfoQueryDefinition = typeof getDomainInfoQuery
