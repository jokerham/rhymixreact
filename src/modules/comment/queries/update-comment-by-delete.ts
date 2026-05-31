import type { RhymixCommentQueryDefinition } from './types'

export const updateCommentByDeleteQuery = {
  id: 'updateCommentByDelete',
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

export type UpdateCommentByDeleteQueryDefinition = typeof updateCommentByDeleteQuery
