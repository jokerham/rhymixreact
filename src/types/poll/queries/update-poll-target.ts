import type { RhymixPollQueryDefinition } from './types'

export const updatePollTargetQuery = {
  id: 'updatePollTarget',
  rhymixModule: 'poll',
  rhymixAction: 'update',
  firestoreOperation: 'batch',
  sourceTables: ['poll'],
  targets: [
    {
      collection: 'polls',
      pathPattern: 'polls/{pollSrl}',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix updatePollTarget.xml in modules/poll.',
    'This affects multiple matching documents in SQL; use a batched write or chunked migration worker in Firestore.',
  ],
} as const satisfies RhymixPollQueryDefinition

export type UpdatePollTargetQueryDefinition = typeof updatePollTargetQuery
