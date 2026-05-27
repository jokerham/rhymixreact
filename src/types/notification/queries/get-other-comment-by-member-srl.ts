import type { RhymixNotificationQueryDefinition } from './types'

export const getOtherCommentByMemberSrlQuery = {
  id: 'getOtherCommentByMemberSrl',
  rhymixModule: 'ncenterlite',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['comments', 'ncenterlite_user_set'],
  targets: [
    {
      collection: 'comments',
      pathPattern: 'external:comments/{commentSrl}',
      purpose: 'external-reference',
    },
    {
      collection: 'notificationUserSettings',
      pathPattern: 'notificationUserSettings/{memberSrl}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [
    'Rhymix query joins multiple SQL tables; Firestore implementation should use denormalized fields, lookup documents, or multiple reads.',
    'This query references data owned by another module; keep that dependency explicit in runtime implementation.',
    'Check composite indexes, pagination, and aggregate count requirements before runtime implementation.',
  ],
} as const satisfies RhymixNotificationQueryDefinition

export type GetOtherCommentByMemberSrlQueryDefinition = typeof getOtherCommentByMemberSrlQuery
