import type { RhymixMenuQueryDefinition } from './types'

export const insertMenuLayoutQuery = {
  id: 'insertMenuLayout',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['menu_layout'],
  targets: [
    {
      collection: 'menuLayouts',
      pathPattern: 'menuLayouts/{menuSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixMenuQueryDefinition

export type InsertMenuLayoutQueryDefinition = typeof insertMenuLayoutQuery
