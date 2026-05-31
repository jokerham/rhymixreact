import type { RhymixMenuQueryDefinition } from './types'

export const getMenuQuery = {
  id: 'getMenu',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['menu'],
  targets: [
    {
      collection: 'menus',
      pathPattern: 'menus/{menuSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixMenuQueryDefinition

export type GetMenuQueryDefinition = typeof getMenuQuery
