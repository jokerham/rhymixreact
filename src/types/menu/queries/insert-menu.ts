import type { RhymixMenuQueryDefinition } from './types'

export const insertMenuQuery = {
  id: 'insertMenu',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertMenuQueryDefinition = typeof insertMenuQuery
