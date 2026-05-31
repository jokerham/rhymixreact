import type { RhymixFileQueryDefinition } from './types'

export const getFileQuery = {
  id: 'getFile',
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
  notes: [],
} as const satisfies RhymixFileQueryDefinition

export type GetFileQueryDefinition = typeof getFileQuery
