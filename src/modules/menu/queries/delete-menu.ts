import type { RhymixMenuQueryDefinition } from './types'

export const deleteMenuQuery = {
  id: 'deleteMenu',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
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

export type DeleteMenuQueryDefinition = typeof deleteMenuQuery
