import type { RhymixPollQueryDefinition } from './types'

export const updatePollQuery = {
  id: 'updatePoll',
  rhymixModule: 'poll',
  rhymixAction: 'update',
  firestoreOperation: 'update',
  sourceTables: ['poll'],
  targets: [
    {
      collection: 'polls',
      pathPattern: 'polls/{pollSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix updatePoll.xml in modules/poll.'],
} as const satisfies RhymixPollQueryDefinition

export type UpdatePollQueryDefinition = typeof updatePollQuery
