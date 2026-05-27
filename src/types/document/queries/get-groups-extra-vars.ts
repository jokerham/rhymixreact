import type { RhymixDocumentQueryDefinition } from './types'

export const getGroupsExtraVarsQuery = {
  id: 'getGroupsExtraVars',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['document_extra_vars'],
  targets: [
    {
      collection: 'documentExtraVars',
      pathPattern: 'documentExtraVars/{moduleSrl}_{documentSrl}_{varIdx}_{langCode}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type GetGroupsExtraVarsQueryDefinition = typeof getGroupsExtraVarsQuery
