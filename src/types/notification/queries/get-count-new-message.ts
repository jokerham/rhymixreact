import type { RhymixNotificationQueryDefinition } from './types'

export const getCountNewMessageQuery = {
  id: 'getCountNewMessage',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member_message'],
  targets: [
    {
      collection: 'memberMessages',
      pathPattern: 'external:memberMessages/{messageSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'This query references data owned by another module; keep that dependency explicit in runtime implementation.',
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixNotificationQueryDefinition

export type GetCountNewMessageQueryDefinition = typeof getCountNewMessageQuery
