import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentMaxExtraKeyIdxQuery = {
  id: 'getDocumentMaxExtraKeyIdx',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['document_extra_keys'],
  targets: [
    {
      collection: 'documentExtraKeys',
      pathPattern: 'documentExtraKeys/{moduleSrl}_{varIdx}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDocumentMaxExtraKeyIdxQueryDefinition = typeof getDocumentMaxExtraKeyIdxQuery
