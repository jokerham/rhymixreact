import type { RhymixMenuQueryDefinition } from './types'

export const getMenuLayoutQuery = {
  id: 'getMenuLayout',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetMenuLayoutQueryDefinition = typeof getMenuLayoutQuery
