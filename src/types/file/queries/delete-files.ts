import type { RhymixFileQueryDefinition } from './types'

export const deleteFilesQuery = {
  id: 'deleteFiles',
  rhymixAction: 'delete',
  firestoreOperation: 'batch',
  sourceTables: ['files'],
  targets: [
    {
      collection: 'files',
      pathPattern: 'files/{fileSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Use a Firestore batch for multi-document file changes.',
    'Check composite indexes, pagination, aggregate sums/counts, and denormalized target status fields before runtime implementation.',
  ],
} as const satisfies RhymixFileQueryDefinition

export type DeleteFilesQueryDefinition = typeof deleteFilesQuery
