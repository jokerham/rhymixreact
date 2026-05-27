import type { RhymixDocumentQueryDefinition } from './types'

export const updateVotedCountQuery = {
  id: 'updateVotedCount',
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
  notes: [
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type UpdateVotedCountQueryDefinition = typeof updateVotedCountQuery
