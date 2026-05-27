import type { RhymixCommentQueryDefinition } from './types'

export const deleteCommentListQuery = {
  id: 'deleteCommentList',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['comments_list'],
  targets: [
    {
      collection: 'commentList',
      pathPattern: 'commentList/{commentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Check composite indexes, pagination, aggregate counts, and denormalized ordering fields before runtime implementation.',
  ],
} as const satisfies RhymixCommentQueryDefinition

export type DeleteCommentListQueryDefinition = typeof deleteCommentListQuery
