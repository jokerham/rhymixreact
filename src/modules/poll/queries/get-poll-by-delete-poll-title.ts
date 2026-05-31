import type { RhymixPollQueryDefinition } from './types'

export const getPollByDeletePollTitleQuery = {
  id: 'getPollByDeletePollTitle',
  rhymixModule: 'poll',
  rhymixAction: 'select',
  firestoreOperation: 'aggregate',
  sourceTables: ['poll_title'],
  targets: [
    {
      collection: 'pollTitles',
      pathPattern: 'pollTitles/{pollSrl}_{pollIndexSrl}',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix getPollByDeletePollTitle.xml in modules/poll.',
    'Rhymix uses SQL aggregation; Firestore may need count aggregation queries or denormalized counters.',
  ],
} as const satisfies RhymixPollQueryDefinition

export type GetPollByDeletePollTitleQueryDefinition = typeof getPollByDeletePollTitleQuery
