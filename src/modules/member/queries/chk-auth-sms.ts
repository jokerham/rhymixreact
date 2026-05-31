import type { RhymixMemberQueryDefinition } from './types'

export const chkAuthSmsQuery = {
  id: 'chkAuthSms',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type ChkAuthSmsQueryDefinition = typeof chkAuthSmsQuery
