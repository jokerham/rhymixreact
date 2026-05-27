import type { RhymixPollQueryDefinition } from './types'

export const updatePollTitleTargetQuery = {
  id: 'updatePollTitleTarget',
  rhymixModule: 'poll',
  rhymixAction: 'update',
  firestoreOperation: 'batch',
  sourceTables: ['poll_title'],
  targets: [
    {
      collection: 'pollTitles',
      pathPattern: 'pollTitles/{pollSrl}_{pollIndexSrl}',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix updatePollTitleTarget.xml in modules/poll.',
    'This affects multiple matching documents in SQL; use a batched write or chunked migration worker in Firestore.',
  ],
} as const satisfies RhymixPollQueryDefinition

export type UpdatePollTitleTargetQueryDefinition = typeof updatePollTitleTargetQuery
