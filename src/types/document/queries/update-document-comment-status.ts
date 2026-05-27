import type { RhymixDocumentQueryDefinition } from './types'

export const updateDocumentCommentStatusQuery = {
  id: 'updateDocumentCommentStatus',
  rhymixAction: 'update',
  firestoreOperation: 'update',
  sourceTables: ['documents'],
  targets: [
    {
      collection: 'documents',
      pathPattern: 'documents/{documentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixDocumentQueryDefinition

export type UpdateDocumentCommentStatusQueryDefinition = typeof updateDocumentCommentStatusQuery
