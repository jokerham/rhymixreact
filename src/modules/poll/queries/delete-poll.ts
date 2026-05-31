import type { RhymixPollQueryDefinition } from './types'

export const deletePollQuery = {
  id: 'deletePoll',
  rhymixModule: 'poll',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['poll'],
  targets: [
    {
      collection: 'polls',
      pathPattern: 'polls/{pollSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix deletePoll.xml in modules/poll.'],
} as const satisfies RhymixPollQueryDefinition

export type DeletePollQueryDefinition = typeof deletePollQuery
