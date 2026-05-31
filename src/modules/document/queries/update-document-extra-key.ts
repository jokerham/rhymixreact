import type { RhymixDocumentQueryDefinition } from './types'

export const updateDocumentExtraKeyQuery = {
  id: 'updateDocumentExtraKey',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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

export type UpdateDocumentExtraKeyQueryDefinition = typeof updateDocumentExtraKeyQuery
