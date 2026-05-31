import type { RhymixMemberQueryDefinition } from './types'

export const updateMemberListOrderAllQuery = {
  id: 'updateMemberListOrderAll',
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
  notes: [
    'Use a Firestore batch to keep denormalized documents consistent.',
    'Check composite indexes and pagination requirements before runtime implementation.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type UpdateMemberListOrderAllQueryDefinition = typeof updateMemberListOrderAllQuery
