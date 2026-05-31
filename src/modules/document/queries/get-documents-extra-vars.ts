import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentsExtraVarsQuery = {
  id: 'getDocumentsExtraVars',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['document_extra_keys', 'document_extra_vars'],
  targets: [
    {
      collection: 'documentExtraKeys',
      pathPattern: 'documentExtraKeys/{moduleSrl}_{varIdx}',
      purpose: 'primary',
    },
    {
      collection: 'documentExtraVars',
      pathPattern: 'documentExtraVars/{moduleSrl}_{documentSrl}_{varIdx}_{langCode}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Rhymix query joins multiple SQL tables; Firestore implementation should use denormalized fields, lookup documents, or multiple reads.',
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDocumentsExtraVarsQueryDefinition = typeof getDocumentsExtraVarsQuery
