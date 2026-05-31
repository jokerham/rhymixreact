import type { RhymixNotificationQueryDefinition } from './types'

export const getMemberAdminsQuery = {
  id: 'getMemberAdmins',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member'],
  targets: [
    {
      collection: 'members',
      pathPattern: 'external:members/{memberId}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'This query references data owned by another module; keep that dependency explicit in runtime implementation.',
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixNotificationQueryDefinition

export type GetMemberAdminsQueryDefinition = typeof getMemberAdminsQuery
