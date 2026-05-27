import type { RhymixCommentQueryDefinition } from './types'

export const insertDeclaredCommentQuery = {
  id: 'insertDeclaredComment',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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
    'Check composite indexes, pagination, aggregate counts, and denormalized ordering fields before runtime implementation.',
  ],
} as const satisfies RhymixCommentQueryDefinition

export type InsertDeclaredCommentQueryDefinition = typeof insertDeclaredCommentQuery
