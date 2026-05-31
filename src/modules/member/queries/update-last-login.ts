import type { RhymixMemberQueryDefinition } from './types'

export const updateLastLoginQuery = {
  id: 'updateLastLogin',
  rhymixAction: 'update',
  firestoreOperation: 'update',
  sourceTables: ['member'],
  targets: [
    {
      collection: 'members',
      pathPattern: 'members/{memberId}',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type UpdateLastLoginQueryDefinition = typeof updateLastLoginQuery
