import type { RhymixCommentQueryDefinition } from './types'

export const deleteCommentQuery = {
  id: 'deleteComment',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['comments'],
  targets: [
    {
      collection: 'comments',
      pathPattern: 'comments/{commentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixCommentQueryDefinition

export type DeleteCommentQueryDefinition = typeof deleteCommentQuery
