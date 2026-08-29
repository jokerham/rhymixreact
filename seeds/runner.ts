/**
 * npm run seed [up|down|status|refresh <seed-name>]
 */

import { readdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { FieldValue } from 'firebase-admin/firestore'

import { db } from './config.ts'
import type { Seed } from './types.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SEEDS_COLLECTION = '_seeds'
const SEED_FILE_PATTERN = /^\d+_.+\.ts$/

async function getAppliedSeeds(): Promise<string[]> {
  const snapshot = await db.collection(SEEDS_COLLECTION).orderBy('appliedAt').get()
  return snapshot.docs.map((d) => d.id)
}

async function markApplied(name: string): Promise<void> {
  await db.collection(SEEDS_COLLECTION).doc(name).set({
    name,
    appliedAt: FieldValue.serverTimestamp(),
  })
}

async function unmarkApplied(name: string): Promise<void> {
  await db.collection(SEEDS_COLLECTION).doc(name).delete()
}

function getSeedFiles(): string[] {
  return readdirSync(__dirname)
    .filter((f) => SEED_FILE_PATTERN.test(f))
    .sort()
}

async function loadSeed(filename: string): Promise<Seed> {
  const module = (await import(resolve(__dirname, filename))) as { default: Seed }
  return module.default
}

async function runUp(): Promise<void> {
  const files = getSeedFiles()
  const applied = new Set(await getAppliedSeeds())

  const pending = files.filter((f) => !applied.has(f.replace(/\.ts$/, '')))

  if (pending.length === 0) {
    console.log('No pending seeds.')
    return
  }

  for (const file of pending) {
    const name = file.replace(/\.ts$/, '')
    console.log(`Seeding: ${name}`)
    const seed = await loadSeed(file)
    await seed.up()
    await markApplied(name)
    console.log(`  ✓ ${name}`)
  }

  console.log(`\nApplied ${pending.length} seed(s).`)
}

async function runDown(): Promise<void> {
  const applied = await getAppliedSeeds()

  if (applied.length === 0) {
    console.log('No seeds to rollback.')
    return
  }

  const last = applied[applied.length - 1]
  const file = `${last}.ts`

  console.log(`Rolling back: ${last}`)
  const seed = await loadSeed(file)
  await seed.down()
  await unmarkApplied(last)
  console.log(`  ✓ Rolled back ${last}`)
}

async function runStatus(): Promise<void> {
  const files = getSeedFiles()
  const applied = new Set(await getAppliedSeeds())

  if (files.length === 0) {
    console.log('No seed files found.')
    return
  }

  console.log('\nSeed status:')
  for (const file of files) {
    const name = file.replace(/\.ts$/, '')
    const status = applied.has(name) ? '[applied]' : '[pending]'
    console.log(`  ${status}  ${name}`)
  }
  console.log()
}

async function runRefresh(name: string): Promise<void> {
  const file = `${name}.ts`
  console.log(`Refreshing: ${name}`)
  const seed = await loadSeed(file)
  await seed.up()
  await markApplied(name)
  console.log(`  ✓ Refreshed ${name}`)
}

const command = process.argv[2]

const commands: Record<string, () => Promise<void>> = {
  up: runUp,
  down: runDown,
  status: runStatus,
  refresh: () => {
    const name = process.argv[3]
    if (!name) {
      console.error('Usage: npm run seed refresh <seed-name>')
      process.exit(1)
    }
    return runRefresh(name)
  },
}

const handler = commands[command]

if (!handler) {
  console.log('Usage: npm run seed[:rollback|:status|:refresh] [name]')
  console.log()
  console.log('  seed                   Apply all pending seeds')
  console.log('  seed:rollback          Rollback the last applied seed')
  console.log('  seed:status            Show the status of all seeds')
  console.log('  seed:refresh <name>    Re-run a specific seed regardless of status')
  process.exit(1)
}

handler()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
