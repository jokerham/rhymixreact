import type { RhymixMemberQueryDefinition } from './types'

export const getMemberInfoQuery = {
  id: 'getMemberInfo',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member'],
  targets: [
    {
      collection: 'uniqueUserIds',
      pathPattern: 'uniqueUserIds/{normalizedUserId}',
      purpose: 'unique-lookup',
    },
    {
      collection: 'members',
      pathPattern: 'members/{memberId}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Read uniqueUserIds/{normalizedUserId} first, then read members/{memberId}.'],
} as const satisfies RhymixMemberQueryDefinition

export type GetMemberInfoQueryDefinition = typeof getMemberInfoQuery
