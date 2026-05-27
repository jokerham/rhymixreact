import type { RhymixPollQueryDefinition } from './types'

export const updatePollItemTargetQuery = {
  id: 'updatePollItemTarget',
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
    'Mapped from Rhymix updatePollItemTarget.xml in modules/poll.',
    'This affects multiple matching documents in SQL; use a batched write or chunked migration worker in Firestore.',
  ],
} as const satisfies RhymixPollQueryDefinition

export type UpdatePollItemTargetQueryDefinition = typeof updatePollItemTargetQuery
