import type { RhymixTagQueryDefinition } from './types'

export const getDocumentsTagListQuery = {
  id: 'getDocumentsTagList',
  rhymixModule: 'tag',
  rhymixAction: 'select',
  firestoreOperation: 'aggregate',
  sourceTables: ['tags'],
  targets: [
    {
      collection: 'tags',
      pathPattern: 'tags/{tagSrl}',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix getDocumentsTagList.xml in modules/tag.',
    'Rhymix uses SQL aggregation; Firestore may need count aggregation queries or denormalized counters.',
  ],
} as const satisfies RhymixTagQueryDefinition

export type GetDocumentsTagListQueryDefinition = typeof getDocumentsTagListQuery
