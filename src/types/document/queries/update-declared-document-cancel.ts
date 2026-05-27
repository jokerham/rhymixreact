import type { RhymixDocumentQueryDefinition } from './types'

export const updateDeclaredDocumentCancelQuery = {
  id: 'updateDeclaredDocumentCancel',
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

export type UpdateDeclaredDocumentCancelQueryDefinition = typeof updateDeclaredDocumentCancelQuery
