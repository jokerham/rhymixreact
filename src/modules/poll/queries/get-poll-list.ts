import type { RhymixPollQueryDefinition } from './types'

export const getPollListQuery = {
  id: 'getPollList',
  rhymixModule: 'poll',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['poll_title'],
  targets: [
    {
      collection: 'pollTitles',
      pathPattern: 'pollTitles/{pollSrl}_{pollIndexSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix getPollList.xml in modules/poll.'],
} as const satisfies RhymixPollQueryDefinition

export type GetPollListQueryDefinition = typeof getPollListQuery
