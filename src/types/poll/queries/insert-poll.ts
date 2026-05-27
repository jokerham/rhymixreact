import type { RhymixPollQueryDefinition } from './types'

export const insertPollQuery = {
  id: 'insertPoll',
  rhymixModule: 'poll',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['poll'],
  targets: [
    {
      collection: 'polls',
      pathPattern: 'polls/{pollSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix insertPoll.xml in modules/poll.'],
} as const satisfies RhymixPollQueryDefinition

export type InsertPollQueryDefinition = typeof insertPollQuery
