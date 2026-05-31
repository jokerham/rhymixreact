import type { RhymixLayoutQueryDefinition } from './types'

export const deleteLayoutQuery = {
  id: 'deleteLayout',
  rhymixAction: 'delete',
  firestoreOperation: 'delete',
  sourceTables: ['layouts'],
  targets: [
    {
      collection: 'layouts',
      pathPattern: 'layouts/{layoutSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Delete a layout instance by layout_srl.'],
} as const satisfies RhymixLayoutQueryDefinition

export type DeleteLayoutQueryDefinition = typeof deleteLayoutQuery
