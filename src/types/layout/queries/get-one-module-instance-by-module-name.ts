import type { RhymixLayoutQueryDefinition } from './types'

export const getOneModuleInstanceByModuleNameQuery = {
  id: 'getOneModuleInstanceByModuleName',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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
    'Read one module instance by module name, ordered by regdate.',
    'This query references module data owned outside the layout module.',
  ],
} as const satisfies RhymixLayoutQueryDefinition

export type GetOneModuleInstanceByModuleNameQueryDefinition =
  typeof getOneModuleInstanceByModuleNameQuery
