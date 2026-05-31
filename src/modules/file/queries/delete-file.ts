import type { RhymixFileQueryDefinition } from './types'

export const deleteFileQuery = {
  id: 'deleteFile',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['files'],
  targets: [
    {
      collection: 'files',
      pathPattern: 'files/{fileSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixFileQueryDefinition

export type DeleteFileQueryDefinition = typeof deleteFileQuery
