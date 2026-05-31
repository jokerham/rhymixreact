import type { RhymixMemberQueryDefinition } from './types'

export const getMemberListQuery = {
  id: 'getMemberList',
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

export type GetMemberListQueryDefinition = typeof getMemberListQuery
