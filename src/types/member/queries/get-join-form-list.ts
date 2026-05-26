import type { RhymixMemberQueryDefinition } from './types'

export const getJoinFormListQuery = {
  id: 'getJoinFormList',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetJoinFormListQueryDefinition = typeof getJoinFormListQuery
