import type { RhymixMemberQueryDefinition } from './types'

export const updateMemberExtraVarsQuery = {
  id: 'updateMemberExtraVars',
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

export type UpdateMemberExtraVarsQueryDefinition = typeof updateMemberExtraVarsQuery
