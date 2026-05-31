import type { RhymixPollQueryDefinition } from './types'

export const updatePollItemsQuery = {
  id: 'updatePollItems',
  rhymixModule: 'poll',
  rhymixAction: 'update',
  firestoreOperation: 'batch',
  sourceTables: ['poll_item'],
  targets: [
    {
      collection: 'pollItems',
      pathPattern: 'pollItems/{pollItemSrl}',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix updatePollItems.xml in modules/poll.',
    'This affects multiple matching documents in SQL; use a batched write or chunked migration worker in Firestore.',
  ],
} as const satisfies RhymixPollQueryDefinition

export type UpdatePollItemsQueryDefinition = typeof updatePollItemsQuery
