import type { RhymixPointQueryDefinition } from './types'

export const getMemberListWithinGroupQuery = {
  id: 'getMemberListWithinGroup',
  rhymixModule: 'point',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member', 'point', 'member_group_member'],
  targets: [
    {
      collection: 'members',
      pathPattern: 'external:members/{memberSrl}',
      purpose: 'external-reference',
    },
    {
      collection: 'memberPoints',
      pathPattern: 'memberPoints/{memberSrl}',
    },
    {
      collection: 'memberMemberships',
      pathPattern: 'external:memberMemberships/{membershipId}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix getMemberListWithinGroup.xml in modules/point.',
    'Includes external Rhymix table references; keep those documents in sync through their owning module.',
  ],
} as const satisfies RhymixPointQueryDefinition

export type GetMemberListWithinGroupQueryDefinition = typeof getMemberListWithinGroupQuery
