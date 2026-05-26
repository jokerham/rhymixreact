import type { RhymixMemberQueryDefinition } from './types'

export const updateFindAccountAnswerQuery = {
  id: 'updateFindAccountAnswer',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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

export type UpdateFindAccountAnswerQueryDefinition = typeof updateFindAccountAnswerQuery
