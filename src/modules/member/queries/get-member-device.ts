import type { RhymixMemberQueryDefinition } from './types'

export const getMemberDeviceQuery = {
  id: 'getMemberDevice',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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
  requiresTransaction: false,
  notes: [
    'When looking up by deviceToken, read uniqueDeviceTokens/{tokenHash} first, then read members/{memberId}/devices/{deviceId}.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type GetMemberDeviceQueryDefinition = typeof getMemberDeviceQuery
