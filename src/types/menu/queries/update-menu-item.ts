import type { RhymixMenuQueryDefinition } from './types'

export const updateMenuItemQuery = {
  id: 'updateMenuItem',
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

export type UpdateMenuItemQueryDefinition = typeof updateMenuItemQuery
