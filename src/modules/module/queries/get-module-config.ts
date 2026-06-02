import type { RhymixModuleQueryDefinition } from './types'

export const getModuleConfigQuery = {
  id: 'getModuleConfig',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['module_config'],
  targets: [
    {
      collection: 'moduleConfigs',
      pathPattern: 'moduleConfigs/{module}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixModuleQueryDefinition

export type GetModuleConfigQueryDefinition = typeof getModuleConfigQuery
