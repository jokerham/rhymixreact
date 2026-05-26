import type { RhymixMemberQueryDefinition } from './types'

export const deleteJoinFormQuery = {
  id: 'deleteJoinForm',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['member_join_form'],
  targets: [
    {
      collection: 'memberJoinForms',
      pathPattern: 'memberJoinForms/{formId}',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type DeleteJoinFormQueryDefinition = typeof deleteJoinFormQuery
