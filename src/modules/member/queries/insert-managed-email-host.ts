import type { RhymixMemberQueryDefinition } from './types'

export const insertManagedEmailHostQuery = {
  id: 'insertManagedEmailHost',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertManagedEmailHostQueryDefinition = typeof insertManagedEmailHostQuery
