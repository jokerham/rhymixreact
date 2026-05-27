import type { RhymixDocumentQueryDefinition } from './types'

export const deleteDeclaredDocumentLogQuery = {
  id: 'deleteDeclaredDocumentLog',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
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

export type DeleteDeclaredDocumentLogQueryDefinition = typeof deleteDeclaredDocumentLogQuery
