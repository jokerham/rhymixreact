import type { RhymixMenuQueryDefinition } from './types'

export const updateMenuItemParentQuery = {
  id: 'updateMenuItemParent',
  rhymixAction: 'update',
  firestoreOperation: 'update',
  sourceTables: ['menu_item'],
  targets: [
    {
      collection: 'menuItems',
      pathPattern: 'menuItems/{menuItemSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Menu items are ordered by parentSrl and listorder; preserve this when moving nodes.'],
} as const satisfies RhymixMenuQueryDefinition

export type UpdateMenuItemParentQueryDefinition = typeof updateMenuItemParentQuery
