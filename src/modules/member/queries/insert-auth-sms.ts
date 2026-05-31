import type { RhymixMemberQueryDefinition } from './types'

export const insertAuthSmsQuery = {
  id: 'insertAuthSms',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['member_auth_sms'],
  targets: [
    {
      collection: 'authSmsCodes',
      pathPattern: 'authSmsCodes/{smsCodeId}',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type InsertAuthSmsQueryDefinition = typeof insertAuthSmsQuery
