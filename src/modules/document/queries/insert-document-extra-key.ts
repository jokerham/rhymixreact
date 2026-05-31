import type { RhymixDocumentQueryDefinition } from './types'

export const insertDocumentExtraKeyQuery = {
  id: 'insertDocumentExtraKey',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertDocumentExtraKeyQueryDefinition = typeof insertDocumentExtraKeyQuery
