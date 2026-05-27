import type { RhymixNotificationQueryDefinition } from './types'

export const getUserUnsubscribeConfigByTargetSrlQuery = {
  id: 'getUserUnsubscribeConfigByTargetSrl',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['ncenterlite_unsubscribe'],
  targets: [
    {
      collection: 'notificationUnsubscribes',
      pathPattern: 'notificationUnsubscribes/{unsubscribeSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixNotificationQueryDefinition

export type GetUserUnsubscribeConfigByTargetSrlQueryDefinition =
  typeof getUserUnsubscribeConfigByTargetSrlQuery
