import type { RhymixMemberQueryDefinition } from './types'

export const updateScrapDocumentFolderQuery = {
  id: 'updateScrapDocumentFolder',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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

export type UpdateScrapDocumentFolderQueryDefinition = typeof updateScrapDocumentFolderQuery
