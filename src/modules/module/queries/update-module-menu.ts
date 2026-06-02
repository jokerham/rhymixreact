import type { RhymixModuleQueryDefinition } from './types'

export const updateModuleMenuQuery = {
  id: 'updateModuleMenu',
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
    'updates menu_srl field only',
  ],
} as const satisfies RhymixModuleQueryDefinition

export type UpdateModuleMenuQueryDefinition = typeof updateModuleMenuQuery
