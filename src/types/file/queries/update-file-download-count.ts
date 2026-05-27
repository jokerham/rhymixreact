import type { RhymixFileQueryDefinition } from './types'

export const updateFileDownloadCountQuery = {
  id: 'updateFileDownloadCount',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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
    'Check composite indexes, pagination, aggregate sums/counts, and denormalized target status fields before runtime implementation.',
  ],
} as const satisfies RhymixFileQueryDefinition

export type UpdateFileDownloadCountQueryDefinition = typeof updateFileDownloadCountQuery
