import type { RhymixDocumentQueryDefinition } from './types'

export const deleteModuleDocumentQuery = {
  id: 'deleteModuleDocument',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['documents'],
  targets: [
    {
      collection: 'documents',
      pathPattern: 'documents/{documentSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixDocumentQueryDefinition

export type DeleteModuleDocumentQueryDefinition = typeof deleteModuleDocumentQuery
