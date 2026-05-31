import type { RhymixMemberQueryDefinition } from './types'

export const getMemberSrlQuery = {
  id: 'getMemberSrl',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member'],
  targets: [
    {
      collection: 'uniqueUserIds',
      pathPattern: 'uniqueUserIds/{normalizedUserId}',
      purpose: 'unique-lookup',
    },
    {
      collection: 'uniqueEmails',
      pathPattern: 'uniqueEmails/{normalizedEmail}',
      purpose: 'unique-lookup',
    },
    {
      collection: 'uniquePhones',
      pathPattern: 'uniquePhones/{phoneKey}',
      purpose: 'unique-lookup',
    },
    {
      collection: 'uniqueNicknames',
      pathPattern: 'uniqueNicknames/{normalizedNickname}',
      purpose: 'unique-lookup',
    },
    {
      collection: 'members',
      pathPattern: 'members/{memberId}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Use the lookup collection matching the provided identity field, then read members/{memberId} if full member data is needed.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type GetMemberSrlQueryDefinition = typeof getMemberSrlQuery
