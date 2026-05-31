import type { RhymixMemberQueryDefinition } from './types'

export const addScrapDocumentQuery = {
  id: 'addScrapDocument',
  rhymixAction: 'insert',
  firestoreOperation: 'transaction',
  sourceTables: ['member_scrap'],
  targets: [
    {
      collection: 'members',
      subcollection: 'scraps',
      pathPattern: 'members/{memberId}/scraps/{documentId}',
    },
  ],
  requiresTransaction: true,
  notes: ['Use a Firestore transaction to keep denormalized documents consistent.'],
} as const satisfies RhymixMemberQueryDefinition

export type AddScrapDocumentQueryDefinition = typeof addScrapDocumentQuery
