import type { RhymixMemberQueryDefinition } from './types'

export const deleteGroupQuery = {
  id: 'deleteGroup',
  rhymixAction: 'delete',
  firestoreOperation: 'transaction',
  sourceTables: ['member_group'],
  targets: [
    {
      collection: 'memberGroups',
      pathPattern: 'memberGroups/{groupId}',
    },
  ],
  requiresTransaction: true,
  notes: ['Use a Firestore transaction to keep denormalized documents consistent.'],
} as const satisfies RhymixMemberQueryDefinition

export type DeleteGroupQueryDefinition = typeof deleteGroupQuery
