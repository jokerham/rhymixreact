import type { RhymixCommentQueryDefinition } from './types'

export const updateVotedCountQuery = {
  id: 'updateVotedCount',
  rhymixAction: 'update',
  firestoreOperation: 'update',
  sourceTables: ['comments'],
  targets: [
    {
      collection: 'comments',
      pathPattern: 'comments/{commentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Check composite indexes, pagination, aggregate counts, and denormalized ordering fields before runtime implementation.',
  ],
} as const satisfies RhymixCommentQueryDefinition

export type UpdateVotedCountQueryDefinition = typeof updateVotedCountQuery
