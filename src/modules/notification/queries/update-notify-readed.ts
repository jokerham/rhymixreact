import type { RhymixNotificationQueryDefinition } from './types'

export const updateNotifyReadedQuery = {
  id: 'updateNotifyReaded',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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
  requiresTransaction: false,
  notes: [
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixNotificationQueryDefinition

export type UpdateNotifyReadedQueryDefinition = typeof updateNotifyReadedQuery
