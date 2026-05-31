import type { RhymixMenuQueryDefinition } from './types'

export const updateMenuQuery = {
  id: 'updateMenu',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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

export type UpdateMenuQueryDefinition = typeof updateMenuQuery
