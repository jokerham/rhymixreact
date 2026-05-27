import type { RhymixCommentQueryDefinition } from './types'

export const updateCommentListModuleQuery = {
  id: 'updateCommentListModule',
  rhymixAction: 'update',
  firestoreOperation: 'batch',
  sourceTables: ['comments_list'],
  targets: [
    {
      collection: 'commentList',
      pathPattern: 'commentList/{commentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Use a Firestore batch for multi-document comment changes.',
    'Check composite indexes, pagination, aggregate counts, and denormalized ordering fields before runtime implementation.',
  ],
} as const satisfies RhymixCommentQueryDefinition

export type UpdateCommentListModuleQueryDefinition = typeof updateCommentListModuleQuery
