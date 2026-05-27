import type { RhymixMenuQueryDefinition } from './types'

export const getMaxListorderQuery = {
  id: 'getMaxListorder',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['menu_item'],
  targets: [
    {
      collection: 'menuItems',
      pathPattern: 'menuItems/{menuItemSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Check Firestore indexes, ordering, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixMenuQueryDefinition

export type GetMaxListorderQueryDefinition = typeof getMaxListorderQuery
