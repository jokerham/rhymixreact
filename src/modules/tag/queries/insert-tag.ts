import type { RhymixTagQueryDefinition } from './types'

export const insertTagQuery = {
  id: 'insertTag',
  rhymixModule: 'tag',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['tags'],
  targets: [
    {
      collection: 'tags',
      pathPattern: 'tags/{tagSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix insertTag.xml in modules/tag.'],
} as const satisfies RhymixTagQueryDefinition

export type InsertTagQueryDefinition = typeof insertTagQuery
