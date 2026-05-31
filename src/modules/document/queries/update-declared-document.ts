import type { RhymixDocumentQueryDefinition } from './types'

export const updateDeclaredDocumentQuery = {
  id: 'updateDeclaredDocument',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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

export type UpdateDeclaredDocumentQueryDefinition = typeof updateDeclaredDocumentQuery
