import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentVotedLogQuery = {
  id: 'getDocumentVotedLog',
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
  notes: ['Read document voted logs by documentSrl and optional memberSrl/ipaddress filters.'],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDocumentVotedLogQueryDefinition = typeof getDocumentVotedLogQuery
