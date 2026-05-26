import type { RhymixMemberQueryDefinition } from './types'

export const getDeniedIDListQuery = {
  id: 'getDeniedIDList',
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
  notes: ['Check composite indexes and pagination requirements before runtime implementation.'],
} as const satisfies RhymixMemberQueryDefinition

export type GetDeniedIDListQueryDefinition = typeof getDeniedIDListQuery
