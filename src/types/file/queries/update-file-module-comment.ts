import type { RhymixFileQueryDefinition } from './types'

export const updateFileModuleCommentQuery = {
  id: 'updateFileModuleComment',
  rhymixAction: 'update',
  firestoreOperation: 'batch',
  sourceTables: ['files', 'comments'],
  targets: [
    {
      collection: 'files',
      pathPattern: 'files/{fileSrl}',
      purpose: 'primary',
    },
    {
      collection: 'comments',
      pathPattern: 'external:comments/{commentSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Rhymix query joins multiple SQL tables; Firestore implementation should use denormalized fields, lookup documents, or multiple reads.',
    'This query references data owned by another module; keep that dependency explicit in runtime implementation.',
    'Use a Firestore batch for multi-document file changes.',
    'Check composite indexes, pagination, aggregate sums/counts, and denormalized target status fields before runtime implementation.',
  ],
} as const satisfies RhymixFileQueryDefinition

export type UpdateFileModuleCommentQueryDefinition = typeof updateFileModuleCommentQuery
