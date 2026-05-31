import { Timestamp } from 'firebase-admin/firestore'

import { insertMenuItemQuery } from '../src/types/menu/queries/insert-menu-item.ts'
import { insertMenuQuery } from '../src/types/menu/queries/insert-menu.ts'
import { getPageListQuery } from '../src/types/page/queries/get-page-list.ts'
import { insertPageTypeQuery } from '../src/types/page/queries/insert-page-type.ts'

import { db } from './config.ts'
import type { Seed } from './types.ts'

// Derive collection names from query definitions — no hardcoded strings
const COL_MENUS = insertMenuQuery.targets[0].collection
const COL_MENU_ITEMS = insertMenuItemQuery.targets[0].collection
const COL_MODULES = getPageListQuery.targets[0].collection // external-reference; collection name is 'modules'
const COL_PAGE_TYPES = insertPageTypeQuery.targets[0].collection

const now = () => Timestamp.now()

// ─── Menu ─────────────────────────────────────────────────────────────────────

const menu = {
  menuSrl: 1,
  siteSrl: 1,
  title: 'Main',
  listorder: 1,
}

// ─── Menu items ───────────────────────────────────────────────────────────────

const menuItems = [
  {
    menuItemSrl: 1,
    parentSrl: 0,
    menuSrl: 1,
    name: 'Home',
    url: '/home',
    listorder: 1,
    isShortcut: false,
    openWindow: false,
    expand: false,
  },
  {
    menuItemSrl: 2,
    parentSrl: 0,
    menuSrl: 1,
    name: 'Notice',
    url: '/notice',
    listorder: 2,
    isShortcut: false,
    openWindow: false,
    expand: false,
  },
  {
    menuItemSrl: 3,
    parentSrl: 0,
    menuSrl: 1,
    name: 'Q&A',
    url: '/qna',
    listorder: 3,
    isShortcut: false,
    openWindow: false,
    expand: false,
  },
]

// ─── Modules ──────────────────────────────────────────────────────────────────

const sharedModuleDefaults = {
  menuSrl: 1,
  siteSrl: 1,
  domainSrl: 1,
  moduleCategorySrl: 0,
  layoutSrl: 0,
  mlayoutSrl: 0,
  useMobile: false,
  isSkinFix: false,
  isMskinFix: false,
  isDefault: false,
  openRss: false,
}

const modules = [
  {
    ...sharedModuleDefaults,
    moduleSrl: 1,
    module: 'page' as const,
    mid: 'home',
    browserTitle: 'Home',
    isDefault: true,
  },
  {
    ...sharedModuleDefaults,
    moduleSrl: 2,
    module: 'board' as const,
    mid: 'notice',
    browserTitle: 'Notice',
  },
  {
    ...sharedModuleDefaults,
    moduleSrl: 3,
    module: 'board' as const,
    mid: 'qna',
    browserTitle: 'Q&A',
  },
]

// ─── Page types ───────────────────────────────────────────────────────────────

const pageTypes = [
  { moduleSrl: 1, name: 'page_type' as const, value: 'ARTICLE' as const },
]

// ─── Seed ─────────────────────────────────────────────────────────────────────

const seed: Seed = {
  name: '001_default_menus',

  async up() {
    await db.collection(COL_MENUS).doc(String(menu.menuSrl)).set({
      ...menu,
      regdate: now(),
    })

    for (const item of menuItems) {
      await db.collection(COL_MENU_ITEMS).doc(String(item.menuItemSrl)).set({
        ...item,
        regdate: now(),
      })
    }

    for (const mod of modules) {
      await db.collection(COL_MODULES).doc(String(mod.moduleSrl)).set({
        ...mod,
        regdate: now(),
      })
    }

    for (const pt of pageTypes) {
      await db.collection(COL_PAGE_TYPES).doc(String(pt.moduleSrl)).set(pt)
    }
  },

  async down() {
    for (const pt of pageTypes) {
      await db.collection(COL_PAGE_TYPES).doc(String(pt.moduleSrl)).delete()
    }

    for (const mod of modules) {
      await db.collection(COL_MODULES).doc(String(mod.moduleSrl)).delete()
    }

    for (const item of menuItems) {
      await db.collection(COL_MENU_ITEMS).doc(String(item.menuItemSrl)).delete()
    }

    await db.collection(COL_MENUS).doc(String(menu.menuSrl)).delete()
  },
}

export default seed
