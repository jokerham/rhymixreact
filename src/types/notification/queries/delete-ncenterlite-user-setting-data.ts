import type { RhymixNotificationQueryDefinition } from './types'

export const deleteNcenterliteUserSettingDataQuery = {
  id: 'deleteNcenterliteUserSettingData',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['ncenterlite_user_set'],
  targets: [
    {
      collection: 'notificationUserSettings',
      pathPattern: 'notificationUserSettings/{memberSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixNotificationQueryDefinition

export type DeleteNcenterliteUserSettingDataQueryDefinition =
  typeof deleteNcenterliteUserSettingDataQuery
