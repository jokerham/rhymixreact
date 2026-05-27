import type { RhymixNotificationQueryDefinition } from './types'

export const deleteNotifyTypeQuery = {
  id: 'deleteNotifyType',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
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

export type DeleteNotifyTypeQueryDefinition = typeof deleteNotifyTypeQuery
