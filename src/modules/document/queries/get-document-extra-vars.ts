import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentExtraVarsQuery = {
  id: 'getDocumentExtraVars',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['document_extra_vars'],
  targets: [
    {
      collection: 'documentExtraVars',
      pathPattern: 'documentExtraVars',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Read extra vars for one or multiple documentSrls.'],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDocumentExtraVarsQueryDefinition = typeof getDocumentExtraVarsQuery
