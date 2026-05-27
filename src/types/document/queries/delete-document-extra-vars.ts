import type { RhymixDocumentQueryDefinition } from './types'

export const deleteDocumentExtraVarsQuery = {
  id: 'deleteDocumentExtraVars',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['document_extra_vars'],
  targets: [
    {
      collection: 'documentExtraVars',
      pathPattern: 'documentExtraVars/{moduleSrl}_{documentSrl}_{varIdx}_{langCode}_{eid}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Delete a specific extra var entry using moduleSrl, documentSrl, varIdx, langCode, and eid.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type DeleteDocumentExtraVarsQueryDefinition = typeof deleteDocumentExtraVarsQuery
