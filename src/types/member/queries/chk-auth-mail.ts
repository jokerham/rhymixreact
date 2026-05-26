import type { RhymixMemberQueryDefinition } from './types'

export const chkAuthMailQuery = {
  id: 'chkAuthMail',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type ChkAuthMailQueryDefinition = typeof chkAuthMailQuery
