import type { RhymixDocumentQueryDefinition } from './types'

export const insertTrashQuery = {
  id: 'insertTrash',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['document_trash'],
  targets: [
    {
      collection: 'documentTrash',
      pathPattern: 'documentTrash/{trashSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Create a trash entry for a deleted document.'],
} as const satisfies RhymixDocumentQueryDefinition

export type InsertTrashQueryDefinition = typeof insertTrashQuery
