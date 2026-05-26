import type { RhymixMemberQueryDefinition } from './types'

export const deleteScrapDocumentQuery = {
  id: 'deleteScrapDocument',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['member_scrap'],
  targets: [
    {
      collection: 'members',
      subcollection: 'scraps',
      pathPattern: 'members/{memberId}/scraps/{documentId}',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type DeleteScrapDocumentQueryDefinition = typeof deleteScrapDocumentQuery
