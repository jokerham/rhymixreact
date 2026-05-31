import type { RhymixCommentQueryDefinition } from './types'

export const updatePublishedStatusQuery = {
  id: 'updatePublishedStatus',
  rhymixAction: 'update',
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

export type UpdatePublishedStatusQueryDefinition = typeof updatePublishedStatusQuery
