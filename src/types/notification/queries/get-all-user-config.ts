import type { RhymixNotificationQueryDefinition } from './types'

export const getAllUserConfigQuery = {
  id: 'getAllUserConfig',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetAllUserConfigQueryDefinition = typeof getAllUserConfigQuery
