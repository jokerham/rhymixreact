import type { RhymixMemberQueryDefinition } from './types'

export const getMemberGroupMemberCountByDateQuery = {
  id: 'getMemberGroupMemberCountByDate',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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
  notes: ['Check composite indexes and pagination requirements before runtime implementation.'],
} as const satisfies RhymixMemberQueryDefinition

export type GetMemberGroupMemberCountByDateQueryDefinition =
  typeof getMemberGroupMemberCountByDateQuery
