import type { RhymixCommentQueryDefinition } from './types'

export const getCommentsQuery = {
  id: 'getComments',
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

export type GetCommentsQueryDefinition = typeof getCommentsQuery
