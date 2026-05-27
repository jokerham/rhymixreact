import type { RhymixCommentQueryDefinition } from './types'

export const getCommentListQuery = {
  id: 'getCommentList',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['comments'],
  targets: [
    {
      collection: 'comments',
      pathPattern: 'comments/{commentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Check composite indexes, pagination, aggregate counts, and denormalized ordering fields before runtime implementation.',
  ],
} as const satisfies RhymixCommentQueryDefinition

export type GetCommentListQueryDefinition = typeof getCommentListQuery
