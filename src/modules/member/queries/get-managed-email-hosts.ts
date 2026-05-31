import type { RhymixMemberQueryDefinition } from './types'

export const getManagedEmailHostsQuery = {
  id: 'getManagedEmailHosts',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetManagedEmailHostsQueryDefinition = typeof getManagedEmailHostsQuery
