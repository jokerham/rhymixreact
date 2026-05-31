import type { RhymixMemberQueryDefinition } from './types'

export const deleteMemberModifyNickNameLogQuery = {
  id: 'deleteMemberModifyNickNameLog',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['member_nickname_log'],
  targets: [
    {
      collection: 'members',
      subcollection: 'nicknameLogs',
      pathPattern: 'members/{memberId}/nicknameLogs/{logId}',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type DeleteMemberModifyNickNameLogQueryDefinition = typeof deleteMemberModifyNickNameLogQuery
