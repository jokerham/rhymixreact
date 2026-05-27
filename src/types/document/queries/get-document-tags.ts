import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentTagsQuery = {
  id: 'getDocumentTags',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetDocumentTagsQueryDefinition = typeof getDocumentTagsQuery
