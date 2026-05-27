import type { RhymixFileQueryDefinition } from './types'

export const updateFileQuery = {
  id: 'updateFile',
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
  notes: [],
} as const satisfies RhymixFileQueryDefinition

export type UpdateFileQueryDefinition = typeof updateFileQuery
