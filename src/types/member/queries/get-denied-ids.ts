import type { RhymixMemberQueryDefinition } from './types'

export const getDeniedIDsQuery = {
  id: 'getDeniedIDs',
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

export type GetDeniedIDsQueryDefinition = typeof getDeniedIDsQuery
