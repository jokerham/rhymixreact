import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentVotedLogInfoQuery = {
  id: 'getDocumentVotedLogInfo',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['document_voted_log'],
  targets: [
    {
      collection: 'documentVotedLog',
      pathPattern: 'documentVotedLog',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Read aggregate info for voted logs by documentSrl, including sum(point) and count.'],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDocumentVotedLogInfoQueryDefinition = typeof getDocumentVotedLogInfoQuery
