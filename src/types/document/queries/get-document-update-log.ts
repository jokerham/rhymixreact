import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentUpdateLogQuery = {
  id: 'getDocumentUpdateLog',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetDocumentUpdateLogQueryDefinition = typeof getDocumentUpdateLogQuery
