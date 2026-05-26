import type { RhymixMemberQueryDefinition } from './types'

export const updateMemberQuery = {
  id: 'updateMember',
  rhymixAction: 'update',
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
    'Use a Firestore transaction to update the member and rotate changed uniqueness lookup documents atomically.',
    'If userId, emailAddress, phoneKey, or nickName changes, delete the old unique lookup document and create the new one in the same transaction.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type UpdateMemberQueryDefinition = typeof updateMemberQuery
