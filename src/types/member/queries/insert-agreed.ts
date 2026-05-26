import type { RhymixMemberQueryDefinition } from './types'

export const insertAgreedQuery = {
  id: 'insertAgreed',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['member_agreed'],
  targets: [
    {
      collection: 'members',
      subcollection: 'agreements',
      pathPattern: 'members/{memberId}/agreements/{agreementId}',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type InsertAgreedQueryDefinition = typeof insertAgreedQuery
