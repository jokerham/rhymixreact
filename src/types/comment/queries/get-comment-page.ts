import type { RhymixCommentQueryDefinition } from './types'

export const getCommentPageQuery = {
  id: 'getCommentPage',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['comments', 'comments_list'],
  targets: [
    {
      collection: 'comments',
      pathPattern: 'comments/{commentSrl}',
      purpose: 'primary',
    },
    {
      collection: 'commentList',
      pathPattern: 'commentList/{commentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Rhymix query joins multiple SQL tables; Firestore implementation should use denormalized fields, lookup documents, or multiple reads.',
    'Check composite indexes, pagination, aggregate counts, and denormalized ordering fields before runtime implementation.',
  ],
} as const satisfies RhymixCommentQueryDefinition

export type GetCommentPageQueryDefinition = typeof getCommentPageQuery
