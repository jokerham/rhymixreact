import type { RhymixDocumentQueryDefinition } from './types'

export const getTrashByDocumentSrlQuery = {
  id: 'getTrashByDocumentSrl',
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
  notes: [],
} as const satisfies RhymixDocumentQueryDefinition

export type GetTrashByDocumentSrlQueryDefinition = typeof getTrashByDocumentSrlQuery
