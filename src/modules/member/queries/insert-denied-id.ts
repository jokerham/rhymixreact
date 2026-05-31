import type { RhymixMemberQueryDefinition } from './types'

export const insertDeniedIDQuery = {
  id: 'insertDeniedID',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertDeniedIDQueryDefinition = typeof insertDeniedIDQuery
