import type { RhymixDocumentQueryDefinition } from './types'

export const getHistoriesQuery = {
  id: 'getHistories',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['document_histories'],
  targets: [
    {
      collection: 'documentHistories',
      pathPattern: 'documentHistories',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Read history entries for a document.'],
} as const satisfies RhymixDocumentQueryDefinition

export type GetHistoriesQueryDefinition = typeof getHistoriesQuery
