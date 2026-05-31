import type { RhymixDocumentQueryDefinition } from './types'

export const getDeclaredDocumentQuery = {
  id: 'getDeclaredDocument',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['document_declared'],
  targets: [
    {
      collection: 'documentDeclared',
      pathPattern: 'documentDeclared/{documentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDeclaredDocumentQueryDefinition = typeof getDeclaredDocumentQuery
