import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentExtraKeysQuery = {
  id: 'getDocumentExtraKeys',
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
  notes: [],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDocumentExtraKeysQueryDefinition = typeof getDocumentExtraKeysQuery
