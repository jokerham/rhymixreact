import type { RhymixTagQueryDefinition } from './types'

export const getDocumentSrlByTagQuery = {
  id: 'getDocumentSrlByTag',
  rhymixModule: 'tag',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['tags'],
  targets: [
    {
      collection: 'tags',
      pathPattern: 'tags/{tagSrl}',
    },
  ],
  requiresTransaction: false,
  notes: ['Mapped from Rhymix getDocumentSrlByTag.xml in modules/tag.'],
} as const satisfies RhymixTagQueryDefinition

export type GetDocumentSrlByTagQueryDefinition = typeof getDocumentSrlByTagQuery
