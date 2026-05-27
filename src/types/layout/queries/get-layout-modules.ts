import type { RhymixLayoutQueryDefinition } from './types'

export const getLayoutModulesQuery = {
  id: 'getLayoutModules',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['menu_item', 'modules'],
  targets: [
    {
      collection: 'menuItems',
      pathPattern: 'external:menuItems/{menuItemId}',
      purpose: 'external-reference',
    },
    {
      collection: 'modules',
      pathPattern: 'external:modules/{moduleSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Rhymix query joins menu_item.url to modules.mid.',
    'This query depends on menu/module data owned outside the layout module; implement with denormalized references or multiple reads.',
  ],
} as const satisfies RhymixLayoutQueryDefinition

export type GetLayoutModulesQueryDefinition = typeof getLayoutModulesQuery
