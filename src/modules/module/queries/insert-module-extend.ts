import type { RhymixModuleQueryDefinition } from './types'

export const insertModuleExtendQuery = {
  id: 'insertModuleExtend',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertModuleExtendQueryDefinition = typeof insertModuleExtendQuery
