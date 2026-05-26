import type { RhymixMemberQueryDefinition } from './types'

export const chkDeniedIDQuery = {
  id: 'chkDeniedID',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member_denied_user_id'],
  targets: [
    {
      collection: 'deniedUserIds',
      pathPattern: 'deniedUserIds/{normalizedUserId}',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type ChkDeniedIDQueryDefinition = typeof chkDeniedIDQuery
