import { readdirSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { getModuleTypesQuery } from '../src/modules/module/queries/get-module-types.ts'
import type { ModuleConf } from '../src/modules/module/schema/module-conf.ts'

import { db } from './config.ts'
import type { Seed } from './types.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const MODULES_PATH = resolve(__dirname, '../src/modules')
const COL = getModuleTypesQuery.targets[0].collection

async function loadModuleConfs(): Promise<ModuleConf[]> {
  const dirs = readdirSync(MODULES_PATH, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)

  const confs: ModuleConf[] = []
  for (const dir of dirs) {
    const confPath = resolve(MODULES_PATH, dir, 'conf.ts')
    if (!existsSync(confPath)) continue
    const mod = (await import(confPath)) as { default: ModuleConf }
    confs.push(mod.default)
  }
  return confs
}

function buildDocs(confs: ModuleConf[]) {
  const docs: Array<{ id: string; data: object }> = []
  for (const conf of confs) {
    if (conf.pageTypes) {
      for (const pt of conf.pageTypes) {
        docs.push({ id: pt.name, data: { name: pt.name, title: pt.title, description: conf.description, noSkin: pt.noSkin, isPageType: true } })
      }
    } else {
      docs.push({ id: conf.name, data: { name: conf.name, title: conf.title, description: conf.description, noSkin: conf.noSkin, isPageType: false } })
    }
  }
  return docs
}

const seed: Seed = {
  name: '004_module_types',

  async up() {
    const confs = await loadModuleConfs()
    const docs = buildDocs(confs)
    for (const { id, data } of docs) {
      await db.collection(COL).doc(id).set(data)
    }
    console.log(`  Seeded ${docs.length} module types:`, docs.map((d) => d.id).join(', '))
  },

  async down() {
    const confs = await loadModuleConfs()
    const docs = buildDocs(confs)
    for (const { id } of docs) {
      await db.collection(COL).doc(id).delete()
    }
  },
}

export default seed
