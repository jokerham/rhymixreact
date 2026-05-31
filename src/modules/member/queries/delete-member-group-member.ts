import type { RhymixMemberQueryDefinition } from './types'

export const deleteMemberGroupMemberQuery = {
  id: 'deleteMemberGroupMember',
  rhymixAction: 'delete',
  firestoreOperation: 'transaction',
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
  requiresTransaction: true,
  notes: ['Use a Firestore transaction to keep denormalized documents consistent.'],
} as const satisfies RhymixMemberQueryDefinition

export type DeleteMemberGroupMemberQueryDefinition = typeof deleteMemberGroupMemberQuery
