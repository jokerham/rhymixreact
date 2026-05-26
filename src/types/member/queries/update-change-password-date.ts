import type { RhymixMemberQueryDefinition } from './types'

export const updateChangePasswordDateQuery = {
  id: 'updateChangePasswordDate',
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

export type UpdateChangePasswordDateQueryDefinition = typeof updateChangePasswordDateQuery
