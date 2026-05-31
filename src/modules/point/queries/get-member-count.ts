import type { RhymixPointQueryDefinition } from './types'

export const getMemberCountQuery = {
  id: 'getMemberCount',
  rhymixModule: 'point',
  rhymixAction: 'select',
  firestoreOperation: 'aggregate',
  sourceTables: ['member'],
  targets: [
    {
      collection: 'members',
      pathPattern: 'external:members/{memberSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix getMemberCount.xml in modules/point.',
    'Includes external Rhymix table references; keep those documents in sync through their owning module.',
  ],
} as const satisfies RhymixPointQueryDefinition

export type GetMemberCountQueryDefinition = typeof getMemberCountQuery
