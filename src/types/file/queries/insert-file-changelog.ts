import type { RhymixFileQueryDefinition } from './types'

export const insertFileChangelogQuery = {
  id: 'insertFileChangelog',
  rhymixAction: 'insert',
  firestoreOperation: 'create',
  sourceTables: ['files_changelog'],
  targets: [
    {
      collection: 'fileChangelogs',
      pathPattern: 'fileChangelogs/{id}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixFileQueryDefinition

export type InsertFileChangelogQueryDefinition = typeof insertFileChangelogQuery
