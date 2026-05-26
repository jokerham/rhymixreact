import type { RhymixMemberQueryDefinition } from './types'

export const getGroupsQuery = {
  id: 'getGroups',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetGroupsQueryDefinition = typeof getGroupsQuery
