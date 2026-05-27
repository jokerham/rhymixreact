import type { RhymixNotificationQueryDefinition } from './types'

export const insertNotifyQuery = {
  id: 'insertNotify',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'insert',
  firestoreOperation: 'transaction',
  sourceTables: ['ncenterlite_notify'],
  targets: [
    {
      collection: 'notifications',
      pathPattern: 'notifications/{notificationId}',
      purpose: 'primary',
    },
    {
      collection: 'uniqueNotifications',
      pathPattern: 'uniqueNotifications/{notify}',
      purpose: 'unique-lookup',
    },
  ],
  requiresTransaction: true,
  notes: [
    'Use a Firestore transaction for multi-document notification changes.',
    'Create uniqueNotifications/{notify} with notifications/{notificationId} in the same transaction.',
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixNotificationQueryDefinition

export type InsertNotifyQueryDefinition = typeof insertNotifyQuery
