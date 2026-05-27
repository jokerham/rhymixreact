import type { RhymixPollQueryDefinition } from './types'

export const insertPollTitleQuery = {
  id: 'insertPollTitle',
  rhymixModule: 'poll',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['poll_title'],
  targets: [
    {
      collection: 'pollTitles',
      pathPattern: 'pollTitles/{pollSrl}_{pollIndexSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix insertPollTitle.xml in modules/poll.'],
} as const satisfies RhymixPollQueryDefinition

export type InsertPollTitleQueryDefinition = typeof insertPollTitleQuery
