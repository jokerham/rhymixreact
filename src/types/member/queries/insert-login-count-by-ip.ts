import type { RhymixMemberQueryDefinition } from './types'

export const insertLoginCountByIpQuery = {
  id: 'insertLoginCountByIp',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['member_login_count'],
  targets: [
    {
      collection: 'memberLoginCounts',
      pathPattern: 'memberLoginCounts/{ipKey}',
    },
  ],
  requiresTransaction: false,
  notes: ['Check composite indexes and pagination requirements before runtime implementation.'],
} as const satisfies RhymixMemberQueryDefinition

export type InsertLoginCountByIpQueryDefinition = typeof insertLoginCountByIpQuery
