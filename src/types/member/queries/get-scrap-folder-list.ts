import type { RhymixMemberQueryDefinition } from './types'

export const getScrapFolderListQuery = {
  id: 'getScrapFolderList',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member_scrap_folders'],
  targets: [
    {
      collection: 'members',
      subcollection: 'scrapFolders',
      pathPattern: 'members/{memberId}/scrapFolders/{folderId}',
    },
  ],
  requiresTransaction: false,
  notes: ['Check composite indexes and pagination requirements before runtime implementation.'],
} as const satisfies RhymixMemberQueryDefinition

export type GetScrapFolderListQueryDefinition = typeof getScrapFolderListQuery
