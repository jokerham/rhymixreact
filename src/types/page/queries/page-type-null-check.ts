import type { RhymixPageQueryDefinition } from './types'

export const pageTypeNullCheckQuery = {
  id: 'pageTypeNullCheck',
  rhymixModule: 'page',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['modules', 'module_extra_vars'],
  targets: [
    {
      collection: 'modules',
      pathPattern: 'external:modules/{moduleSrl}',
      purpose: 'external-reference',
    },
    {
      collection: 'pageTypes',
      pathPattern: 'pageTypes/{moduleSrl}',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix pageTypeNullCheck.xml in modules/page.',
    'Includes external Rhymix table references; keep those documents in sync through their owning module.',
  ],
} as const satisfies RhymixPageQueryDefinition

export type PageTypeNullCheckQueryDefinition = typeof pageTypeNullCheckQuery
