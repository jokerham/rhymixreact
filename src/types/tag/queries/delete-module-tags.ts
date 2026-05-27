import type { RhymixTagQueryDefinition } from './types'

export const deleteModuleTagsQuery = {
  id: 'deleteModuleTags',
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
    'Mapped from Rhymix deleteModuleTags.xml in modules/tag.',
    'This affects multiple matching documents in SQL; use a batched write or chunked migration worker in Firestore.',
  ],
} as const satisfies RhymixTagQueryDefinition

export type DeleteModuleTagsQueryDefinition = typeof deleteModuleTagsQuery
