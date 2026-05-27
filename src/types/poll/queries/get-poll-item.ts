import type { RhymixPollQueryDefinition } from './types'

export const getPollItemQuery = {
  id: 'getPollItem',
  rhymixModule: 'poll',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['poll_item'],
  targets: [
    {
      collection: 'pollItems',
      pathPattern: 'pollItems/{pollItemSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix getPollItem.xml in modules/poll.'],
} as const satisfies RhymixPollQueryDefinition

export type GetPollItemQueryDefinition = typeof getPollItemQuery
