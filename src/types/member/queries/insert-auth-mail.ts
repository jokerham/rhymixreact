import type { RhymixMemberQueryDefinition } from './types'

export const insertAuthMailQuery = {
  id: 'insertAuthMail',
  rhymixAction: 'insert',
  firestoreOperation: 'transaction',
  sourceTables: ['member_auth_mail'],
  targets: [
    {
      collection: 'authMailTokens',
      pathPattern: 'authMailTokens/{authKey}',
    },
  ],
  requiresTransaction: true,
  notes: ['Use a Firestore transaction to keep denormalized documents consistent.'],
} as const satisfies RhymixMemberQueryDefinition

export type InsertAuthMailQueryDefinition = typeof insertAuthMailQuery
