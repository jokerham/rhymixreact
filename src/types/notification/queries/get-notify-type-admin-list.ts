import type { RhymixNotificationQueryDefinition } from './types'

export const getNotifyTypeAdminListQuery = {
  id: 'getNotifyTypeAdminList',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetNotifyTypeAdminListQueryDefinition = typeof getNotifyTypeAdminListQuery
