import type { RhymixMenuQueryDefinition } from './types'

export const getMinListorderQuery = {
  id: 'getMinListorder',
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

export type GetMinListorderQueryDefinition = typeof getMinListorderQuery
