import type { RhymixMemberQueryDefinition } from './types'

export const insertMemberModifyNickNameQuery = {
  id: 'insertMemberModifyNickName',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertMemberModifyNickNameQueryDefinition = typeof insertMemberModifyNickNameQuery
