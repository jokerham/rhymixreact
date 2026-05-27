import type { RhymixFileQueryDefinition } from './types'

export const updateFileNameQuery = {
  id: 'updateFileName',
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

export type UpdateFileNameQueryDefinition = typeof updateFileNameQuery
