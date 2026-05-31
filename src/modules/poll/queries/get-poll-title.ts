import type { RhymixPollQueryDefinition } from './types'

export const getPollTitleQuery = {
  id: 'getPollTitle',
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
  notes: ['Mapped from Rhymix getPollTitle.xml in modules/poll.'],
} as const satisfies RhymixPollQueryDefinition

export type GetPollTitleQueryDefinition = typeof getPollTitleQuery
