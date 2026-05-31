import type { RhymixPointQueryDefinition } from './types'

export const getDocumentPointQuery = {
  id: 'getDocumentPoint',
  rhymixModule: 'point',
  rhymixAction: 'select',
  firestoreOperation: 'aggregate',
  sourceTables: ['documents'],
  targets: [
    {
      collection: 'documents',
      pathPattern: 'external:documents/{documentSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix getDocumentPoint.xml in modules/point.',
    'Includes external Rhymix table references; keep those documents in sync through their owning module.',
    'Rhymix uses SQL aggregation; Firestore may need count aggregation queries or denormalized counters.',
  ],
} as const satisfies RhymixPointQueryDefinition

export type GetDocumentPointQueryDefinition = typeof getDocumentPointQuery
