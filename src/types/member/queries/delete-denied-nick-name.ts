import type { RhymixMemberQueryDefinition } from './types'

export const deleteDeniedNickNameQuery = {
  id: 'deleteDeniedNickName',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
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

export type DeleteDeniedNickNameQueryDefinition = typeof deleteDeniedNickNameQuery
