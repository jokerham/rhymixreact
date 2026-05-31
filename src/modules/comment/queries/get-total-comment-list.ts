import type { RhymixCommentQueryDefinition } from './types'

export const getTotalCommentListQuery = {
  id: 'getTotalCommentList',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['comments', 'documents'],
  targets: [
    {
      collection: 'comments',
      pathPattern: 'comments/{commentSrl}',
      purpose: 'primary',
    },
    {
      collection: 'documents',
      pathPattern: 'external:documents/{documentSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Rhymix query joins multiple SQL tables; Firestore implementation should use denormalized fields, lookup documents, or multiple reads.',
    'This query references data owned by another module; keep that dependency explicit in runtime implementation.',
    'Check composite indexes, pagination, aggregate counts, and denormalized ordering fields before runtime implementation.',
  ],
} as const satisfies RhymixCommentQueryDefinition

export type GetTotalCommentListQueryDefinition = typeof getTotalCommentListQuery
