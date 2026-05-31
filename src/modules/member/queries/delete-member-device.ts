import type { RhymixMemberQueryDefinition } from './types'

export const deleteMemberDeviceQuery = {
  id: 'deleteMemberDevice',
  rhymixAction: 'delete',
  firestoreOperation: 'transaction',
  sourceTables: ['member_devices'],
  targets: [
    {
      collection: 'members',
      subcollection: 'devices',
      pathPattern: 'members/{memberId}/devices/{deviceId}',
      purpose: 'primary',
    },
    {
      collection: 'uniqueDeviceTokens',
      pathPattern: 'uniqueDeviceTokens/{tokenHash}',
      purpose: 'unique-lookup',
    },
  ],
  requiresTransaction: true,
  notes: [
    'Use a Firestore transaction to delete the device and release uniqueDeviceTokens/{tokenHash}.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type DeleteMemberDeviceQueryDefinition = typeof deleteMemberDeviceQuery
