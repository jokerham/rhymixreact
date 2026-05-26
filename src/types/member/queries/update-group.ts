import type { RhymixMemberQueryDefinition } from './types'

export const updateGroupQuery = {
  id: 'updateGroup',
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
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type UpdateGroupQueryDefinition = typeof updateGroupQuery
