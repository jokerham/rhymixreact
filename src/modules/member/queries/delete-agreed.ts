import type { RhymixMemberQueryDefinition } from './types'

export const deleteAgreedQuery = {
  id: 'deleteAgreed',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
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

export type DeleteAgreedQueryDefinition = typeof deleteAgreedQuery
