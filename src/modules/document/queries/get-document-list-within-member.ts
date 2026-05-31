import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentListWithinMemberQuery = {
  id: 'getDocumentListWithinMember',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['documents', 'member'],
  targets: [
    {
      collection: 'documents',
      pathPattern: 'documents/{documentSrl}',
      purpose: 'primary',
    },
    {
      collection: 'members',
      pathPattern: 'external:members/{memberId}',
      purpose: 'external-reference',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Rhymix query joins multiple SQL tables; Firestore implementation should use denormalized fields, lookup documents, or multiple reads.',
    'This query references data owned by another module; keep that dependency explicit in runtime implementation.',
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixDocumentQueryDefinition

export type GetDocumentListWithinMemberQueryDefinition = typeof getDocumentListWithinMemberQuery
