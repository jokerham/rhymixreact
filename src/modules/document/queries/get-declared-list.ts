import type { RhymixDocumentQueryDefinition } from './types'

export const getDeclaredListQuery = {
  id: 'getDeclaredList',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['documents', 'document_declared'],
  targets: [
    {
      collection: 'documents',
      pathPattern: 'documents/{documentSrl}',
      purpose: 'primary',
    },
    {
      collection: 'documentDeclared',
      pathPattern: 'documentDeclared/{documentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Rhymix query joins multiple SQL tables; Firestore implementation should use denormalized fields, lookup documents, or multiple reads.',
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDeclaredListQueryDefinition = typeof getDeclaredListQuery
