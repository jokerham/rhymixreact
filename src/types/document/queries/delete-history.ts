import type { RhymixDocumentQueryDefinition } from './types'

export const deleteHistoryQuery = {
  id: 'deleteHistory',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['document_histories'],
  targets: [
    {
      collection: 'documentHistories',
      pathPattern: 'documentHistories/{historySrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Delete a history entry by historySrl.'],
} as const satisfies RhymixDocumentQueryDefinition

export type DeleteHistoryQueryDefinition = typeof deleteHistoryQuery
