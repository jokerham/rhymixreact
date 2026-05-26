import type { RhymixMemberQueryDefinition } from './types'

export const updateMemberDeviceLastActiveDateQuery = {
  id: 'updateMemberDeviceLastActiveDate',
  rhymixAction: 'update',
  firestoreOperation: 'update',
  sourceTables: ['member_devices'],
  targets: [
    {
      collection: 'members',
      subcollection: 'devices',
      pathPattern: 'members/{memberId}/devices/{deviceId}',
    },
    {
      collection: 'uniqueDeviceTokens',
      pathPattern: 'uniqueDeviceTokens/{tokenHash}',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type UpdateMemberDeviceLastActiveDateQueryDefinition =
  typeof updateMemberDeviceLastActiveDateQuery
