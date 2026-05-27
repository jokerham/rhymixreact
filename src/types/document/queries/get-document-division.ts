import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentDivisionQuery = {
  id: 'getDocumentDivision',
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

export type GetDocumentDivisionQueryDefinition = typeof getDocumentDivisionQuery
