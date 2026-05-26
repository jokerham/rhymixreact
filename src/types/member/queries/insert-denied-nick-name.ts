import type { RhymixMemberQueryDefinition } from './types'

export const insertDeniedNickNameQuery = {
  id: 'insertDeniedNickName',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['member_denied_nick_name'],
  targets: [
    {
      collection: 'deniedNicknames',
      pathPattern: 'deniedNicknames/{normalizedNickname}',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type InsertDeniedNickNameQueryDefinition = typeof insertDeniedNickNameQuery
