import type { RhymixMemberQueryDefinition } from './types'

export const getMemberInfoByPhoneNumberQuery = {
  id: 'getMemberInfoByPhoneNumber',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member'],
  targets: [
    {
      collection: 'uniquePhones',
      pathPattern: 'uniquePhones/{phoneKey}',
      purpose: 'unique-lookup',
    },
    {
      collection: 'members',
      pathPattern: 'members/{memberId}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Read uniquePhones/{phoneKey} first, then read members/{memberId}.'],
} as const satisfies RhymixMemberQueryDefinition

export type GetMemberInfoByPhoneNumberQueryDefinition = typeof getMemberInfoByPhoneNumberQuery
