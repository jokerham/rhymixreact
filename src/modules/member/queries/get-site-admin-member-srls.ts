import type { RhymixMemberQueryDefinition } from './types'

export const getSiteAdminMemberSrlsQuery = {
  id: 'getSiteAdminMemberSrls',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['site_admin'],
  targets: [
    {
      collection: 'unmapped:site_admin',
      pathPattern: 'unmapped:site_admin',
    },
  ],
  requiresTransaction: false,
  notes: ['Review target mapping before implementing this query.'],
} as const satisfies RhymixMemberQueryDefinition

export type GetSiteAdminMemberSrlsQueryDefinition = typeof getSiteAdminMemberSrlsQuery
