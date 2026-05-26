import type { RhymixMemberQueryDefinition } from './types'

export const insertScrapFolderQuery = {
  id: 'insertScrapFolder',
  rhymixAction: 'insert',
  firestoreOperation: 'transaction',
  sourceTables: ['member_scrap_folders'],
  targets: [
    {
      collection: 'members',
      subcollection: 'scrapFolders',
      pathPattern: 'members/{memberId}/scrapFolders/{folderId}',
    },
  ],
  requiresTransaction: true,
  notes: ['Use a Firestore transaction to keep denormalized documents consistent.'],
} as const satisfies RhymixMemberQueryDefinition

export type InsertScrapFolderQueryDefinition = typeof insertScrapFolderQuery
