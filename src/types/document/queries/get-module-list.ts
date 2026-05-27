import type { RhymixDocumentQueryDefinition } from './types'

export const getModuleListQuery = {
  id: 'getModuleList',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['modules', 'documents'],
  targets: [
    {
      collection: 'modules',
      pathPattern: 'external:modules/{moduleSrl}',
      purpose: 'external-reference',
    },
    {
      collection: 'documents',
      pathPattern: 'documents/{documentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Rhymix query joins multiple SQL tables; Firestore implementation should use denormalized fields, lookup documents, or multiple reads.',
    'This query references data owned by another module; keep that dependency explicit in runtime implementation.',
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type GetModuleListQueryDefinition = typeof getModuleListQuery
