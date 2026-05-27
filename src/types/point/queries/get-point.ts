import type { RhymixPointQueryDefinition } from './types'

export const getPointQuery = {
  id: 'getPoint',
  rhymixModule: 'point',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['point'],
  targets: [
    {
      collection: 'memberPoints',
      pathPattern: 'memberPoints/{memberSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix getPoint.xml in modules/point.'],
} as const satisfies RhymixPointQueryDefinition

export type GetPointQueryDefinition = typeof getPointQuery
