import type { RhymixMemberQueryDefinition } from './types'

export const insertMemberQuery = {
  id: 'insertMember',
  rhymixAction: 'insert',
  firestoreOperation: 'transaction',
  sourceTables: ['member'],
  targets: [
    {
      collection: 'members',
      pathPattern: 'members/{memberId}',
      purpose: 'primary',
    },
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
  ],
  requiresTransaction: true,
  notes: [
    'Use a Firestore transaction to create the member and all uniqueness lookup documents atomically.',
    'Check uniqueUserIds, uniqueEmails, uniquePhones, and uniqueNicknames before creating members/{memberId}.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type InsertMemberQueryDefinition = typeof insertMemberQuery
