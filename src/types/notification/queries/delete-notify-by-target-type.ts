import type { RhymixNotificationQueryDefinition } from './types'

export const deleteNotifyByTargetTypeQuery = {
  id: 'deleteNotifyByTargetType',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'delete',
  firestoreOperation: 'batch',
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
    'Use a Firestore batch for multi-document notification changes.',
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixNotificationQueryDefinition

export type DeleteNotifyByTargetTypeQueryDefinition = typeof deleteNotifyByTargetTypeQuery
