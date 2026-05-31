import type { RhymixPageQueryDefinition } from './types'

export const pageTypeOpageCheckQuery = {
  id: 'pageTypeOpageCheck',
  rhymixModule: 'page',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['modules'],
  targets: [
    {
      collection: 'modules',
      pathPattern: 'external:modules/{moduleSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix pageTypeOpageCheck.xml in modules/page.',
    'Includes external Rhymix table references; keep those documents in sync through their owning module.',
  ],
} as const satisfies RhymixPageQueryDefinition

export type PageTypeOpageCheckQueryDefinition = typeof pageTypeOpageCheckQuery
