import type { RhymixMenuQueryDefinition } from './types'

export const insertMenuItemQuery = {
  id: 'insertMenuItem',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertMenuItemQueryDefinition = typeof insertMenuItemQuery
