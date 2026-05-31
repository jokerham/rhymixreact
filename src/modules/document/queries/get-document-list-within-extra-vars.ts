import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentListWithinExtraVarsQuery = {
  id: 'getDocumentListWithinExtraVars',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['documents', 'document_extra_vars'],
  targets: [
    {
      collection: 'documents',
      pathPattern: 'documents/{documentSrl}',
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

export type GetDocumentListWithinExtraVarsQueryDefinition =
  typeof getDocumentListWithinExtraVarsQuery
