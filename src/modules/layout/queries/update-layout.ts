import type { RhymixLayoutQueryDefinition } from './types'

export const updateLayoutQuery = {
  id: 'updateLayout',
  rhymixAction: 'update',
  firestoreOperation: 'update',
  sourceTables: ['layouts'],
  targets: [
    {
      collection: 'layouts',
      pathPattern: 'layouts/{layoutSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Update title, extraVars, layout, and layoutPath for a layout instance.'],
} as const satisfies RhymixLayoutQueryDefinition

export type UpdateLayoutQueryDefinition = typeof updateLayoutQuery
