import type { RhymixDocumentQueryDefinition } from './types'

export const deleteDeclaredDocumentQuery = {
  id: 'deleteDeclaredDocument',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
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

export type DeleteDeclaredDocumentQueryDefinition = typeof deleteDeclaredDocumentQuery
