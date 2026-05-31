import type { RhymixDocumentQueryDefinition } from './types'

export const getUpdateLogQuery = {
  id: 'getUpdateLog',
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

export type GetUpdateLogQueryDefinition = typeof getUpdateLogQuery
