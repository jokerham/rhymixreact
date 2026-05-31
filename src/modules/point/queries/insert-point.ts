import type { RhymixPointQueryDefinition } from './types'

export const insertPointQuery = {
  id: 'insertPoint',
  rhymixModule: 'point',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['point'],
  targets: [
    {
      collection: 'memberPoints',
      pathPattern: 'memberPoints/{memberSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix insertPoint.xml in modules/point.'],
} as const satisfies RhymixPointQueryDefinition

export type InsertPointQueryDefinition = typeof insertPointQuery
