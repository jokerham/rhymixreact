import { deleteDomainQuery } from './delete-domain'
import { deleteModuleQuery } from './delete-module'
import { deleteModuleCategoryQuery } from './delete-module-category'
import { deleteModuleConfigQuery } from './delete-module-config'
import { deleteModuleExtendQuery } from './delete-module-extend'
import { deleteModuleExtraVarsQuery } from './delete-module-extra-vars'
import { deleteModuleGrantsQuery } from './delete-module-grants'
import { deleteModuleMobileSkinVarsQuery } from './delete-module-mobile-skin-vars'
import { deleteModulePartConfigQuery } from './delete-module-part-config'
import { deleteModuleSkinVarsQuery } from './delete-module-skin-vars'
import { deleteSiteQuery } from './delete-site'
import { getDefaultModulesQuery } from './get-default-modules'
import { getDomainInfoQuery } from './get-domain-info'
import { getDomainsQuery } from './get-domains'
import { getModuleQuery } from './get-module'
import { getModuleByMidQuery } from './get-module-by-mid'
import { getModuleCategoriesQuery } from './get-module-categories'
import { getModuleCategoryQuery } from './get-module-category'
import { getModuleConfigQuery } from './get-module-config'
import { getModuleExtendQuery } from './get-module-extend'
import { getModuleExtraVarsQuery } from './get-module-extra-vars'
import { getModuleGrantsQuery } from './get-module-grants'
import { getModuleInfoByDocumentQuery } from './get-module-info-by-document'
import { getModuleListQuery } from './get-module-list'
import { getModuleMobileSkinVarsQuery } from './get-module-mobile-skin-vars'
import { getModulePartConfigQuery } from './get-module-part-config'
import { getModuleSkinVarsQuery } from './get-module-skin-vars'
import { getModuleTypesQuery } from './get-module-types'
import { getModulesQuery } from './get-modules'
import { getNonuniqueDomainsQuery } from './get-nonunique-domains'
import { getSiteQuery } from './get-site'
import { getSiteInfoQuery } from './get-site-info'
import { getSitesQuery } from './get-sites'
import { insertDomainQuery } from './insert-domain'
import { insertModuleQuery } from './insert-module'
import { insertModuleCategoryQuery } from './insert-module-category'
import { insertModuleConfigQuery } from './insert-module-config'
import { insertModuleExtendQuery } from './insert-module-extend'
import { insertModuleExtraVarsQuery } from './insert-module-extra-vars'
import { insertModuleGrantQuery } from './insert-module-grant'
import { insertModuleMobileSkinVarsQuery } from './insert-module-mobile-skin-vars'
import { insertModulePartConfigQuery } from './insert-module-part-config'
import { insertModuleSkinVarsQuery } from './insert-module-skin-vars'
import { insertSiteQuery } from './insert-site'
import type { RhymixModuleQueryDefinitionMap } from './types'
import { updateDefaultDomainQuery } from './update-default-domain'
import { updateDomainQuery } from './update-domain'
import { updateModuleQuery } from './update-module'
import { updateModuleCategoryQuery } from './update-module-category'
import { updateModuleLayoutQuery } from './update-module-layout'
import { updateModuleMenuQuery } from './update-module-menu'
import { updateSiteQuery } from './update-site'

export const MODULE_QUERY_DEFINITIONS = {
  deleteDomain: deleteDomainQuery,
  deleteModule: deleteModuleQuery,
  deleteModuleCategory: deleteModuleCategoryQuery,
  deleteModuleConfig: deleteModuleConfigQuery,
  deleteModuleExtend: deleteModuleExtendQuery,
  deleteModuleExtraVars: deleteModuleExtraVarsQuery,
  deleteModuleGrants: deleteModuleGrantsQuery,
  deleteModuleMobileSkinVars: deleteModuleMobileSkinVarsQuery,
  deleteModulePartConfig: deleteModulePartConfigQuery,
  deleteModuleSkinVars: deleteModuleSkinVarsQuery,
  deleteSite: deleteSiteQuery,
  getDefaultModules: getDefaultModulesQuery,
  getDomainInfo: getDomainInfoQuery,
  getDomains: getDomainsQuery,
  getNonuniqueDomains: getNonuniqueDomainsQuery,
  getModule: getModuleQuery,
  getModuleByMid: getModuleByMidQuery,
  getModuleCategories: getModuleCategoriesQuery,
  getModuleCategory: getModuleCategoryQuery,
  getModuleConfig: getModuleConfigQuery,
  getModuleExtend: getModuleExtendQuery,
  getModuleExtraVars: getModuleExtraVarsQuery,
  getModuleGrants: getModuleGrantsQuery,
  getModuleInfoByDocument: getModuleInfoByDocumentQuery,
  getModuleList: getModuleListQuery,
  getModuleMobileSkinVars: getModuleMobileSkinVarsQuery,
  getModulePartConfig: getModulePartConfigQuery,
  getModuleSkinVars: getModuleSkinVarsQuery,
  getModules: getModulesQuery,
  getModuleTypes: getModuleTypesQuery,
  getSite: getSiteQuery,
  getSiteInfo: getSiteInfoQuery,
  getSites: getSitesQuery,
  insertDomain: insertDomainQuery,
  insertModule: insertModuleQuery,
  insertModuleCategory: insertModuleCategoryQuery,
  insertModuleConfig: insertModuleConfigQuery,
  insertModuleExtend: insertModuleExtendQuery,
  insertModuleExtraVars: insertModuleExtraVarsQuery,
  insertModuleGrant: insertModuleGrantQuery,
  insertModuleMobileSkinVars: insertModuleMobileSkinVarsQuery,
  insertModulePartConfig: insertModulePartConfigQuery,
  insertModuleSkinVars: insertModuleSkinVarsQuery,
  insertSite: insertSiteQuery,
  updateDefaultDomain: updateDefaultDomainQuery,
  updateDomain: updateDomainQuery,
  updateModule: updateModuleQuery,
  updateModuleCategory: updateModuleCategoryQuery,
  updateModuleLayout: updateModuleLayoutQuery,
  updateModuleMenu: updateModuleMenuQuery,
  updateSite: updateSiteQuery,
} as const satisfies RhymixModuleQueryDefinitionMap

export type ModuleQueryId = keyof typeof MODULE_QUERY_DEFINITIONS

export type ModuleQueryDefinition = (typeof MODULE_QUERY_DEFINITIONS)[ModuleQueryId]
