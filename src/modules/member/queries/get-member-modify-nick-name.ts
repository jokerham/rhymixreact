import type { RhymixMemberQueryDefinition } from './types'

export const getMemberModifyNickNameQuery = {
  id: 'getMemberModifyNickName',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetMemberModifyNickNameQueryDefinition = typeof getMemberModifyNickNameQuery
