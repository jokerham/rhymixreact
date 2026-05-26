import type { RhymixMemberQueryDefinition } from './types'

export const getMembersQuery = {
  id: 'getMembers',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member'],
  targets: [
    {
      collection: 'members',
      pathPattern: 'members/{memberId}',
    },
  ],
  requiresTransaction: false,
  notes: ['Check composite indexes and pagination requirements before runtime implementation.'],
} as const satisfies RhymixMemberQueryDefinition

export type GetMembersQueryDefinition = typeof getMembersQuery
