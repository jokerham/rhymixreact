import type { RhymixMemberQueryDefinition } from './types'

export const deleteDeniedIDQuery = {
  id: 'deleteDeniedID',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
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

export type DeleteDeniedIDQueryDefinition = typeof deleteDeniedIDQuery
