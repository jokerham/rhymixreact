import type { RhymixMemberQueryDefinition } from './types'

export const deleteManagedEmailHostQuery = {
  id: 'deleteManagedEmailHost',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['member_managed_email_hosts'],
  targets: [
    {
      collection: 'managedEmailHosts',
      pathPattern: 'managedEmailHosts/{emailHost}',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type DeleteManagedEmailHostQueryDefinition = typeof deleteManagedEmailHostQuery
