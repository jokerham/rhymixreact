import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentListWithinCommentQuery = {
  id: 'getDocumentListWithinComment',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['documents', 'comments'],
  targets: [
    {
      collection: 'documents',
      pathPattern: 'documents/{documentSrl}',
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
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDocumentListWithinCommentQueryDefinition = typeof getDocumentListWithinCommentQuery
