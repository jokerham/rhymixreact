import type { RhymixFileQueryDefinition } from './types'

export const getFilesCountQuery = {
  id: 'getFilesCount',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetFilesCountQueryDefinition = typeof getFilesCountQuery
