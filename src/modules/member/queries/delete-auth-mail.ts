import type { RhymixMemberQueryDefinition } from './types'

export const deleteAuthMailQuery = {
  id: 'deleteAuthMail',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['member_auth_mail'],
  targets: [
    {
      collection: 'authMailTokens',
      pathPattern: 'authMailTokens/{authKey}',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type DeleteAuthMailQueryDefinition = typeof deleteAuthMailQuery
