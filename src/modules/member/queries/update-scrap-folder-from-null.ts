import type { RhymixMemberQueryDefinition } from './types'

export const updateScrapFolderFromNullQuery = {
  id: 'updateScrapFolderFromNull',
  rhymixAction: 'update',
  firestoreOperation: 'batch',
  sourceTables: ['member_scrap'],
  targets: [
    {
      collection: 'members',
      subcollection: 'scraps',
      pathPattern: 'members/{memberId}/scraps/{documentId}',
    },
  ],
  requiresTransaction: false,
  notes: ['Use a Firestore batch to keep denormalized documents consistent.'],
} as const satisfies RhymixMemberQueryDefinition

export type UpdateScrapFolderFromNullQueryDefinition = typeof updateScrapFolderFromNullQuery
