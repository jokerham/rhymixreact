import type { RhymixLayoutQueryDefinition } from './types'

export const getLayoutListQuery = {
  id: 'getLayoutList',
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
    'List layouts by siteSrl, layoutType, and optional layout name.',
    'Requires ordering by layoutSrl descending.',
  ],
} as const satisfies RhymixLayoutQueryDefinition

export type GetLayoutListQueryDefinition = typeof getLayoutListQuery
