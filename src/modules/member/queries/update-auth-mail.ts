import type { RhymixMemberQueryDefinition } from './types'

export const updateAuthMailQuery = {
  id: 'updateAuthMail',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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

export type UpdateAuthMailQueryDefinition = typeof updateAuthMailQuery
