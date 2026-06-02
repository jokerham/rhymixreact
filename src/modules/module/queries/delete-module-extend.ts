import type { RhymixModuleQueryDefinition } from './types'

export const deleteModuleExtendQuery = {
  id: 'deleteModuleExtend',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['module_extend'],
  targets: [
    {
      collection: 'moduleExtends',
      pathPattern: 'moduleExtends/{id}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixModuleQueryDefinition

export type DeleteModuleExtendQueryDefinition = typeof deleteModuleExtendQuery
