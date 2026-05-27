import type { RhymixPageQueryDefinition } from './types'

export const updateSkinFixQuery = {
  id: 'updateSkinFix',
  rhymixModule: 'page',
  rhymixAction: 'update',
  firestoreOperation: 'update',
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
    'Mapped from Rhymix updateSkinFix.xml in modules/page.',
    'Includes external Rhymix table references; keep those documents in sync through their owning module.',
  ],
} as const satisfies RhymixPageQueryDefinition

export type UpdateSkinFixQueryDefinition = typeof updateSkinFixQuery
