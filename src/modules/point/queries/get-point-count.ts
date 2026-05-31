import type { RhymixPointQueryDefinition } from './types'

export const getPointCountQuery = {
  id: 'getPointCount',
  rhymixModule: 'point',
  rhymixAction: 'select',
  firestoreOperation: 'aggregate',
  sourceTables: ['point'],
  targets: [
    {
      collection: 'memberPoints',
      pathPattern: 'memberPoints/{memberSrl}',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix getPointCount.xml in modules/point.',
    'Rhymix uses SQL aggregation; Firestore may need count aggregation queries or denormalized counters.',
  ],
} as const satisfies RhymixPointQueryDefinition

export type GetPointCountQueryDefinition = typeof getPointCountQuery
