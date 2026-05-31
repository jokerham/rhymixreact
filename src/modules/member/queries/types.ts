export type RhymixQueryAction = 'select' | 'insert' | 'update' | 'delete'

export type FirestoreQueryOperation =
  | 'read'
  | 'create'
  | 'update'
  | 'delete'
  | 'transaction'
  | 'batch'
  | 'aggregate'

export type FirestoreQueryTarget = {
  collection: string
  subcollection?: string
  pathPattern: string
  purpose?: 'primary' | 'unique-lookup' | 'denormalized-copy' | 'external-reference'
}

export type RhymixMemberQueryDefinition = {
  id: string
  rhymixAction: RhymixQueryAction
  firestoreOperation: FirestoreQueryOperation
  sourceTables: string[]
  targets: FirestoreQueryTarget[]
  requiresTransaction: boolean
  notes: string[]
}

export type RhymixMemberQueryDefinitionMap = Record<string, RhymixMemberQueryDefinition>
