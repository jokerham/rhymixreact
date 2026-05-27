import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentCountByMemberSrlQuery = {
  id: 'getDocumentCountByMemberSrl',
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
  notes: [
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDocumentCountByMemberSrlQueryDefinition = typeof getDocumentCountByMemberSrlQuery
