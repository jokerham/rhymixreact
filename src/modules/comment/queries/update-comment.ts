import type { RhymixCommentQueryDefinition } from './types'

export const updateCommentQuery = {
  id: 'updateComment',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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

export type UpdateCommentQueryDefinition = typeof updateCommentQuery
