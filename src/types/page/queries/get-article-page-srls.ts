import type { RhymixPageQueryDefinition } from './types'

export const getArticlePageSrlsQuery = {
  id: 'getArticlePageSrls',
  rhymixModule: 'page',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['module_extra_vars'],
  targets: [
    {
      collection: 'pageTypes',
      pathPattern: 'pageTypes/{moduleSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix getArticlePageSrls.xml in modules/page.'],
} as const satisfies RhymixPageQueryDefinition

export type GetArticlePageSrlsQueryDefinition = typeof getArticlePageSrlsQuery
