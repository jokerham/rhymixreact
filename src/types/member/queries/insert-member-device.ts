import type { RhymixMemberQueryDefinition } from './types'

export const insertMemberDeviceQuery = {
  id: 'insertMemberDevice',
  rhymixAction: 'insert',
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
    'Use a Firestore transaction to create the device and uniqueDeviceTokens lookup document atomically.',
    'Reject the insert if uniqueDeviceTokens/{tokenHash} already belongs to another device or member.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type InsertMemberDeviceQueryDefinition = typeof insertMemberDeviceQuery
