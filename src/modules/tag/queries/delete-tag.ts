import type { RhymixTagQueryDefinition } from './types'

export const deleteTagQuery = {
  id: 'deleteTag',
  rhymixModule: 'tag',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['tags'],
  targets: [
    {
      collection: 'tags',
      pathPattern: 'tags/{tagSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix deleteTag.xml in modules/tag.'],
} as const satisfies RhymixTagQueryDefinition

export type DeleteTagQueryDefinition = typeof deleteTagQuery
