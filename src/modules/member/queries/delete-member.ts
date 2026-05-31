import type { RhymixMemberQueryDefinition } from './types'

export const deleteMemberQuery = {
  id: 'deleteMember',
  rhymixAction: 'delete',
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
    'Use a Firestore transaction to delete the member and release all uniqueness lookup documents atomically.',
    'Also delete or cascade member-owned subcollections according to the runtime deletion policy.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type DeleteMemberQueryDefinition = typeof deleteMemberQuery
