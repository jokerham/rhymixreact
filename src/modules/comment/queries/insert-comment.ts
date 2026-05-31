import type { RhymixCommentQueryDefinition } from './types'

export const insertCommentQuery = {
  id: 'insertComment',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertCommentQueryDefinition = typeof insertCommentQuery
