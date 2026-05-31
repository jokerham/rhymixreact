import type { RhymixLayoutQueryDefinition } from './types'

export const getLayoutDotListQuery = {
  id: 'getLayoutDotList',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['layouts'],
  targets: [
    {
      collection: 'layouts',
      pathPattern: 'layouts',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'List layouts by siteSrl and layoutType where layout contains a dot.',
    'Firestore does not support SQL LIKE contains queries directly; use a precomputed flag/search field or external search if this filter is required.',
    'Requires ordering by layoutSrl descending.',
  ],
} as const satisfies RhymixLayoutQueryDefinition

export type GetLayoutDotListQueryDefinition = typeof getLayoutDotListQuery
