import type { RhymixMemberQueryDefinition } from './types'

export const updateJoinFormQuery = {
  id: 'updateJoinForm',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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

export type UpdateJoinFormQueryDefinition = typeof updateJoinFormQuery
