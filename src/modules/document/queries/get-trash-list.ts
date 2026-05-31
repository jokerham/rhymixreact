import type { RhymixDocumentQueryDefinition } from './types'

export const getTrashListQuery = {
  id: 'getTrashList',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['documents', 'document_trash'],
  targets: [
    {
      collection: 'documents',
      pathPattern: 'documents',
      purpose: 'primary',
    },
    {
      collection: 'documentTrash',
      pathPattern: 'documentTrash',
      purpose: 'denormalized-copy',
    },
  ],
  requiresTransaction: false,
  notes: ['List trash entries joined with document metadata.'],
} as const satisfies RhymixDocumentQueryDefinition

export type GetTrashListQueryDefinition = typeof getTrashListQuery
