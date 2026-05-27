import type { RhymixNotificationQueryDefinition } from './types'

export const insertUnsubscribeQuery = {
  id: 'insertUnsubscribe',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertUnsubscribeQueryDefinition = typeof insertUnsubscribeQuery
