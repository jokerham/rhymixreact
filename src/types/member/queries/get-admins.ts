import type { RhymixMemberQueryDefinition } from './types'

export const getAdminsQuery = {
  id: 'getAdmins',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['member'],
  targets: [
    {
      collection: 'members',
      pathPattern: 'members/{memberId}',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixMemberQueryDefinition

export type GetAdminsQueryDefinition = typeof getAdminsQuery
