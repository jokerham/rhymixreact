import type { RhymixCommentQueryDefinition } from './types'

export const updateDeclaredCommentQuery = {
  id: 'updateDeclaredComment',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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

export type UpdateDeclaredCommentQueryDefinition = typeof updateDeclaredCommentQuery
