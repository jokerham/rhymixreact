import type { RhymixMemberQueryDefinition } from './types'

export const getMemberGroupsQuery = {
  id: 'getMemberGroups',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member_group', 'member_group_member'],
  targets: [
    {
      collection: 'memberGroups',
      pathPattern: 'memberGroups/{groupId}',
    },
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
    'Rhymix query joins multiple SQL tables; Firestore implementation should use denormalized fields, lookup documents, or multiple reads.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type GetMemberGroupsQueryDefinition = typeof getMemberGroupsQuery
