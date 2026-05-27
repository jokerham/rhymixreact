import type { RhymixNotificationQueryDefinition } from './types'

export const insertUserConfigQuery = {
  id: 'insertUserConfig',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertUserConfigQueryDefinition = typeof insertUserConfigQuery
