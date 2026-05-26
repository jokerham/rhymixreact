import type { RhymixMemberQueryDefinition } from './types'

export const getMemberInfoByMemberSrlQuery = {
  id: 'getMemberInfoByMemberSrl',
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
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type GetMemberInfoByMemberSrlQueryDefinition = typeof getMemberInfoByMemberSrlQuery
