import type { RhymixDocumentQueryDefinition } from './types'

export const updateDocumentTagsQuery = {
  id: 'updateDocumentTags',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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

export type UpdateDocumentTagsQueryDefinition = typeof updateDocumentTagsQuery
