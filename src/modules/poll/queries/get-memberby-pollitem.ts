import type { RhymixPollQueryDefinition } from './types'

export const getMemberbyPollitemQuery = {
  id: 'getMemberbyPollitem',
  rhymixModule: 'poll',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['poll_log'],
  targets: [
    {
      collection: 'pollLogs',
      pathPattern: 'pollLogs/{pollSrl}_{memberSrl}_{ipaddress}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix getMemberbyPollitem.xml in modules/poll.'],
} as const satisfies RhymixPollQueryDefinition

export type GetMemberbyPollitemQueryDefinition = typeof getMemberbyPollitemQuery
