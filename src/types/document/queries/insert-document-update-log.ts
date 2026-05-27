import type { RhymixDocumentQueryDefinition } from './types'

export const insertDocumentUpdateLogQuery = {
  id: 'insertDocumentUpdateLog',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['document_update_log'],
  targets: [
    {
      collection: 'documentUpdateLog',
      pathPattern: 'documentUpdateLog/{updateId}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixDocumentQueryDefinition

export type InsertDocumentUpdateLogQueryDefinition = typeof insertDocumentUpdateLogQuery
