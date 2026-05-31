import type { RhymixCommentQueryDefinition } from './types'

export const getCommentQuery = {
  id: 'getComment',
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
  notes: [],
} as const satisfies RhymixCommentQueryDefinition

export type GetCommentQueryDefinition = typeof getCommentQuery
