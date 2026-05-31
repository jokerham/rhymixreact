import type { RhymixCommentQueryDefinition } from './types'

export const deleteDeclaredCommentsQuery = {
  id: 'deleteDeclaredComments',
  rhymixAction: 'delete',
  firestoreOperation: 'batch',
  sourceTables: ['comment_declared'],
  targets: [
    {
      collection: 'commentDeclared',
      pathPattern: 'commentDeclared/{commentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Use a Firestore batch for multi-document comment changes.',
    'Check composite indexes, pagination, aggregate counts, and denormalized ordering fields before runtime implementation.',
  ],
} as const satisfies RhymixCommentQueryDefinition

export type DeleteDeclaredCommentsQueryDefinition = typeof deleteDeclaredCommentsQuery
