import type { RhymixMemberQueryDefinition } from './types'

export const getJoinFormQuery = {
  id: 'getJoinForm',
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
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type GetJoinFormQueryDefinition = typeof getJoinFormQuery
