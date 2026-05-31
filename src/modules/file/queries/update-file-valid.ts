import type { RhymixFileQueryDefinition } from './types'

export const updateFileValidQuery = {
  id: 'updateFileValid',
  rhymixAction: 'update',
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
  notes: ['Use a Firestore batch for multi-document file changes.'],
} as const satisfies RhymixFileQueryDefinition

export type UpdateFileValidQueryDefinition = typeof updateFileValidQuery
