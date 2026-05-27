import type { RhymixCommentQueryDefinition } from './types'

export const getCommentPageItemQuery = {
  id: 'getCommentPageItem',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetCommentPageItemQueryDefinition = typeof getCommentPageItemQuery
