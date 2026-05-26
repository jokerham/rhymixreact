import type { RhymixMemberQueryDefinition } from './types'

export const updateMemberDeviceQuery = {
  id: 'updateMemberDevice',
  rhymixAction: 'update',
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
    'Use a Firestore transaction to update the device and rotate uniqueDeviceTokens lookup documents if the token changes.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type UpdateMemberDeviceQueryDefinition = typeof updateMemberDeviceQuery
