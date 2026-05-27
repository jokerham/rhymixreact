import type { RhymixDocumentQueryDefinition } from './types'

export const deleteDocumentExtraKeysQuery = {
  id: 'deleteDocumentExtraKeys',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
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

export type DeleteDocumentExtraKeysQueryDefinition = typeof deleteDocumentExtraKeysQuery
