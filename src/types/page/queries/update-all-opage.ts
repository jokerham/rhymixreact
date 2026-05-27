import type { RhymixPageQueryDefinition } from './types'

export const updateAllOpageQuery = {
  id: 'updateAllOpage',
  rhymixModule: 'page',
  rhymixAction: 'update',
  firestoreOperation: 'batch',
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
    'Mapped from Rhymix updateAllOpage.xml in modules/page.',
    'Includes external Rhymix table references; keep those documents in sync through their owning module.',
    'This affects multiple matching documents in SQL; use a batched write or chunked migration worker in Firestore.',
  ],
} as const satisfies RhymixPageQueryDefinition

export type UpdateAllOpageQueryDefinition = typeof updateAllOpageQuery
