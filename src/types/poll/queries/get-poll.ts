import type { RhymixPollQueryDefinition } from './types'

export const getPollQuery = {
  id: 'getPoll',
  rhymixModule: 'poll',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['poll'],
  targets: [
    {
      collection: 'polls',
      pathPattern: 'polls/{pollSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix getPoll.xml in modules/poll.'],
} as const satisfies RhymixPollQueryDefinition

export type GetPollQueryDefinition = typeof getPollQuery
