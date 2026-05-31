import type { RhymixLayoutQueryDefinition } from './types'

export const getLayoutQuery = {
  id: 'getLayout',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['layouts'],
  targets: [
    {
      collection: 'layouts',
      pathPattern: 'layouts/{layoutSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: ['Read a layout instance by layout_srl.'],
} as const satisfies RhymixLayoutQueryDefinition

export type GetLayoutQueryDefinition = typeof getLayoutQuery
