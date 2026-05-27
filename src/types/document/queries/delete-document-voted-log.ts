import type { RhymixDocumentQueryDefinition } from './types'

export const deleteDocumentVotedLogQuery = {
  id: 'deleteDocumentVotedLog',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['document_voted_log'],
  targets: [
    {
      collection: 'documentVotedLog',
      pathPattern: 'documentVotedLog/{documentSrl}_{memberSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Delete a voted log entry by documentSrl and memberSrl.'],
} as const satisfies RhymixDocumentQueryDefinition

export type DeleteDocumentVotedLogQueryDefinition = typeof deleteDocumentVotedLogQuery
