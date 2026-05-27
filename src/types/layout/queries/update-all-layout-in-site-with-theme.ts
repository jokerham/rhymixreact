import type { RhymixLayoutQueryDefinition } from './types'

export const updateAllLayoutInSiteWithThemeQuery = {
  id: 'updateAllLayoutInSiteWithTheme',
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
    'Batch update module layout_srl values for a site.',
    'This mutates module data owned outside the layout module.',
  ],
} as const satisfies RhymixLayoutQueryDefinition

export type UpdateAllLayoutInSiteWithThemeQueryDefinition =
  typeof updateAllLayoutInSiteWithThemeQuery
