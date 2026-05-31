import type { RhymixMemberQueryDefinition } from './types'

export const deleteScrapFolderQuery = {
  id: 'deleteScrapFolder',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['member_scrap_folders'],
  targets: [
    {
      collection: 'members',
      subcollection: 'scrapFolders',
      pathPattern: 'members/{memberId}/scrapFolders/{folderId}',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type DeleteScrapFolderQueryDefinition = typeof deleteScrapFolderQuery
