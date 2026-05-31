import type { RhymixPollQueryDefinition } from './types'

export const insertPollLogQuery = {
  id: 'insertPollLog',
  rhymixModule: 'poll',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['poll_log'],
  targets: [
    {
      collection: 'pollLogs',
      pathPattern: 'pollLogs/{pollSrl}_{memberSrl}_{ipaddress}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix insertPollLog.xml in modules/poll.'],
} as const satisfies RhymixPollQueryDefinition

export type InsertPollLogQueryDefinition = typeof insertPollLogQuery
