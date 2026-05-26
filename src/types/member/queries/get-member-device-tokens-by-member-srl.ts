import type { RhymixMemberQueryDefinition } from './types'

export const getMemberDeviceTokensByMemberSrlQuery = {
  id: 'getMemberDeviceTokensByMemberSrl',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetMemberDeviceTokensByMemberSrlQueryDefinition =
  typeof getMemberDeviceTokensByMemberSrlQuery
