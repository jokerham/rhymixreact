import type { RhymixDocumentQueryDefinition } from './types'

export const updateDocumentExtraVarQuery = {
  id: 'updateDocumentExtraVar',
  rhymixAction: 'update',
  firestoreOperation: 'update',
  sourceTables: ['document_extra_vars'],
  targets: [
    {
      collection: 'documentExtraVars',
      pathPattern: 'documentExtraVars/{moduleSrl}_{documentSrl}_{varIdx}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Update an extra var entry for a document by moduleSrl, documentSrl, and varIdx.'],
} as const satisfies RhymixDocumentQueryDefinition

export type UpdateDocumentExtraVarQueryDefinition = typeof updateDocumentExtraVarQuery
