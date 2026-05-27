import type { RhymixPointQueryDefinition } from './types'

export const getMemberListQuery = {
  id: 'getMemberList',
  rhymixModule: 'point',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member', 'point'],
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
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix getMemberList.xml in modules/point.',
    'Includes external Rhymix table references; keep those documents in sync through their owning module.',
  ],
} as const satisfies RhymixPointQueryDefinition

export type GetMemberListQueryDefinition = typeof getMemberListQuery
