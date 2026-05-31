import type { RhymixMemberQueryDefinition } from './types'

export const getScrapDocumentQuery = {
  id: 'getScrapDocument',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetScrapDocumentQueryDefinition = typeof getScrapDocumentQuery
