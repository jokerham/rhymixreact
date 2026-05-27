import type { RhymixMenuQueryDefinition } from './types'

export const deleteMenuLayoutQuery = {
  id: 'deleteMenuLayout',
  rhymixAction: 'delete',
  firestoreOperation: 'batch',
  sourceTables: ['menu_layout'],
  targets: [
    {
      collection: 'menuLayouts',
      pathPattern: 'menuLayouts/{menuSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Use a Firestore batch for multi-document menu changes.'],
} as const satisfies RhymixMenuQueryDefinition

export type DeleteMenuLayoutQueryDefinition = typeof deleteMenuLayoutQuery
