import type { RhymixPollQueryDefinition } from './types'

export const updatePollTitleQuery = {
  id: 'updatePollTitle',
  rhymixModule: 'poll',
  rhymixAction: 'update',
  firestoreOperation: 'update',
  sourceTables: ['poll_title'],
  targets: [
    {
      collection: 'pollTitles',
      pathPattern: 'pollTitles/{pollSrl}_{pollIndexSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix updatePollTitle.xml in modules/poll.'],
} as const satisfies RhymixPollQueryDefinition

export type UpdatePollTitleQueryDefinition = typeof updatePollTitleQuery
