import type { RhymixPollQueryDefinition } from './types'

export const getPollLogQuery = {
  id: 'getPollLog',
  rhymixModule: 'poll',
  rhymixAction: 'select',
  firestoreOperation: 'aggregate',
  sourceTables: ['poll_log'],
  targets: [
    {
      collection: 'pollLogs',
      pathPattern: 'pollLogs/{pollSrl}_{memberSrl}_{ipaddress}',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix getPollLog.xml in modules/poll.',
    'Rhymix uses SQL aggregation; Firestore may need count aggregation queries or denormalized counters.',
  ],
} as const satisfies RhymixPollQueryDefinition

export type GetPollLogQueryDefinition = typeof getPollLogQuery
