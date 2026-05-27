import type { RhymixCommentQueryDefinition } from './types'

export const getAllCommentsQuery = {
  id: 'getAllComments',
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

export type GetAllCommentsQueryDefinition = typeof getAllCommentsQuery
