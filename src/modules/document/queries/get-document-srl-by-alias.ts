import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentSrlByAliasQuery = {
  id: 'getDocumentSrlByAlias',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['document_aliases', 'modules'],
  targets: [
    {
      collection: 'documentAliases',
      pathPattern: 'documentAliases/{aliasSrl}',
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

export type GetDocumentSrlByAliasQueryDefinition = typeof getDocumentSrlByAliasQuery
