import type { RhymixCommentQueryDefinition } from './types'

export const deleteModuleCommentsQuery = {
  id: 'deleteModuleComments',
  rhymixAction: 'delete',
  firestoreOperation: 'batch',
  sourceTables: ['comments'],
  targets: [
    {
      collection: 'comments',
      pathPattern: 'comments/{commentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Use a Firestore batch for multi-document comment changes.',
    'Check composite indexes, pagination, aggregate counts, and denormalized ordering fields before runtime implementation.',
  ],
} as const satisfies RhymixCommentQueryDefinition

export type DeleteModuleCommentsQueryDefinition = typeof deleteModuleCommentsQuery
