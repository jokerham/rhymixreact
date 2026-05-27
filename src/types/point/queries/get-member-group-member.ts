import type { RhymixPointQueryDefinition } from './types'

export const getMemberGroupMemberQuery = {
  id: 'getMemberGroupMember',
  rhymixModule: 'point',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member_group_member'],
  targets: [
    {
      collection: 'memberMemberships',
      pathPattern: 'external:memberMemberships/{membershipId}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix getMemberGroupMember.xml in modules/point.',
    'Includes external Rhymix table references; keep those documents in sync through their owning module.',
  ],
} as const satisfies RhymixPointQueryDefinition

export type GetMemberGroupMemberQueryDefinition = typeof getMemberGroupMemberQuery
