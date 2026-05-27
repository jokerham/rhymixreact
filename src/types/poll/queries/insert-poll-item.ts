import type { RhymixPollQueryDefinition } from './types'

export const insertPollItemQuery = {
  id: 'insertPollItem',
  rhymixModule: 'poll',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['poll_item'],
  targets: [
    {
      collection: 'pollItems',
      pathPattern: 'pollItems/{pollItemSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix insertPollItem.xml in modules/poll.'],
} as const satisfies RhymixPollQueryDefinition

export type InsertPollItemQueryDefinition = typeof insertPollItemQuery
