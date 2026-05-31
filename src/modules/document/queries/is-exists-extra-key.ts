import type { RhymixDocumentQueryDefinition } from './types'

export const isExistsExtraKeyQuery = {
  id: 'isExistsExtraKey',
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

export type IsExistsExtraKeyQueryDefinition = typeof isExistsExtraKeyQuery
