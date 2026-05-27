import type { RhymixPointQueryDefinition } from './types'

export const deleteMemberGroupQuery = {
  id: 'deleteMemberGroup',
  rhymixModule: 'point',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
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
    'Mapped from Rhymix deleteMemberGroup.xml in modules/point.',
    'Includes external Rhymix table references; keep those documents in sync through their owning module.',
  ],
} as const satisfies RhymixPointQueryDefinition

export type DeleteMemberGroupQueryDefinition = typeof deleteMemberGroupQuery
