import type { RhymixMemberQueryDefinition } from './types'

export const updateMemberPasswordQuery = {
  id: 'updateMemberPassword',
  rhymixAction: 'update',
  firestoreOperation: 'transaction',
  sourceTables: ['member'],
  targets: [
    {
      collection: 'members',
      pathPattern: 'members/{memberId}',
    },
  ],
  requiresTransaction: true,
  notes: ['Use a Firestore transaction to keep denormalized documents consistent.'],
} as const satisfies RhymixMemberQueryDefinition

export type UpdateMemberPasswordQueryDefinition = typeof updateMemberPasswordQuery
