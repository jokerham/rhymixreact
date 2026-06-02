import type { RhymixModuleQueryDefinition } from './types'

export const getModuleExtendQuery = {
  id: 'getModuleExtend',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetModuleExtendQueryDefinition = typeof getModuleExtendQuery
