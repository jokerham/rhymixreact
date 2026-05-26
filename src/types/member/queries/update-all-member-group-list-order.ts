import type { RhymixMemberQueryDefinition } from './types'

export const updateAllMemberGroupListOrderQuery = {
  id: 'updateAllMemberGroupListOrder',
  rhymixAction: 'update',
  firestoreOperation: 'batch',
  sourceTables: ['member_group'],
  targets: [
    {
      collection: 'memberGroups',
      pathPattern: 'memberGroups/{groupId}',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Use a Firestore batch to keep denormalized documents consistent.',
    'Check composite indexes and pagination requirements before runtime implementation.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type UpdateAllMemberGroupListOrderQueryDefinition = typeof updateAllMemberGroupListOrderQuery
