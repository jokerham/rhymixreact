import type { RhymixBoardQueryDefinition } from './types'

export const getAllBoardQuery = {
  id: 'getAllBoard',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['modules'],
  targets: [
    {
      collection: 'modules',
      pathPattern: 'external:modules/{moduleSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    "Board has no dedicated Rhymix table; query modules where module equals 'board'.",
    'Order by mid ascending.',
  ],
} as const satisfies RhymixBoardQueryDefinition

export type GetAllBoardQueryDefinition = typeof getAllBoardQuery
