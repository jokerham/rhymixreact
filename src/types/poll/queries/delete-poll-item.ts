import type { RhymixPollQueryDefinition } from './types'

export const deletePollItemQuery = {
  id: 'deletePollItem',
  rhymixModule: 'poll',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['poll_item'],
  targets: [
    {
      collection: 'pollItems',
      pathPattern: 'pollItems/{pollItemSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix deletePollItem.xml in modules/poll.'],
} as const satisfies RhymixPollQueryDefinition

export type DeletePollItemQueryDefinition = typeof deletePollItemQuery
