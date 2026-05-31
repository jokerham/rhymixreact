import type { RhymixDocumentQueryDefinition } from './types'

export const getAliasesQuery = {
  id: 'getAliases',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['document_aliases'],
  targets: [
    {
      collection: 'documentAliases',
      pathPattern: 'documentAliases/{aliasSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixDocumentQueryDefinition

export type GetAliasesQueryDefinition = typeof getAliasesQuery
