import type { RhymixMemberQueryDefinition } from './types'

export const getSiteMemberListQuery = {
  id: 'getSiteMemberList',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member_group_member', 'member_group', 'member'],
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
    {
      collection: 'memberGroups',
      pathPattern: 'memberGroups/{groupId}',
    },
    {
      collection: 'members',
      pathPattern: 'members/{memberId}',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Rhymix query joins multiple SQL tables; Firestore implementation should use denormalized fields, lookup documents, or multiple reads.',
    'Check composite indexes and pagination requirements before runtime implementation.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type GetSiteMemberListQueryDefinition = typeof getSiteMemberListQuery
