import type { RhymixPageQueryDefinition } from './types'

export const getPageListQuery = {
  id: 'getPageList',
  rhymixModule: 'page',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['modules', 'domains'],
  targets: [
    {
      collection: 'modules',
      pathPattern: 'external:modules/{moduleSrl}',
      purpose: 'external-reference',
    },
    {
      collection: 'domains',
      pathPattern: 'external:domains/{domainSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix getPageList.xml in modules/page.',
    'Includes external Rhymix table references; keep those documents in sync through their owning module.',
  ],
} as const satisfies RhymixPageQueryDefinition

export type GetPageListQueryDefinition = typeof getPageListQuery
