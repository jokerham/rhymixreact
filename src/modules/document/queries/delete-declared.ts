import type { RhymixDocumentQueryDefinition } from './types'

export const deleteDeclaredQuery = {
  id: 'deleteDeclared',
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

export type DeleteDeclaredQueryDefinition = typeof deleteDeclaredQuery
