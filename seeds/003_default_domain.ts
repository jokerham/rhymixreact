import { Timestamp } from 'firebase-admin/firestore'

import { insertDomainQuery } from '../src/modules/module/queries/insert-domain.ts'

import { db } from './config.ts'
import type { Seed } from './types.ts'

const COL_DOMAINS = insertDomainQuery.targets[0].collection

const now = () => Timestamp.now()

const domain = {
  domainSrl: 1,
  domain: 'localhost',
  isDefaultDomain: 'Y' as const,
  indexModuleSrl: 1,
  indexDocumentSrl: 0,
  defaultLayoutSrl: 1,
  defaultMlayoutSrl: 2,
  defaultMenuSrl: 1,
  security: 'none',
}

const seed: Seed = {
  name: '003_default_domain',

  async up() {
    await db.collection(COL_DOMAINS).doc(String(domain.domainSrl)).set({
      ...domain,
      regdate: now(),
    })
  },

  async down() {
    await db.collection(COL_DOMAINS).doc(String(domain.domainSrl)).delete()
  },
}

export default seed
