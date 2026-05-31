import type { RhymixTagQueryDefinition } from './types'

export const deleteTagByTagQuery = {
  id: 'deleteTagByTag',
  rhymixModule: 'tag',
  rhymixAction: 'delete',
  firestoreOperation: 'batch',
  sourceTables: ['tags'],
  targets: [
    {
      collection: 'tags',
      pathPattern: 'tags/{tagSrl}',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix deleteTagByTag.xml in modules/tag.',
    'This affects multiple matching documents in SQL; use a batched write or chunked migration worker in Firestore.',
  ],
} as const satisfies RhymixTagQueryDefinition

export type DeleteTagByTagQueryDefinition = typeof deleteTagByTagQuery
