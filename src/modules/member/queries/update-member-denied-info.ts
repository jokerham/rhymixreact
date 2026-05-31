import type { RhymixMemberQueryDefinition } from './types'

export const updateMemberDeniedInfoQuery = {
  id: 'updateMemberDeniedInfo',
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

export type UpdateMemberDeniedInfoQueryDefinition = typeof updateMemberDeniedInfoQuery
