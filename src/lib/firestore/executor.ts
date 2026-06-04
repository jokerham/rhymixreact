import {
  type DocumentReference,
  type QueryConstraint,
  type Transaction,
  type UpdateData,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  collection as fsCollection,
  query as fsQuery,
  runTransaction,
  setDoc,
  updateDoc,
} from 'firebase/firestore'

import { db } from '../firebase'

import type { RhymixQueryDefinition } from './types'

export type PathParams = Record<string, string>
export type ResolvedRefs = Record<string, DocumentReference | null>

// Remove keys whose value is undefined so Firestore never receives them.
export function stripUndefined<T extends object>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined),
  ) as T
}

// Replace {param} tokens in a path pattern with values from params.
// Returns null if any required token is missing.
export function resolvePath(pattern: string, params: PathParams): string | null {
  let missing = false
  const resolved = pattern.replace(/\{(\w+)\}/g, (_, key) => {
    if (!(key in params)) { missing = true; return '' }
    return params[key]
  })
  return missing ? null : resolved
}

// Build a DocumentReference from a path pattern + params.
export function resolveRef(pattern: string, params: PathParams): DocumentReference | null {
  const path = resolvePath(pattern, params)
  if (!path) return null
  const parts = path.split('/').filter(Boolean)
  if (parts.length < 2 || parts.length % 2 !== 0) return null
  return doc(db, path)
}

// Get the primary target ref (throws if unresolvable).
function primaryRef(query: RhymixQueryDefinition, params: PathParams): DocumentReference {
  const target = query.targets.find((t) => t.purpose === 'primary') ?? query.targets[0]
  const ref = resolveRef(target.pathPattern, params)
  if (!ref) throw new Error(`[executor] Cannot resolve primary path "${target.pathPattern}" with params: ${JSON.stringify(params)}`)
  return ref
}

// Build a map of { collectionName → DocumentReference | null } for all targets.
export function resolveAllRefs(query: RhymixQueryDefinition, params: PathParams): ResolvedRefs {
  const refs: ResolvedRefs = {}
  for (const target of query.targets) {
    refs[target.collection] = resolveRef(target.pathPattern, params)
  }
  return refs
}

// ── CRUD helpers ──────────────────────────────────────────────────────────────

export async function queryRead<T>(
  query: RhymixQueryDefinition,
  params: PathParams,
): Promise<T | null> {
  const snap = await getDoc(primaryRef(query, params))
  return snap.exists() ? (snap.data() as T) : null
}

export async function queryCreate(
  query: RhymixQueryDefinition,
  params: PathParams,
  data: object,
): Promise<void> {
  await setDoc(primaryRef(query, params), data)
}

export async function queryUpdate(
  query: RhymixQueryDefinition,
  params: PathParams,
  data: UpdateData<object>,
): Promise<void> {
  await updateDoc(primaryRef(query, params), data)
}

export async function queryDelete(
  query: RhymixQueryDefinition,
  params: PathParams,
): Promise<void> {
  await deleteDoc(primaryRef(query, params))
}

export async function queryList<T>(
  query: RhymixQueryDefinition,
): Promise<T[]> {
  const target = query.targets.find((t) => t.purpose === 'primary') ?? query.targets[0]
  const snap = await getDocs(fsCollection(db, target.collection))
  return snap.docs.map((d) => d.data() as T)
}

// Like queryList but with additional Firestore query constraints (where, orderBy, limit…).
export async function queryListWhere<T>(
  query: RhymixQueryDefinition,
  constraints: QueryConstraint[],
): Promise<T[]> {
  const target = query.targets.find((t) => t.purpose === 'primary') ?? query.targets[0]
  const q = fsQuery(fsCollection(db, target.collection), ...constraints)
  const snap = await getDocs(q)
  return snap.docs.map((d) => d.data() as T)
}

// ── Transaction helper ────────────────────────────────────────────────────────

// Resolves all target refs from the query definition then runs a transaction.
// The handler receives the Firestore Transaction and a map of pre-resolved refs
// keyed by collection name, so the calling service never needs to hardcode paths.
export async function queryTransaction(
  query: RhymixQueryDefinition,
  params: PathParams,
  handler: (tx: Transaction, refs: ResolvedRefs) => Promise<void>,
): Promise<void> {
  const refs = resolveAllRefs(query, params)
  await runTransaction(db, (tx) => handler(tx, refs))
}
