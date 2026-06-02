import type { RhymixModuleQueryDefinition } from './types'

export const updateModuleLayoutQuery = {
  id: 'updateModuleLayout',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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
    'updates layout_srl and mlayout_srl fields only',
  ],
} as const satisfies RhymixModuleQueryDefinition

export type UpdateModuleLayoutQueryDefinition = typeof updateModuleLayoutQuery
