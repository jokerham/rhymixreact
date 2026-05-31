import type { RhymixNotificationQueryDefinition } from './types'

export const deleteUnsubscribeQuery = {
  id: 'deleteUnsubscribe',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
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

export type DeleteUnsubscribeQueryDefinition = typeof deleteUnsubscribeQuery
