import type { RhymixMemberQueryDefinition } from './types'

export const updateScrapFolderQuery = {
  id: 'updateScrapFolder',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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

export type UpdateScrapFolderQueryDefinition = typeof updateScrapFolderQuery
