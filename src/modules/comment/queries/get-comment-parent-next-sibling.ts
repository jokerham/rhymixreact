import type { RhymixCommentQueryDefinition } from './types'

export const getCommentParentNextSiblingQuery = {
  id: 'getCommentParentNextSibling',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['comments_list'],
  targets: [
    {
      collection: 'commentList',
      pathPattern: 'commentList/{commentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixCommentQueryDefinition

export type GetCommentParentNextSiblingQueryDefinition = typeof getCommentParentNextSiblingQuery
