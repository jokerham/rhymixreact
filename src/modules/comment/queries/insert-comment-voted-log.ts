import type { RhymixCommentQueryDefinition } from './types'

export const insertCommentVotedLogQuery = {
  id: 'insertCommentVotedLog',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['comment_voted_log'],
  targets: [
    {
      collection: 'commentVotedLog',
      pathPattern: 'commentVotedLog/{commentSrl}_{memberSrl}_{ipaddress}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Check composite indexes, pagination, aggregate counts, and denormalized ordering fields before runtime implementation.',
  ],
} as const satisfies RhymixCommentQueryDefinition

export type InsertCommentVotedLogQueryDefinition = typeof insertCommentVotedLogQuery
