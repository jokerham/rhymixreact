import type { RhymixCommentQueryDefinition } from './types'

export const insertCommentDeclaredLogQuery = {
  id: 'insertCommentDeclaredLog',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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
    'Check composite indexes, pagination, aggregate counts, and denormalized ordering fields before runtime implementation.',
  ],
} as const satisfies RhymixCommentQueryDefinition

export type InsertCommentDeclaredLogQueryDefinition = typeof insertCommentDeclaredLogQuery
