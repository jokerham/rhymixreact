import type { RhymixMemberQueryDefinition } from './types'

export const getMemberCountByDateQuery = {
  id: 'getMemberCountByDate',
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

export type GetMemberCountByDateQueryDefinition = typeof getMemberCountByDateQuery
