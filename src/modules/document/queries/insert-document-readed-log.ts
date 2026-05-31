import type { RhymixDocumentQueryDefinition } from './types'

export const insertDocumentReadedLogQuery = {
  id: 'insertDocumentReadedLog',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['document_readed_log'],
  targets: [
    {
      collection: 'documentReadedLog',
      pathPattern: 'documentReadedLog/{documentSrl}_{memberSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Insert a readed log entry for a document.'],
} as const satisfies RhymixDocumentQueryDefinition

export type InsertDocumentReadedLogQueryDefinition = typeof insertDocumentReadedLogQuery
