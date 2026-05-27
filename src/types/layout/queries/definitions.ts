import { deleteLayoutQuery } from './delete-layout'
import { getLayoutQuery } from './get-layout'
import { getLayoutDotListQuery } from './get-layout-dot-list'
import { getLayoutListQuery } from './get-layout-list'
import { getLayoutModulesQuery } from './get-layout-modules'
import { getOneModuleInstanceByModuleNameQuery } from './get-one-module-instance-by-module-name'
import { insertLayoutQuery } from './insert-layout'
import type { RhymixLayoutQueryDefinitionMap } from './types'
import { updateAllLayoutInSiteWithThemeQuery } from './update-all-layout-in-site-with-theme'
import { updateLayoutQuery } from './update-layout'
import { updateModuleLayoutQuery } from './update-module-layout'
import { updateModuleMLayoutQuery } from './update-module-mlayout'
 

export const LAYOUT_QUERY_DEFINITIONS = {
  deleteLayout: deleteLayoutQuery,
  getLayout: getLayoutQuery,
  getLayoutDotList: getLayoutDotListQuery,
  getLayoutList: getLayoutListQuery,
  getLayoutModules: getLayoutModulesQuery,
  getOneModuleInstanceByModuleName: getOneModuleInstanceByModuleNameQuery,
  insertLayout: insertLayoutQuery,
  updateAllLayoutInSiteWithTheme: updateAllLayoutInSiteWithThemeQuery,
  updateLayout: updateLayoutQuery,
  updateModuleLayout: updateModuleLayoutQuery,
  updateModuleMLayout: updateModuleMLayoutQuery,
} as const satisfies RhymixLayoutQueryDefinitionMap

export type LayoutQueryId = keyof typeof LAYOUT_QUERY_DEFINITIONS

export type LayoutQueryDefinition = (typeof LAYOUT_QUERY_DEFINITIONS)[LayoutQueryId]
