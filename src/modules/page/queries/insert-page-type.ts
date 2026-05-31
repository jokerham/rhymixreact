import type { RhymixPageQueryDefinition } from './types'

export const insertPageTypeQuery = {
  id: 'insertPageType',
  rhymixModule: 'page',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['module_extra_vars'],
  targets: [
    {
      collection: 'pageTypes',
      pathPattern: 'pageTypes/{moduleSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix insertPageType.xml in modules/page.'],
} as const satisfies RhymixPageQueryDefinition

export type InsertPageTypeQueryDefinition = typeof insertPageTypeQuery
