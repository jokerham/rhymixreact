import type { RhymixDocumentQueryDefinition } from './types'

export const getTrashQuery = {
  id: 'getTrash',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['document_trash'],
  targets: [
    {
      collection: 'documentTrash',
      pathPattern: 'documentTrash/{trashSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Read a trash entry by trashSrl.'],
} as const satisfies RhymixDocumentQueryDefinition

export type GetTrashQueryDefinition = typeof getTrashQuery
