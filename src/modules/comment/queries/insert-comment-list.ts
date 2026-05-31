import type { RhymixCommentQueryDefinition } from './types'

export const insertCommentListQuery = {
  id: 'insertCommentList',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertCommentListQueryDefinition = typeof insertCommentListQuery
