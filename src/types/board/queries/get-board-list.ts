import type { RhymixBoardQueryDefinition } from './types'

export const getBoardListQuery = {
  id: 'getBoardList',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['modules', 'domains'],
  targets: [
    {
      collection: 'modules',
      pathPattern: 'external:modules/{moduleSrl}',
      purpose: 'external-reference',
    },
    {
      collection: 'domains',
      pathPattern: 'external:domains/{domainSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    "List modules where module equals 'board', optionally joined with domain data.",
    'Rhymix searches mid, browser_title, and comment with SQL LIKE; Firestore needs exact/prefix fields or external search for equivalent behavior.',
    'Filter by moduleCategorySrl when provided and order by moduleSrl descending.',
  ],
} as const satisfies RhymixBoardQueryDefinition

export type GetBoardListQueryDefinition = typeof getBoardListQuery
