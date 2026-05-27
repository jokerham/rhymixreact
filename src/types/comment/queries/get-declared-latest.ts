import type { RhymixCommentQueryDefinition } from './types'

export const getDeclaredLatestQuery = {
  id: 'getDeclaredLatest',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['comments', 'comment_declared', 'comment_declared_log'],
  targets: [
    {
      collection: 'comments',
      pathPattern: 'comments/{commentSrl}',
      purpose: 'primary',
    },
    {
      collection: 'commentDeclared',
      pathPattern: 'commentDeclared/{commentSrl}',
      purpose: 'primary',
    },
    {
      collection: 'commentDeclaredLog',
      pathPattern: 'commentDeclaredLog/{commentSrl}_{memberSrl}_{ipaddress}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Rhymix query joins multiple SQL tables; Firestore implementation should use denormalized fields, lookup documents, or multiple reads.',
    'Check composite indexes, pagination, aggregate counts, and denormalized ordering fields before runtime implementation.',
  ],
} as const satisfies RhymixCommentQueryDefinition

export type GetDeclaredLatestQueryDefinition = typeof getDeclaredLatestQuery
