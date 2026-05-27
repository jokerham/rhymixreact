import type { RhymixLayoutQueryDefinition } from './types'

export const updateModuleLayoutQuery = {
  id: 'updateModuleLayout',
  rhymixAction: 'update',
  firestoreOperation: 'batch',
  sourceTables: ['modules'],
  targets: [
    {
      collection: 'modules',
      pathPattern: 'external:modules/{moduleSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Batch update layout_srl on selected module instances.',
    'This mutates module data owned outside the layout module.',
  ],
} as const satisfies RhymixLayoutQueryDefinition

export type UpdateModuleLayoutQueryDefinition = typeof updateModuleLayoutQuery
