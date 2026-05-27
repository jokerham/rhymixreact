import type { RhymixTagQueryDefinition } from './types'

export const getAllTagListQuery = {
  id: 'getAllTagList',
  rhymixModule: 'tag',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['tags'],
  targets: [
    {
      collection: 'tags',
      pathPattern: 'tags/{tagSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix getAllTagList.xml in modules/tag.'],
} as const satisfies RhymixTagQueryDefinition

export type GetAllTagListQueryDefinition = typeof getAllTagListQuery
