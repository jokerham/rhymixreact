import type { RhymixDocumentQueryDefinition } from './types'

export const getHistoryQuery = {
  id: 'getHistory',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['document_histories'],
  targets: [
    {
      collection: 'documentHistories',
      pathPattern: 'documentHistories/{historySrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Read a single document history entry by historySrl.'],
} as const satisfies RhymixDocumentQueryDefinition

export type GetHistoryQueryDefinition = typeof getHistoryQuery
