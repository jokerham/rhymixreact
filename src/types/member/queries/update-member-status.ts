import type { RhymixMemberQueryDefinition } from './types'

export const updateMemberStatusQuery = {
  id: 'updateMemberStatus',
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

export type UpdateMemberStatusQueryDefinition = typeof updateMemberStatusQuery
