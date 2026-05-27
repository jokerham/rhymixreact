import type { RhymixPointQueryDefinition } from './types'

export const getCommentPointQuery = {
  id: 'getCommentPoint',
  rhymixModule: 'point',
  rhymixAction: 'select',
  firestoreOperation: 'aggregate',
  sourceTables: ['comments', 'documents'],
  targets: [
    {
      collection: 'comments',
      pathPattern: 'external:comments/{commentSrl}',
      purpose: 'external-reference',
    },
    {
      collection: 'documents',
      pathPattern: 'external:documents/{documentSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix getCommentPoint.xml in modules/point.',
    'Includes external Rhymix table references; keep those documents in sync through their owning module.',
    'Rhymix uses SQL aggregation; Firestore may need count aggregation queries or denormalized counters.',
  ],
} as const satisfies RhymixPointQueryDefinition

export type GetCommentPointQueryDefinition = typeof getCommentPointQuery
