import type { RhymixCommentQueryDefinition } from './types'

export const getCommentDeclaredLogInfoQuery = {
  id: 'getCommentDeclaredLogInfo',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetCommentDeclaredLogInfoQueryDefinition = typeof getCommentDeclaredLogInfoQuery
