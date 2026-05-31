import type { RhymixCommentQueryDefinition } from './types'

export const getCommentsByDocumentSrlsQuery = {
  id: 'getCommentsByDocumentSrls',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['comments'],
  targets: [
    {
      collection: 'comments',
      pathPattern: 'comments/{commentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixCommentQueryDefinition

export type GetCommentsByDocumentSrlsQueryDefinition = typeof getCommentsByDocumentSrlsQuery
