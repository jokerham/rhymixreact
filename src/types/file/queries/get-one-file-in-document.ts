import type { RhymixFileQueryDefinition } from './types'

export const getOneFileInDocumentQuery = {
  id: 'getOneFileInDocument',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['files', 'modules', 'documents'],
  targets: [
    {
      collection: 'files',
      pathPattern: 'files/{fileSrl}',
      purpose: 'primary',
    },
    {
      collection: 'modules',
      pathPattern: 'external:modules/{moduleSrl}',
      purpose: 'external-reference',
    },
    {
      collection: 'documents',
      pathPattern: 'external:documents/{documentSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Rhymix query joins multiple SQL tables; Firestore implementation should use denormalized fields, lookup documents, or multiple reads.',
    'This query references data owned by another module; keep that dependency explicit in runtime implementation.',
  ],
} as const satisfies RhymixFileQueryDefinition

export type GetOneFileInDocumentQueryDefinition = typeof getOneFileInDocumentQuery
