import type { RhymixNotificationQueryDefinition } from './types'

export const updateUserConfigQuery = {
  id: 'updateUserConfig',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'update',
  firestoreOperation: 'update',
  sourceTables: ['ncenterlite_user_set'],
  targets: [
    {
      collection: 'notificationUserSettings',
      pathPattern: 'notificationUserSettings/{memberSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixNotificationQueryDefinition

export type UpdateUserConfigQueryDefinition = typeof updateUserConfigQuery
