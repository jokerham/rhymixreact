import type { RhymixDocumentQueryDefinition } from './types'

export const getGroupsExtraKeysQuery = {
  id: 'getGroupsExtraKeys',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['document_extra_keys'],
  targets: [
    {
      collection: 'documentExtraKeys',
      pathPattern: 'documentExtraKeys/{moduleSrl}_{varIdx}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type GetGroupsExtraKeysQueryDefinition = typeof getGroupsExtraKeysQuery
