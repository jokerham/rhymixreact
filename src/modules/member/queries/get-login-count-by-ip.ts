import type { RhymixMemberQueryDefinition } from './types'

export const getLoginCountByIpQuery = {
  id: 'getLoginCountByIp',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetLoginCountByIpQueryDefinition = typeof getLoginCountByIpQuery
