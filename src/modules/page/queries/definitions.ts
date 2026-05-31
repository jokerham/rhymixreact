import { getArticlePageSrlsQuery } from './get-article-page-srls'
import { getPageListQuery } from './get-page-list'
import { insertPageTypeQuery } from './insert-page-type'
import { pageTypeNullCheckQuery } from './page-type-null-check'
import { pageTypeOpageCheckQuery } from './page-type-opage-check'
import type { RhymixPageQueryDefinitionMap } from './types'
import { updateAllOpageQuery } from './update-all-opage'
import { updateSkinFixQuery } from './update-skin-fix'

export const PAGE_QUERY_DEFINITIONS = {
  getArticlePageSrls: getArticlePageSrlsQuery,
  getPageList: getPageListQuery,
  insertPageType: insertPageTypeQuery,
  pageTypeNullCheck: pageTypeNullCheckQuery,
  pageTypeOpageCheck: pageTypeOpageCheckQuery,
  updateAllOpage: updateAllOpageQuery,
  updateSkinFix: updateSkinFixQuery,
} as const satisfies RhymixPageQueryDefinitionMap

export type PageQueryId = keyof typeof PAGE_QUERY_DEFINITIONS

export type PageQueryDefinition = (typeof PAGE_QUERY_DEFINITIONS)[PageQueryId]
