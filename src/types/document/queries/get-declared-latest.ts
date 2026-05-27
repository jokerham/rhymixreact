import type { RhymixDocumentQueryDefinition } from './types'

export const getDeclaredLatestQuery = {
  id: 'getDeclaredLatest',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['documents', 'document_declared', 'document_declared_log'],
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
    {
      collection: 'documentDeclaredLog',
      pathPattern: 'documentDeclaredLog/{documentSrl}_{memberSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Rhymix query joins multiple SQL tables; Firestore implementation should use denormalized fields, lookup documents, or multiple reads.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDeclaredLatestQueryDefinition = typeof getDeclaredLatestQuery
