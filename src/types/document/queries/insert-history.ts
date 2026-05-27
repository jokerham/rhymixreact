import type { RhymixDocumentQueryDefinition } from './types'

export const insertHistoryQuery = {
  id: 'insertHistory',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['document_histories'],
  targets: [
    {
      collection: 'documentHistories',
      pathPattern: 'documentHistories/{historySrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Insert a new document history entry.'],
} as const satisfies RhymixDocumentQueryDefinition

export type InsertHistoryQueryDefinition = typeof insertHistoryQuery
