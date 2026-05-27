import { deleteModuleTagsQuery } from './delete-module-tags'
import { deleteTagQuery } from './delete-tag'
import { deleteTagByTagQuery } from './delete-tag-by-tag'
import { getAllTagListQuery } from './get-all-tag-list'
import { getDocumentSrlByTagQuery } from './get-document-srl-by-tag'
import { getDocumentsTagListQuery } from './get-documents-tag-list'
import { getTagListQuery } from './get-tag-list'
import { insertTagQuery } from './insert-tag'
import type { RhymixTagQueryDefinitionMap } from './types'
import { updateTagModuleQuery } from './update-tag-module'

export const TAG_QUERY_DEFINITIONS = {
  deleteModuleTags: deleteModuleTagsQuery,
  deleteTag: deleteTagQuery,
  deleteTagByTag: deleteTagByTagQuery,
  getAllTagList: getAllTagListQuery,
  getDocumentSrlByTag: getDocumentSrlByTagQuery,
  getDocumentsTagList: getDocumentsTagListQuery,
  getTagList: getTagListQuery,
  insertTag: insertTagQuery,
  updateTagModule: updateTagModuleQuery,
} as const satisfies RhymixTagQueryDefinitionMap

export type TagQueryId = keyof typeof TAG_QUERY_DEFINITIONS

export type TagQueryDefinition = (typeof TAG_QUERY_DEFINITIONS)[TagQueryId]
