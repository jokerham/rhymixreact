import type { RhymixMemberQueryDefinition } from './types'

export const getMembersGroupsQuery = {
  id: 'getMembersGroups',
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
    'Check composite indexes and pagination requirements before runtime implementation.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type GetMembersGroupsQueryDefinition = typeof getMembersGroupsQuery
