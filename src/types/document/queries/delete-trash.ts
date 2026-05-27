import type { RhymixDocumentQueryDefinition } from './types'

export const deleteTrashQuery = {
  id: 'deleteTrash',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['document_trash'],
  targets: [
    {
      collection: 'documentTrash',
      pathPattern: 'documentTrash/{trashSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Delete a trash entry by trashSrl.'],
} as const satisfies RhymixDocumentQueryDefinition

export type DeleteTrashQueryDefinition = typeof deleteTrashQuery
