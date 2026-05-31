import type { RhymixMemberQueryDefinition } from './types'

export const updateMemberPhoneCountryQuery = {
  id: 'updateMemberPhoneCountry',
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
      collection: 'uniquePhones',
      pathPattern: 'uniquePhones/{phoneKey}',
      purpose: 'unique-lookup',
    },
  ],
  requiresTransaction: true,
  notes: [
    'Use a Firestore transaction to update members/{memberId} and rotate uniquePhones lookup documents atomically.',
    'phoneKey should be derived from phoneCountry and phoneNumber.',
  ],
} as const satisfies RhymixMemberQueryDefinition

export type UpdateMemberPhoneCountryQueryDefinition = typeof updateMemberPhoneCountryQuery
