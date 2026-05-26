import type { RhymixMemberQueryDefinition } from './types'

export const updateMemberJoinFormListorderQuery = {
  id: 'updateMemberJoinFormListorder',
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
  notes: ['Check composite indexes and pagination requirements before runtime implementation.'],
} as const satisfies RhymixMemberQueryDefinition

export type UpdateMemberJoinFormListorderQueryDefinition = typeof updateMemberJoinFormListorderQuery
