import type { RhymixMemberQueryDefinition } from './types'

export const getMemberInfoByEmailAddressQuery = {
  id: 'getMemberInfoByEmailAddress',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member'],
  targets: [
    {
      collection: 'uniqueEmails',
      pathPattern: 'uniqueEmails/{normalizedEmail}',
      purpose: 'unique-lookup',
    },
    {
      collection: 'members',
      pathPattern: 'members/{memberId}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Read uniqueEmails/{normalizedEmail} first, then read members/{memberId}.'],
} as const satisfies RhymixMemberQueryDefinition

export type GetMemberInfoByEmailAddressQueryDefinition = typeof getMemberInfoByEmailAddressQuery
