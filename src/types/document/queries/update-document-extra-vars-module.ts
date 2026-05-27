import type { RhymixDocumentQueryDefinition } from './types'

export const updateDocumentExtraVarsModuleQuery = {
  id: 'updateDocumentExtraVarsModule',
  rhymixAction: 'update',
  firestoreOperation: 'update',
  sourceTables: ['document_extra_vars'],
  targets: [
    {
      collection: 'documentExtraVars',
      pathPattern: 'documentExtraVars/{moduleSrl}_{documentSrl}_{varIdx}_{langCode}',
      purpose: 'primary',
    },
  ],
  requiresTransaction: false,
  notes: [],
} as const satisfies RhymixDocumentQueryDefinition

export type UpdateDocumentExtraVarsModuleQueryDefinition = typeof updateDocumentExtraVarsModuleQuery
