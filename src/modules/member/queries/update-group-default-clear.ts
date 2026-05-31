import type { RhymixMemberQueryDefinition } from './types'

export const updateGroupDefaultClearQuery = {
  id: 'updateGroupDefaultClear',
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

export type UpdateGroupDefaultClearQueryDefinition = typeof updateGroupDefaultClearQuery
