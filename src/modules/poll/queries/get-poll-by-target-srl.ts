import type { RhymixPollQueryDefinition } from './types'

export const getPollByTargetSrlQuery = {
  id: 'getPollByTargetSrl',
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
  notes: ['Mapped from Rhymix getPollByTargetSrl.xml in modules/poll.'],
} as const satisfies RhymixPollQueryDefinition

export type GetPollByTargetSrlQueryDefinition = typeof getPollByTargetSrlQuery
