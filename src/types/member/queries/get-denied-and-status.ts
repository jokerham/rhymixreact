import type { RhymixMemberQueryDefinition } from './types'

export const getDeniedAndStatusQuery = {
  id: 'getDeniedAndStatus',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member'],
  targets: [
    {
      collection: 'members',
      pathPattern: 'members/{memberId}',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type GetDeniedAndStatusQueryDefinition = typeof getDeniedAndStatusQuery
