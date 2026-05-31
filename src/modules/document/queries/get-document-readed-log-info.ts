import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentReadedLogInfoQuery = {
  id: 'getDocumentReadedLogInfo',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['document_readed_log'],
  targets: [
    {
      collection: 'documentReadedLog',
      pathPattern: 'documentReadedLog',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Count readed log entries for a document by documentSrl and optional memberSrl/ipaddress.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDocumentReadedLogInfoQueryDefinition = typeof getDocumentReadedLogInfoQuery
