import type { RhymixMemberQueryDefinition } from './types'

export const updateMemberGroupListOrderQuery = {
  id: 'updateMemberGroupListOrder',
  rhymixAction: 'update',
  firestoreOperation: 'update',
  sourceTables: ['member_group'],
  targets: [
    {
      collection: 'memberGroups',
      pathPattern: 'memberGroups/{groupId}',
    },
  ],
  requiresTransaction: false,
  notes: ['Check composite indexes and pagination requirements before runtime implementation.'],
} as const satisfies RhymixMemberQueryDefinition

export type UpdateMemberGroupListOrderQueryDefinition = typeof updateMemberGroupListOrderQuery
