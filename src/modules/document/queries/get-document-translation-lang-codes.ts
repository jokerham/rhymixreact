import type { RhymixDocumentQueryDefinition } from './types'

export const getDocumentTranslationLangCodesQuery = {
  id: 'getDocumentTranslationLangCodes',
  rhymixAction: 'select',
  firestoreOperation: 'read',
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

export type GetDocumentTranslationLangCodesQueryDefinition =
  typeof getDocumentTranslationLangCodesQuery
