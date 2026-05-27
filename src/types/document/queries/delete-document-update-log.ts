import type { RhymixDocumentQueryDefinition } from './types'

export const deleteDocumentUpdateLogQuery = {
  id: 'deleteDocumentUpdateLog',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
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

export type DeleteDocumentUpdateLogQueryDefinition = typeof deleteDocumentUpdateLogQuery
