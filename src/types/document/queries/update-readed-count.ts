import type { RhymixDocumentQueryDefinition } from './types'

export const updateReadedCountQuery = {
  id: 'updateReadedCount',
  rhymixAction: 'update',
  firestoreOperation: 'update',
  sourceTables: ['documents'],
  targets: [
    {
      collection: 'documents',
      pathPattern: 'documents/{documentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Increment or update the readed count for a document.'],
} as const satisfies RhymixDocumentQueryDefinition

export type UpdateReadedCountQueryDefinition = typeof updateReadedCountQuery
