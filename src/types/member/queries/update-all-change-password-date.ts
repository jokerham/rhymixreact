import type { RhymixMemberQueryDefinition } from './types'

export const updateAllChangePasswordDateQuery = {
  id: 'updateAllChangePasswordDate',
  rhymixAction: 'update',
  firestoreOperation: 'batch',
  sourceTables: ['member'],
  targets: [
    {
      collection: 'members',
      pathPattern: 'members/{memberId}',
    },
  ],
  requiresTransaction: false,
  notes: ['Use a Firestore batch to keep denormalized documents consistent.'],
} as const satisfies RhymixMemberQueryDefinition

export type UpdateAllChangePasswordDateQueryDefinition = typeof updateAllChangePasswordDateQuery
