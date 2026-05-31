import type { RhymixPollQueryDefinition } from './types'

export const deletePollTitleQuery = {
  id: 'deletePollTitle',
  rhymixModule: 'poll',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['poll_title'],
  targets: [
    {
      collection: 'pollTitles',
      pathPattern: 'pollTitles/{pollSrl}_{pollIndexSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix deletePollTitle.xml in modules/poll.'],
} as const satisfies RhymixPollQueryDefinition

export type DeletePollTitleQueryDefinition = typeof deletePollTitleQuery
