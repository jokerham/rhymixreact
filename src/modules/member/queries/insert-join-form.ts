import type { RhymixMemberQueryDefinition } from './types'

export const insertJoinFormQuery = {
  id: 'insertJoinForm',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertJoinFormQueryDefinition = typeof insertJoinFormQuery
