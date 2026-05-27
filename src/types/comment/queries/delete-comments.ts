import type { RhymixCommentQueryDefinition } from './types'

export const deleteCommentsQuery = {
  id: 'deleteComments',
  rhymixAction: 'delete',
  firestoreOperation: 'batch',
  sourceTables: ['comments'],
  targets: [
    {
      collection: 'comments',
      pathPattern: 'comments/{commentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Use a Firestore batch for multi-document comment changes.'],
} as const satisfies RhymixCommentQueryDefinition

export type DeleteCommentsQueryDefinition = typeof deleteCommentsQuery
