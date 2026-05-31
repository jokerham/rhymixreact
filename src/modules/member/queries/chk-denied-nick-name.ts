import type { RhymixMemberQueryDefinition } from './types'

export const chkDeniedNickNameQuery = {
  id: 'chkDeniedNickName',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type ChkDeniedNickNameQueryDefinition = typeof chkDeniedNickNameQuery
