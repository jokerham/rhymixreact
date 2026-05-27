import { deleteAliasQuery } from './delete-alias'
import { deleteCategoryQuery } from './delete-category'
import { deleteDeclaredQuery } from './delete-declared'
import { deleteDeclaredDocumentQuery } from './delete-declared-document'
import { deleteDeclaredDocumentLogQuery } from './delete-declared-document-log'
import { deleteDeclaredDocumentsQuery } from './delete-declared-documents'
import { deleteDocumentQuery } from './delete-document'
import { deleteDocumentDeclaredLogQuery } from './delete-document-declared-log'
import { deleteDocumentExtraKeysQuery } from './delete-document-extra-keys'
import { deleteDocumentExtraVarsQuery } from './delete-document-extra-vars'
import { deleteDocumentReadedLogQuery } from './delete-document-readed-log'
import { deleteDocumentUpdateLogQuery } from './delete-document-update-log'
import { deleteDocumentVotedLogQuery } from './delete-document-voted-log'
import { deleteHistoryQuery } from './delete-history'
import { deleteModuleCategoryQuery } from './delete-module-category'
import { deleteModuleDocumentQuery } from './delete-module-document'
import { deleteTrashQuery } from './delete-trash'
import { getAliasesQuery } from './get-aliases'
import { getAllModulesQuery } from './get-all-modules'
import { getCategoryQuery } from './get-category'
import { getCategoryDocumentCountQuery } from './get-category-document-count'
import { getCategoryDocumentCountsQuery } from './get-category-document-counts'
import { getCategoryListQuery } from './get-category-list'
import { getChildCategoryCountQuery } from './get-child-category-count'
import { getChildCategoryMinListOrderQuery } from './get-child-category-min-list-order'
import { getDailyArchivedListQuery } from './get-daily-archived-list'
import { getDeclaredDocumentQuery } from './get-declared-document'
import { getDeclaredLatestQuery } from './get-declared-latest'
import { getDeclaredListQuery } from './get-declared-list'
import { getDeclaredLogByDocumentSrlQuery } from './get-declared-log-by-document-srl'
import { getDocumentQuery } from './get-document'
import { getDocumentCountQuery } from './get-document-count'
import { getDocumentCountByDateQuery } from './get-document-count-by-date'
import { getDocumentCountByGroupStatusQuery } from './get-document-count-by-group-status'
import { getDocumentCountByMemberSrlQuery } from './get-document-count-by-member-srl'
import { getDocumentDeclaredLogInfoQuery } from './get-document-declared-log-info'
import { getDocumentDivisionQuery } from './get-document-division'
import { getDocumentDivisionCountQuery } from './get-document-division-count'
import { getDocumentDivisionUseIndexQuery } from './get-document-division-use-index'
import { getDocumentExtraKeysQuery } from './get-document-extra-keys'
import { getDocumentExtraVarsQuery } from './get-document-extra-vars'
import { getDocumentExtraVarsCountQuery } from './get-document-extra-vars-count'
import { getDocumentListQuery } from './get-document-list'
import { getDocumentListByMemberSrlQuery } from './get-document-list-by-member-srl'
import { getDocumentListExtraSortQuery } from './get-document-list-extra-sort'
import { getDocumentListPageQuery } from './get-document-list-page'
import { getDocumentListUseIndexQuery } from './get-document-list-use-index'
import { getDocumentListWithExtraVarsQuery } from './get-document-list-with-extra-vars'
import { getDocumentListWithExtraVarsPageQuery } from './get-document-list-with-extra-vars-page'
import { getDocumentListWithinCommentQuery } from './get-document-list-within-comment'
import { getDocumentListWithinCommentPageQuery } from './get-document-list-within-comment-page'
import { getDocumentListWithinExtraVarsQuery } from './get-document-list-within-extra-vars'
import { getDocumentListWithinExtraVarsExtraSortQuery } from './get-document-list-within-extra-vars-extra-sort'
import { getDocumentListWithinMemberQuery } from './get-document-list-within-member'
import { getDocumentListWithinTagQuery } from './get-document-list-within-tag'
import { getDocumentListWithinTagPageQuery } from './get-document-list-within-tag-page'
import { getDocumentMaxExtraKeyIdxQuery } from './get-document-max-extra-key-idx'
import { getDocumentReadedLogInfoQuery } from './get-document-readed-log-info'
import { getDocumentSrlByAliasQuery } from './get-document-srl-by-alias'
import { getDocumentSrlByTitleQuery } from './get-document-srl-by-title'
import { getDocumentTagsQuery } from './get-document-tags'
import { getDocumentTranslationLangCodesQuery } from './get-document-translation-lang-codes'
import { getDocumentUpdateLogQuery } from './get-document-update-log'
import { getDocumentVotedLogQuery } from './get-document-voted-log'
import { getDocumentVotedLogInfoQuery } from './get-document-voted-log-info'
import { getDocumentsQuery } from './get-documents'
import { getDocumentsExtraVarsQuery } from './get-documents-extra-vars'
import { getGroupsExtraKeysQuery } from './get-groups-extra-keys'
import { getGroupsExtraVarsQuery } from './get-groups-extra-vars'
import { getHistoriesQuery } from './get-histories'
import { getHistoryQuery } from './get-history'
import { getModuleListQuery } from './get-module-list'
import { getMonthlyArchivedListQuery } from './get-monthly-archived-list'
import { getNoticeListQuery } from './get-notice-list'
import { getTrashQuery } from './get-trash'
import { getTrashByDocumentSrlQuery } from './get-trash-by-document-srl'
import { getTrashListQuery } from './get-trash-list'
import { getUpdateLogQuery } from './get-update-log'
import { getUpdateLogAdminisExistsQuery } from './get-update-log-adminis-exists'
import { getVotedMemberListQuery } from './get-voted-member-list'
import { insertAliasQuery } from './insert-alias'
import { insertCategoryQuery } from './insert-category'
import { insertDeclaredDocumentQuery } from './insert-declared-document'
import { insertDocumentQuery } from './insert-document'
import { insertDocumentDeclaredLogQuery } from './insert-document-declared-log'
import { insertDocumentExtraKeyQuery } from './insert-document-extra-key'
import { insertDocumentExtraVarQuery } from './insert-document-extra-var'
import { insertDocumentReadedLogQuery } from './insert-document-readed-log'
import { insertDocumentUpdateLogQuery } from './insert-document-update-log'
import { insertDocumentVotedLogQuery } from './insert-document-voted-log'
import { insertHistoryQuery } from './insert-history'
import { insertTrashQuery } from './insert-trash'
import { isExistsExtraKeyQuery } from './is-exists-extra-key'
import { moveDocumentExtraVarsQuery } from './move-document-extra-vars'
import { updateBlamedCountQuery } from './update-blamed-count'
import { updateCategoryQuery } from './update-category'
import { updateCategoryCountQuery } from './update-category-count'
import { updateCategoryIsDefaultQuery } from './update-category-is-default'
import { updateCategoryOrderQuery } from './update-category-order'
import { updateCommentCountQuery } from './update-comment-count'
import { updateDeclaredDocumentQuery } from './update-declared-document'
import { updateDeclaredDocumentCancelQuery } from './update-declared-document-cancel'
import { updateDocumentQuery } from './update-document'
import { updateDocumentCategoryQuery } from './update-document-category'
import { updateDocumentCommentStatusQuery } from './update-document-comment-status'
import { updateDocumentExtraKeyQuery } from './update-document-extra-key'
import { updateDocumentExtraKeyEidQuery } from './update-document-extra-key-eid'
import { updateDocumentExtraKeyIdxQuery } from './update-document-extra-key-idx'
import { updateDocumentExtraKeyIdxOrderQuery } from './update-document-extra-key-idx-order'
import { updateDocumentExtraVarQuery } from './update-document-extra-var'
import { updateDocumentExtraVarEidQuery } from './update-document-extra-var-eid'
import { updateDocumentExtraVarIdxQuery } from './update-document-extra-var-idx'
import { updateDocumentExtraVarIdxOrderQuery } from './update-document-extra-var-idx-order'
import { updateDocumentExtraVarsModuleQuery } from './update-document-extra-vars-module'
import { updateDocumentModuleQuery } from './update-document-module'
import { updateDocumentOrderQuery } from './update-document-order'
import { updateDocumentStatusQuery } from './update-document-status'
import { updateDocumentTagsQuery } from './update-document-tags'
import { updateDocumentsAllowCommentTrackbackQuery } from './update-documents-allow-comment-trackback'
import { updateDocumentsLangCodeQuery } from './update-documents-lang-code'
import { updateDocumentsModuleQuery } from './update-documents-module'
import { updateDocumentsSecretQuery } from './update-documents-secret'
import { updateReadedCountQuery } from './update-readed-count'
import { updateTrackbackCountQuery } from './update-trackback-count'
import { updateUploadedCountQuery } from './update-uploaded-count'
import { updateVotedCountQuery } from './update-voted-count'
import type { RhymixDocumentQueryDefinitionMap } from './types'

