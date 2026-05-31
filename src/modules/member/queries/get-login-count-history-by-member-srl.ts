import type { RhymixMemberQueryDefinition } from './types'

export const getLoginCountHistoryByMemberSrlQuery = {
  id: 'getLoginCountHistoryByMemberSrl',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member_count_history'],
  targets: [
    {
      collection: 'memberCountHistory',
      pathPattern: 'memberCountHistory/{memberId}',
    },
  ],
  requiresTransaction: false,
  notes: ['Check composite indexes and pagination requirements before runtime implementation.'],
} as const satisfies RhymixMemberQueryDefinition

export type GetLoginCountHistoryByMemberSrlQueryDefinition =
  typeof getLoginCountHistoryByMemberSrlQuery
