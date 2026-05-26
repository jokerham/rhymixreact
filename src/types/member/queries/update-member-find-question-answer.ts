import type { RhymixMemberQueryDefinition } from './types'

export const updateMemberFindQuestionAnswerQuery = {
  id: 'updateMemberFindQuestionAnswer',
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

export type UpdateMemberFindQuestionAnswerQueryDefinition =
  typeof updateMemberFindQuestionAnswerQuery
