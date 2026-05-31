import type { RhymixCommentQueryDefinition } from './types'

export const deleteDeclaredCommentLogQuery = {
  id: 'deleteDeclaredCommentLog',
  rhymixAction: 'delete',
  firestoreOperation: 'batch',
  sourceTables: ['comment_declared_log'],
  targets: [
    {
      collection: 'commentDeclaredLog',
      pathPattern: 'commentDeclaredLog/{commentSrl}_{memberSrl}_{ipaddress}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Use a Firestore batch for multi-document comment changes.',
    'Check composite indexes, pagination, aggregate counts, and denormalized ordering fields before runtime implementation.',
  ],
} as const satisfies RhymixCommentQueryDefinition

export type DeleteDeclaredCommentLogQueryDefinition = typeof deleteDeclaredCommentLogQuery
