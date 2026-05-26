import type { RhymixMemberQueryDefinition } from './types'

export const deleteMembersGroupQuery = {
  id: 'deleteMembersGroup',
  rhymixAction: 'delete',
  firestoreOperation: 'batch',
  sourceTables: ['member_group_member'],
  targets: [
    {
      collection: 'memberMemberships',
      pathPattern: 'memberMemberships/{siteId_groupId_memberId}',
    },
    {
      collection: 'memberGroups',
      subcollection: 'members',
      pathPattern: 'memberGroups/{groupId}/members/{memberId}',
    },
    {
      collection: 'members',
      pathPattern: 'members/{memberId}.groups',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Use a Firestore batch to keep denormalized documents consistent.',
    'Check composite indexes and pagination requirements before runtime implementation.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type DeleteMembersGroupQueryDefinition = typeof deleteMembersGroupQuery
