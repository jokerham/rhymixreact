import type { RhymixMemberQueryDefinition } from './types'

export const getScrapDocumentListQuery = {
  id: 'getScrapDocumentList',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member_scrap', 'documents'],
  targets: [
    {
      collection: 'members',
      subcollection: 'scraps',
      pathPattern: 'members/{memberId}/scraps/{documentId}',
    },
    {
      collection: 'documents',
      pathPattern: 'external:documents/{documentId}',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Rhymix query joins multiple SQL tables; Firestore implementation should use denormalized fields, lookup documents, or multiple reads.',
    'Check composite indexes and pagination requirements before runtime implementation.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type GetScrapDocumentListQueryDefinition = typeof getScrapDocumentListQuery
