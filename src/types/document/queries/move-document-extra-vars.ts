import type { RhymixDocumentQueryDefinition } from './types'

export const moveDocumentExtraVarsQuery = {
  id: 'moveDocumentExtraVars',
  rhymixAction: 'update',
  firestoreOperation: 'batch',
  sourceTables: ['document_extra_vars'],
  targets: [
    {
      collection: 'documentExtraVars',
      pathPattern: 'documentExtraVars/{moduleSrl}_{documentSrl}_{varIdx}_{langCode}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Use a Firestore batch to keep related document-module records consistent.'],
} as const satisfies RhymixDocumentQueryDefinition

export type MoveDocumentExtraVarsQueryDefinition = typeof moveDocumentExtraVarsQuery
