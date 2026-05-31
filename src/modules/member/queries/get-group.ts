import type { RhymixMemberQueryDefinition } from './types'

export const getGroupQuery = {
  id: 'getGroup',
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

export type GetGroupQueryDefinition = typeof getGroupQuery
