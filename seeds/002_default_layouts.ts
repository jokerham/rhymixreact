import { Timestamp } from 'firebase-admin/firestore'

import { insertLayoutQuery } from '../src/modules/layout/queries/insert-layout.ts'

import { db } from './config.ts'
import type { Seed } from './types.ts'

// Derive collection name from query definition — avoid hardcoded strings
const COL_LAYOUTS = insertLayoutQuery.targets[0].collection

const now = () => Timestamp.now()

const layouts = [
  {
    layoutSrl: 1,
    siteSrl: 1,
    layout: 'default',
    title: 'Default Layout',
    layoutPath: '/layouts/default',
    moduleSrl: 1,
    layoutType: 'P',
  },
  {
    layoutSrl: 2,
    siteSrl: 1,
    layout: 'mobile',
    title: 'Mobile Layout',
    layoutPath: '/layouts/mobile',
    moduleSrl: 1,
    layoutType: 'M',
  },
]

const seed: Seed = {
  name: '002_default_layouts',

  async up() {
    for (const l of layouts) {
      await db.collection(COL_LAYOUTS).doc(String(l.layoutSrl)).set({
        ...l,
        regdate: now(),
      })
    }
  },

  async down() {
    for (const l of layouts) {
      await db.collection(COL_LAYOUTS).doc(String(l.layoutSrl)).delete()
    }
  },
}

export default seed
