import type { RhymixMemberQueryDefinition } from './types'

export const getDefaultGroupQuery = {
  id: 'getDefaultGroup',
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

export type GetDefaultGroupQueryDefinition = typeof getDefaultGroupQuery
