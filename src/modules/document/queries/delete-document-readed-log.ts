import type { RhymixDocumentQueryDefinition } from './types'

export const deleteDocumentReadedLogQuery = {
  id: 'deleteDocumentReadedLog',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['document_readed_log'],
  targets: [
    {
      collection: 'documentReadedLog',
      pathPattern: 'documentReadedLog/{documentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Delete readed log entries for a document by documentSrl.'],
} as const satisfies RhymixDocumentQueryDefinition

export type DeleteDocumentReadedLogQueryDefinition = typeof deleteDocumentReadedLogQuery
