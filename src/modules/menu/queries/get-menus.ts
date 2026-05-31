import type { RhymixMenuQueryDefinition } from './types'

export const getMenusQuery = {
  id: 'getMenus',
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
  notes: [
    'Check Firestore indexes, ordering, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixMenuQueryDefinition

export type GetMenusQueryDefinition = typeof getMenusQuery
