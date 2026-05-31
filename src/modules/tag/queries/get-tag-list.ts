import type { RhymixTagQueryDefinition } from './types'

export const getTagListQuery = {
  id: 'getTagList',
  rhymixModule: 'tag',
  rhymixAction: 'select',
  firestoreOperation: 'aggregate',
  sourceTables: ['tags', 'documents'],
  targets: [
    {
      collection: 'tags',
      pathPattern: 'tags/{tagSrl}',
    },
    {
      collection: 'documents',
      pathPattern: 'external:documents/{documentSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix getTagList.xml in modules/tag.',
    'Includes external Rhymix table references; keep those documents in sync through their owning module.',
    'Rhymix uses SQL aggregation; Firestore may need count aggregation queries or denormalized counters.',
  ],
} as const satisfies RhymixTagQueryDefinition

export type GetTagListQueryDefinition = typeof getTagListQuery
