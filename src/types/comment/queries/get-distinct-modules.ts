import type { RhymixCommentQueryDefinition } from './types'

export const getDistinctModulesQuery = {
  id: 'getDistinctModules',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['comments'],
  targets: [
    {
      collection: 'comments',
      pathPattern: 'comments/{commentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Check composite indexes, pagination, aggregate counts, and denormalized ordering fields before runtime implementation.',
  ],
} as const satisfies RhymixCommentQueryDefinition

export type GetDistinctModulesQueryDefinition = typeof getDistinctModulesQuery
