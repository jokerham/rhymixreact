import type { RhymixMemberQueryDefinition } from './types'

export const getMemberListWithinGroupQuery = {
  id: 'getMemberListWithinGroup',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member', 'member_group_member'],
  targets: [
    {
      collection: 'members',
      pathPattern: 'members/{memberId}',
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

export type GetMemberListWithinGroupQueryDefinition = typeof getMemberListWithinGroupQuery
