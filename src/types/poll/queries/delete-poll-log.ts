import type { RhymixPollQueryDefinition } from './types'

export const deletePollLogQuery = {
  id: 'deletePollLog',
  rhymixModule: 'poll',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['poll_log'],
  targets: [
    {
      collection: 'pollLogs',
      pathPattern: 'pollLogs/{pollSrl}_{memberSrl}_{ipaddress}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix deletePollLog.xml in modules/poll.'],
} as const satisfies RhymixPollQueryDefinition

export type DeletePollLogQueryDefinition = typeof deletePollLogQuery
