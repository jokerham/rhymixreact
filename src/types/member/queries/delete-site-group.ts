import type { RhymixMemberQueryDefinition } from './types'

export const deleteSiteGroupQuery = {
  id: 'deleteSiteGroup',
  rhymixAction: 'delete',
  firestoreOperation: 'batch',
  sourceTables: ['member_group'],
  targets: [
    {
      collection: 'memberGroups',
      pathPattern: 'memberGroups/{groupId}',
    },
  ],
  requiresTransaction: false,
  notes: ['Use a Firestore batch to keep denormalized documents consistent.'],
} as const satisfies RhymixMemberQueryDefinition

export type DeleteSiteGroupQueryDefinition = typeof deleteSiteGroupQuery
