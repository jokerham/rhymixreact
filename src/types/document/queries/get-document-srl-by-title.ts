import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentSrlByTitleQuery = {
  id: 'getDocumentSrlByTitle',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['documents', 'modules'],
  targets: [
    {
      collection: 'documents',
      pathPattern: 'documents/{documentSrl}',
      purpose: 'primary',
    },
    {
      collection: 'modules',
      pathPattern: 'external:modules/{moduleSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Rhymix query joins multiple SQL tables; Firestore implementation should use denormalized fields, lookup documents, or multiple reads.',
    'This query references data owned by another module; keep that dependency explicit in runtime implementation.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDocumentSrlByTitleQueryDefinition = typeof getDocumentSrlByTitleQuery
