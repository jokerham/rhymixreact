import type { RhymixFileQueryDefinition } from './types'

export const getFileListByTargetStatusQuery = {
  id: 'getFileListByTargetStatus',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['files', 'member', 'documents', 'comments'],
  targets: [
    {
      collection: 'files',
      pathPattern: 'files/{fileSrl}',
      purpose: 'primary',
    },
    {
      collection: 'members',
      pathPattern: 'external:members/{memberId}',
      purpose: 'external-reference',
    },
    {
      collection: 'documents',
      pathPattern: 'external:documents/{documentSrl}',
      purpose: 'external-reference',
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
    'Check composite indexes, pagination, aggregate sums/counts, and denormalized target status fields before runtime implementation.',
  ],
} as const satisfies RhymixFileQueryDefinition

export type GetFileListByTargetStatusQueryDefinition = typeof getFileListByTargetStatusQuery
