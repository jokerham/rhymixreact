import type { RhymixPointQueryDefinition } from './types'

export const getFilePointQuery = {
  id: 'getFilePoint',
  rhymixModule: 'point',
  rhymixAction: 'select',
  firestoreOperation: 'aggregate',
  sourceTables: ['files'],
  targets: [
    {
      collection: 'files',
      pathPattern: 'external:files/{fileSrl}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Mapped from Rhymix getFilePoint.xml in modules/point.',
    'Includes external Rhymix table references; keep those documents in sync through their owning module.',
    'Rhymix uses SQL aggregation; Firestore may need count aggregation queries or denormalized counters.',
  ],
} as const satisfies RhymixPointQueryDefinition

export type GetFilePointQueryDefinition = typeof getFilePointQuery
