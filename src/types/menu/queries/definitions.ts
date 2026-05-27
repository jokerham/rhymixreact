import { deleteMenuQuery } from './delete-menu'
import { deleteMenuItemQuery } from './delete-menu-item'
import { deleteMenuItemsQuery } from './delete-menu-items'
import { deleteMenuLayoutQuery } from './delete-menu-layout'
import { getChildMenuCountQuery } from './get-child-menu-count'
import { getMaxListorderQuery } from './get-max-listorder'
import { getMenuQuery } from './get-menu'
import { getMenuByTitleQuery } from './get-menu-by-title'
import { getMenuItemQuery } from './get-menu-item'
import { getMenuItemByUrlQuery } from './get-menu-item-by-url'
import { getMenuItemsQuery } from './get-menu-items'
import { getMenuLayoutQuery } from './get-menu-layout'
import { getMenuListQuery } from './get-menu-list'
import { getMenusQuery } from './get-menus'
import { getMinListorderQuery } from './get-min-listorder'
import { insertMenuQuery } from './insert-menu'
import { insertMenuItemQuery } from './insert-menu-item'
import { insertMenuLayoutQuery } from './insert-menu-layout'
import type { RhymixMenuQueryDefinitionMap } from './types'
import { updateMenuQuery } from './update-menu'
import { updateMenuItemQuery } from './update-menu-item'
import { updateMenuItemListorderQuery } from './update-menu-item-listorder'
import { updateMenuItemNodeQuery } from './update-menu-item-node'
import { updateMenuItemParentQuery } from './update-menu-item-parent'
import { updateMenuItemsQuery } from './update-menu-items'

export const MENU_QUERY_DEFINITIONS = {
  deleteMenu: deleteMenuQuery,
  deleteMenuItem: deleteMenuItemQuery,
  deleteMenuItems: deleteMenuItemsQuery,
  deleteMenuLayout: deleteMenuLayoutQuery,
  getChildMenuCount: getChildMenuCountQuery,
  getMaxListorder: getMaxListorderQuery,
  getMenu: getMenuQuery,
  getMenuByTitle: getMenuByTitleQuery,
  getMenuItem: getMenuItemQuery,
  getMenuItemByUrl: getMenuItemByUrlQuery,
  getMenuItems: getMenuItemsQuery,
  getMenuLayout: getMenuLayoutQuery,
  getMenuList: getMenuListQuery,
  getMenus: getMenusQuery,
  getMinListorder: getMinListorderQuery,
  insertMenu: insertMenuQuery,
  insertMenuItem: insertMenuItemQuery,
  insertMenuLayout: insertMenuLayoutQuery,
  updateMenu: updateMenuQuery,
  updateMenuItem: updateMenuItemQuery,
  updateMenuItemListorder: updateMenuItemListorderQuery,
  updateMenuItemNode: updateMenuItemNodeQuery,
  updateMenuItemParent: updateMenuItemParentQuery,
  updateMenuItems: updateMenuItemsQuery,
} as const satisfies RhymixMenuQueryDefinitionMap

export type MenuQueryId = keyof typeof MENU_QUERY_DEFINITIONS

export type MenuQueryDefinition = (typeof MENU_QUERY_DEFINITIONS)[MenuQueryId]
