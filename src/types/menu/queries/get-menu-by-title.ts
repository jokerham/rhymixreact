import type { RhymixMenuQueryDefinition } from './types'

export const getMenuByTitleQuery = {
  id: 'getMenuByTitle',
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

export type GetMenuByTitleQueryDefinition = typeof getMenuByTitleQuery
