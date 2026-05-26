import type { RhymixMemberQueryDefinition } from './types'

export const insertGroupQuery = {
  id: 'insertGroup',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertGroupQueryDefinition = typeof insertGroupQuery
