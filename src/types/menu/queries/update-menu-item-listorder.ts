import type { RhymixMenuQueryDefinition } from './types'

export const updateMenuItemListorderQuery = {
  id: 'updateMenuItemListorder',
  rhymixAction: 'update',
  firestoreOperation: 'batch',
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
    'Use a Firestore batch for multi-document menu changes.',
    'Menu items are ordered by parentSrl and listorder; preserve this when moving nodes.',
  ],
} as const satisfies RhymixMenuQueryDefinition

export type UpdateMenuItemListorderQueryDefinition = typeof updateMenuItemListorderQuery
