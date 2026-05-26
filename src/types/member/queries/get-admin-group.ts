import type { RhymixMemberQueryDefinition } from './types'

export const getAdminGroupQuery = {
  id: 'getAdminGroup',
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

export type GetAdminGroupQueryDefinition = typeof getAdminGroupQuery
