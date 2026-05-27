import type { RhymixPointQueryDefinition } from './types'

export const initMemberPointQuery = {
  id: 'initMemberPoint',
  rhymixModule: 'point',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['point'],
  targets: [
    {
      collection: 'memberPoints',
      pathPattern: 'memberPoints/{memberSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix initMemberPoint.xml in modules/point.'],
} as const satisfies RhymixPointQueryDefinition

export type InitMemberPointQueryDefinition = typeof initMemberPointQuery
