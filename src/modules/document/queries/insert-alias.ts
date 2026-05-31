import type { RhymixDocumentQueryDefinition } from './types'

export const insertAliasQuery = {
  id: 'insertAlias',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
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

export type InsertAliasQueryDefinition = typeof insertAliasQuery
