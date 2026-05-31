import type { RhymixFileQueryDefinition } from './types'

export const insertFileQuery = {
  id: 'insertFile',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertFileQueryDefinition = typeof insertFileQuery
