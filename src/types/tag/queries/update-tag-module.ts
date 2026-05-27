import type { RhymixTagQueryDefinition } from './types'

export const updateTagModuleQuery = {
  id: 'updateTagModule',
  rhymixModule: 'tag',
  rhymixAction: 'update',
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
    'Mapped from Rhymix updateTagModule.xml in modules/tag.',
    'This affects multiple matching documents in SQL; use a batched write or chunked migration worker in Firestore.',
  ],
} as const satisfies RhymixTagQueryDefinition

export type UpdateTagModuleQueryDefinition = typeof updateTagModuleQuery
