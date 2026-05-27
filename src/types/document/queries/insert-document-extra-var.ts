import type { RhymixDocumentQueryDefinition } from './types'

export const insertDocumentExtraVarQuery = {
  id: 'insertDocumentExtraVar',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['document_extra_vars'],
  targets: [
    {
      collection: 'documentExtraVars',
      pathPattern: 'documentExtraVars/{moduleSrl}_{documentSrl}_{varIdx}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Create a new extra var entry for a document.'],
} as const satisfies RhymixDocumentQueryDefinition

export type InsertDocumentExtraVarQueryDefinition = typeof insertDocumentExtraVarQuery
