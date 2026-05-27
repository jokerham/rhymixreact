import type { RhymixNotificationQueryDefinition } from './types'

export const insertNotifyTypeQuery = {
  id: 'insertNotifyType',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['ncenterlite_notify_type'],
  targets: [
    {
      collection: 'notificationTypes',
      pathPattern: 'notificationTypes/{notifyTypeSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixNotificationQueryDefinition

export type InsertNotifyTypeQueryDefinition = typeof insertNotifyTypeQuery
