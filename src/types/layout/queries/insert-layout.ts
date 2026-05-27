import type { RhymixLayoutQueryDefinition } from './types'

export const insertLayoutQuery = {
  id: 'insertLayout',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['layouts'],
  targets: [
    {
      collection: 'layouts',
      pathPattern: 'layouts/{layoutSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Create a layout instance. Use layoutSrl as the document ID during migration.'],
} as const satisfies RhymixLayoutQueryDefinition

export type InsertLayoutQueryDefinition = typeof insertLayoutQuery
