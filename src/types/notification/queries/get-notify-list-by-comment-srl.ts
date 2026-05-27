import type { RhymixNotificationQueryDefinition } from './types'

export const getNotifyListByCommentSrlQuery = {
  id: 'getNotifyListByCommentSrl',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['ncenterlite_notify'],
  targets: [
    {
      collection: 'notifications',
      pathPattern: 'notifications/{notificationId}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixNotificationQueryDefinition

export type GetNotifyListByCommentSrlQueryDefinition = typeof getNotifyListByCommentSrlQuery
