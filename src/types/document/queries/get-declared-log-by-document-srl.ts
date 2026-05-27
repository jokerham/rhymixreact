import type { RhymixDocumentQueryDefinition } from './types'

export const getDeclaredLogByDocumentSrlQuery = {
  id: 'getDeclaredLogByDocumentSrl',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['document_declared_log'],
  targets: [
    {
      collection: 'documentDeclaredLog',
      pathPattern: 'documentDeclaredLog/{documentSrl}_{memberSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDeclaredLogByDocumentSrlQueryDefinition = typeof getDeclaredLogByDocumentSrlQuery
