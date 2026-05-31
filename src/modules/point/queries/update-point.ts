import type { RhymixPointQueryDefinition } from './types'

export const updatePointQuery = {
  id: 'updatePoint',
  rhymixModule: 'point',
  rhymixAction: 'update',
  firestoreOperation: 'update',
  sourceTables: ['point'],
  targets: [
    {
      collection: 'memberPoints',
      pathPattern: 'memberPoints/{memberSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix updatePoint.xml in modules/point.'],
} as const satisfies RhymixPointQueryDefinition

export type UpdatePointQueryDefinition = typeof updatePointQuery
