import type { RhymixFileQueryDefinition } from './types'

export const updateFileTargetTypeQuery = {
  id: 'updateFileTargetType',
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

export type UpdateFileTargetTypeQueryDefinition = typeof updateFileTargetTypeQuery
