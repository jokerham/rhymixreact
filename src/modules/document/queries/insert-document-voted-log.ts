import type { RhymixDocumentQueryDefinition } from './types'

export const insertDocumentVotedLogQuery = {
  id: 'insertDocumentVotedLog',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['document_voted_log'],
  targets: [
    {
      collection: 'documentVotedLog',
      pathPattern: 'documentVotedLog/{documentSrl}_{memberSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Create a new voted log entry for a document.'],
} as const satisfies RhymixDocumentQueryDefinition

export type InsertDocumentVotedLogQueryDefinition = typeof insertDocumentVotedLogQuery