export const DOCUMENT_QUERY_DEFINITIONS = {
  deleteAlias: deleteAliasQuery,
  deleteCategory: deleteCategoryQuery,
  deleteDeclared: deleteDeclaredQuery,
  deleteDeclaredDocument: deleteDeclaredDocumentQuery,
  deleteDeclaredDocumentLog: deleteDeclaredDocumentLogQuery,
  deleteDeclaredDocuments: deleteDeclaredDocumentsQuery,
  deleteDocument: deleteDocumentQuery,
  deleteDocumentDeclaredLog: deleteDocumentDeclaredLogQuery,
  deleteDocumentExtraKeys: deleteDocumentExtraKeysQuery,
  deleteDocumentExtraVars: deleteDocumentExtraVarsQuery,
  deleteDocumentReadedLog: deleteDocumentReadedLogQuery,
  deleteDocumentUpdateLog: deleteDocumentUpdateLogQuery,
  deleteDocumentVotedLog: deleteDocumentVotedLogQuery,
  deleteHistory: deleteHistoryQuery,
  deleteModuleCategory: deleteModuleCategoryQuery,
  deleteModuleDocument: deleteModuleDocumentQuery,
  deleteTrash: deleteTrashQuery,
  getAliases: getAliasesQuery,
  getAllModules: getAllModulesQuery,
  getCategory: getCategoryQuery,
  getCategoryDocumentCount: getCategoryDocumentCountQuery,
  getCategoryDocumentCounts: getCategoryDocumentCountsQuery,
  getCategoryList: getCategoryListQuery,
  getChildCategoryCount: getChildCategoryCountQuery,
  getChildCategoryMinListOrder: getChildCategoryMinListOrderQuery,
  getDailyArchivedList: getDailyArchivedListQuery,
  getDeclaredDocument: getDeclaredDocumentQuery,
  getDeclaredLatest: getDeclaredLatestQuery,
  getDeclaredList: getDeclaredListQuery,
  getDeclaredLogByDocumentSrl: getDeclaredLogByDocumentSrlQuery,
  getDocument: getDocumentQuery,
  getDocumentCount: getDocumentCountQuery,
  getDocumentCountByDate: getDocumentCountByDateQuery,
  getDocumentCountByGroupStatus: getDocumentCountByGroupStatusQuery,
  getDocumentCountByMemberSrl: getDocumentCountByMemberSrlQuery,
  getDocumentDeclaredLogInfo: getDocumentDeclaredLogInfoQuery,
  getDocumentDivision: getDocumentDivisionQuery,
  getDocumentDivisionCount: getDocumentDivisionCountQuery,
  getDocumentDivisionUseIndex: getDocumentDivisionUseIndexQuery,
  getDocumentExtraKeys: getDocumentExtraKeysQuery,
  getDocumentExtraVars: getDocumentExtraVarsQuery,
  getDocumentExtraVarsCount: getDocumentExtraVarsCountQuery,
  getDocumentList: getDocumentListQuery,
  getDocumentListByMemberSrl: getDocumentListByMemberSrlQuery,
  getDocumentListExtraSort: getDocumentListExtraSortQuery,
  getDocumentListPage: getDocumentListPageQuery,
  getDocumentListUseIndex: getDocumentListUseIndexQuery,
  getDocumentListWithExtraVars: getDocumentListWithExtraVarsQuery,
  getDocumentListWithExtraVarsPage: getDocumentListWithExtraVarsPageQuery,
  getDocumentListWithinComment: getDocumentListWithinCommentQuery,
  getDocumentListWithinCommentPage: getDocumentListWithinCommentPageQuery,
  getDocumentListWithinExtraVars: getDocumentListWithinExtraVarsQuery,
  getDocumentListWithinExtraVarsExtraSort: getDocumentListWithinExtraVarsExtraSortQuery,
  getDocumentListWithinMember: getDocumentListWithinMemberQuery,
  getDocumentListWithinTag: getDocumentListWithinTagQuery,
  getDocumentListWithinTagPage: getDocumentListWithinTagPageQuery,
  getDocumentMaxExtraKeyIdx: getDocumentMaxExtraKeyIdxQuery,
  getDocumentReadedLogInfo: getDocumentReadedLogInfoQuery,
  getDocumentSrlByAlias: getDocumentSrlByAliasQuery,
  getDocumentSrlByTitle: getDocumentSrlByTitleQuery,
  getDocumentTags: getDocumentTagsQuery,
  getDocumentTranslationLangCodes: getDocumentTranslationLangCodesQuery,
  getDocumentUpdateLog: getDocumentUpdateLogQuery,
  getDocumentVotedLog: getDocumentVotedLogQuery,
  getDocumentVotedLogInfo: getDocumentVotedLogInfoQuery,
  getDocuments: getDocumentsQuery,
  getDocumentsExtraVars: getDocumentsExtraVarsQuery,
  getGroupsExtraKeys: getGroupsExtraKeysQuery,
  getGroupsExtraVars: getGroupsExtraVarsQuery,
  getHistories: getHistoriesQuery,
  getHistory: getHistoryQuery,
  getModuleList: getModuleListQuery,
  getMonthlyArchivedList: getMonthlyArchivedListQuery,
  getNoticeList: getNoticeListQuery,
  getTrash: getTrashQuery,
  getTrashByDocumentSrl: getTrashByDocumentSrlQuery,
  getTrashList: getTrashListQuery,
  getUpdateLog: getUpdateLogQuery,
  getUpdateLogAdminisExists: getUpdateLogAdminisExistsQuery,
  getVotedMemberList: getVotedMemberListQuery,
  insertAlias: insertAliasQuery,
  insertCategory: insertCategoryQuery,
  insertDeclaredDocument: insertDeclaredDocumentQuery,
  insertDocument: insertDocumentQuery,
  insertDocumentDeclaredLog: insertDocumentDeclaredLogQuery,
  insertDocumentExtraKey: insertDocumentExtraKeyQuery,
  insertDocumentExtraVar: insertDocumentExtraVarQuery,
  insertDocumentReadedLog: insertDocumentReadedLogQuery,
  insertDocumentUpdateLog: insertDocumentUpdateLogQuery,
  insertDocumentVotedLog: insertDocumentVotedLogQuery,
  insertHistory: insertHistoryQuery,
  insertTrash: insertTrashQuery,
  isExistsExtraKey: isExistsExtraKeyQuery,
  moveDocumentExtraVars: moveDocumentExtraVarsQuery,
  updateBlamedCount: updateBlamedCountQuery,
  updateCategory: updateCategoryQuery,
  updateCategoryCount: updateCategoryCountQuery,
  updateCategoryIsDefault: updateCategoryIsDefaultQuery,
  updateCategoryOrder: updateCategoryOrderQuery,
  updateCommentCount: updateCommentCountQuery,
  updateDeclaredDocument: updateDeclaredDocumentQuery,
  updateDeclaredDocumentCancel: updateDeclaredDocumentCancelQuery,
  updateDocument: updateDocumentQuery,
  updateDocumentCategory: updateDocumentCategoryQuery,
  updateDocumentCommentStatus: updateDocumentCommentStatusQuery,
  updateDocumentExtraKey: updateDocumentExtraKeyQuery,
  updateDocumentExtraKeyEid: updateDocumentExtraKeyEidQuery,
  updateDocumentExtraKeyIdx: updateDocumentExtraKeyIdxQuery,
  updateDocumentExtraKeyIdxOrder: updateDocumentExtraKeyIdxOrderQuery,
  updateDocumentExtraVar: updateDocumentExtraVarQuery,
  updateDocumentExtraVarEid: updateDocumentExtraVarEidQuery,
  updateDocumentExtraVarIdx: updateDocumentExtraVarIdxQuery,
  updateDocumentExtraVarIdxOrder: updateDocumentExtraVarIdxOrderQuery,
  updateDocumentExtraVarsModule: updateDocumentExtraVarsModuleQuery,
  updateDocumentModule: updateDocumentModuleQuery,
  updateDocumentOrder: updateDocumentOrderQuery,
  updateDocumentStatus: updateDocumentStatusQuery,
  updateDocumentTags: updateDocumentTagsQuery,
  updateDocumentsAllowCommentTrackback: updateDocumentsAllowCommentTrackbackQuery,
  updateDocumentsLangCode: updateDocumentsLangCodeQuery,
  updateDocumentsModule: updateDocumentsModuleQuery,
  updateDocumentsSecret: updateDocumentsSecretQuery,
  updateReadedCount: updateReadedCountQuery,
  updateTrackbackCount: updateTrackbackCountQuery,
  updateUploadedCount: updateUploadedCountQuery,
  updateVotedCount: updateVotedCountQuery,
} as const satisfies RhymixDocumentQueryDefinitionMap

export type DocumentQueryId = keyof typeof DOCUMENT_QUERY_DEFINITIONS

export type DocumentQueryDefinition = (typeof DOCUMENT_QUERY_DEFINITIONS)[DocumentQueryId]
