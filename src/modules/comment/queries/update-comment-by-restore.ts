import type { RhymixCommentQueryDefinition } from './types'

export const updateCommentByRestoreQuery = {
  id: 'updateCommentByRestore',
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

export type UpdateCommentByRestoreQueryDefinition = typeof updateCommentByRestoreQuery
