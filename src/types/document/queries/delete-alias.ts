import type { RhymixDocumentQueryDefinition } from './types'

export const deleteAliasQuery = {
  id: 'deleteAlias',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
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

export type DeleteAliasQueryDefinition = typeof deleteAliasQuery
