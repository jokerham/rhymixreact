import type { RhymixCommentQueryDefinition } from './types'

export const getVotedMemberListQuery = {
  id: 'getVotedMemberList',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['comment_voted_log', 'member'],
  targets: [
    {
      collection: 'commentVotedLog',
      pathPattern: 'commentVotedLog/{commentSrl}_{memberSrl}_{ipaddress}',
      purpose: 'primary',
    },
    {
      collection: 'members',
      pathPattern: 'external:members/{memberId}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Rhymix query joins multiple SQL tables; Firestore implementation should use denormalized fields, lookup documents, or multiple reads.',
    'This query references data owned by another module; keep that dependency explicit in runtime implementation.',
    'Check composite indexes, pagination, aggregate counts, and denormalized ordering fields before runtime implementation.',
  ],
} as const satisfies RhymixCommentQueryDefinition

export type GetVotedMemberListQueryDefinition = typeof getVotedMemberListQuery
