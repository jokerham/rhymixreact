import type { RhymixModuleQueryDefinition } from './types'

export const getModulesByMenuSrlQuery = {
  id: 'getModulesByMenuSrl',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['modules'],
  targets: [
    {
      collection: 'modules',
      pathPattern: 'modules/{moduleSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    "PHP equivalent: getMenuItems(menuSrl) → url (mid) → getModuleInfoByMid(url) → module_srl",
    "In Firestore the ModuleDocument carries menuSrl directly, so query modules where('menuSrl', '==', menuSrl).",
    "Requires a Firestore composite index on menuSrl if combined with other constraints.",
  ],
} as const satisfies RhymixModuleQueryDefinition

export type GetModulesByMenuSrlQueryDefinition = typeof getModulesByMenuSrlQuery
