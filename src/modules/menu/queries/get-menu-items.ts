import type { RhymixMenuQueryDefinition } from './types'

export const getMenuItemsQuery = {
  id: 'getMenuItems',
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
    'Menu items are ordered by parentSrl and listorder; preserve this when moving nodes.',
  ],
} as const satisfies RhymixMenuQueryDefinition

export type GetMenuItemsQueryDefinition = typeof getMenuItemsQuery
