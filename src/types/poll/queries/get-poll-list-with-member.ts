import type { RhymixPollQueryDefinition } from './types'

export const getPollListWithMemberQuery = {
  id: 'getPollListWithMember',
  rhymixModule: 'poll',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['poll_title', 'poll', 'member'],
  targets: [
    {
      collection: 'pollTitles',
      pathPattern: 'pollTitles/{pollSrl}_{pollIndexSrl}',
    },
    {
      collection: 'polls',
      pathPattern: 'polls/{pollSrl}',
    },
    {
      collection: 'members',
      pathPattern: 'external:members/{memberSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix getPollListWithMember.xml in modules/poll.',
    'Includes external Rhymix table references; keep those documents in sync through their owning module.',
  ],
} as const satisfies RhymixPollQueryDefinition

export type GetPollListWithMemberQueryDefinition = typeof getPollListWithMemberQuery
