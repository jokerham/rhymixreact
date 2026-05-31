import type { RhymixMemberQueryDefinition } from './types'

export const updateMemberEmailAddressQuery = {
  id: 'updateMemberEmailAddress',
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
      collection: 'uniqueEmails',
      pathPattern: 'uniqueEmails/{normalizedEmail}',
      purpose: 'unique-lookup',
    },
  ],
  requiresTransaction: true,
  notes: [
    'Use a Firestore transaction to update members/{memberId} and rotate uniqueEmails lookup documents atomically.',
    'Reject the update if the new uniqueEmails/{normalizedEmail} document already belongs to another member.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type UpdateMemberEmailAddressQueryDefinition = typeof updateMemberEmailAddressQuery
