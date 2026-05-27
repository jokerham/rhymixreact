import { deleteCommentQuery } from './delete-comment'
import { deleteCommentListQuery } from './delete-comment-list'
import { deleteCommentVotedLogQuery } from './delete-comment-voted-log'
import { deleteCommentsQuery } from './delete-comments'
import { deleteCommentsListQuery } from './delete-comments-list'
import { deleteDeclaredCommentLogQuery } from './delete-declared-comment-log'
import { deleteDeclaredCommentsQuery } from './delete-declared-comments'
import { deleteModuleCommentsQuery } from './delete-module-comments'
import { deleteModuleCommentsListQuery } from './delete-module-comments-list'
import { getAllCommentsQuery } from './get-all-comments'
import { getChildCommentCountQuery } from './get-child-comment-count'
import { getChildCommentsQuery } from './get-child-comments'
import { getCommentQuery } from './get-comment'
import { getCommentCountQuery } from './get-comment-count'
import { getCommentCountByMemberSrlQuery } from './get-comment-count-by-member-srl'
import { getCommentDeclaredLogInfoQuery } from './get-comment-declared-log-info'
import { getCommentDepthQuery } from './get-comment-depth'
import { getCommentListQuery } from './get-comment-list'
import { getCommentListByMemberSrlQuery } from './get-comment-list-by-member-srl'
import { getCommentListItemQuery } from './get-comment-list-item'
import { getCommentPageQuery } from './get-comment-page'
import { getCommentPageItemQuery } from './get-comment-page-item'
import { getCommentPageListQuery } from './get-comment-page-list'
import { getCommentParentNextSiblingQuery } from './get-comment-parent-next-sibling'
import { getCommentVotedLogQuery } from './get-comment-voted-log'
import { getCommentVotedLogInfoQuery } from './get-comment-voted-log-info'
import { getCommentVotedLogMultiQuery } from './get-comment-voted-log-multi'
import { getCommentsQuery } from './get-comments'
import { getCommentsByDocumentSrlsQuery } from './get-comments-by-document-srls'
import { getDeclaredCommentQuery } from './get-declared-comment'
import { getDeclaredLatestQuery } from './get-declared-latest'
import { getDeclaredListQuery } from './get-declared-list'
import { getDeclaredLogByCommentSrlQuery } from './get-declared-log-by-comment-srl'
import { getDistinctModulesQuery } from './get-distinct-modules'
import { getModuleListQuery } from './get-module-list'
import { getNewestCommentListQuery } from './get-newest-comment-list'
import { getTotalCommentCountByGroupStatusQuery } from './get-total-comment-count-by-group-status'
import { getTotalCommentCountWithinMemberByGroupStatusQuery } from './get-total-comment-count-within-member-by-group-status'
import { getTotalCommentListQuery } from './get-total-comment-list'
import { getTotalCommentListWithinMemberQuery } from './get-total-comment-list-within-member'
import { getTotalCommentListWithoutJoinQuery } from './get-total-comment-list-without-join'
import { getVotedMemberListQuery } from './get-voted-member-list'
import { insertCommentQuery } from './insert-comment'
import { insertCommentDeclaredLogQuery } from './insert-comment-declared-log'
import { insertCommentListQuery } from './insert-comment-list'
import { insertCommentVotedLogQuery } from './insert-comment-voted-log'
import { insertDeclaredCommentQuery } from './insert-declared-comment'
import type { RhymixCommentQueryDefinitionMap } from './types'
import { updateBlamedCountQuery } from './update-blamed-count'
import { updateCommentQuery } from './update-comment'
import { updateCommentByDeleteQuery } from './update-comment-by-delete'
import { updateCommentByRestoreQuery } from './update-comment-by-restore'
import { updateCommentListArrangeQuery } from './update-comment-list-arrange'
import { updateCommentListModuleQuery } from './update-comment-list-module'
import { updateCommentModuleQuery } from './update-comment-module'
import { updateDeclaredCommentQuery } from './update-declared-comment'
import { updateDeclaredCommentCancelQuery } from './update-declared-comment-cancel'
import { updatePublishedStatusQuery } from './update-published-status'
import { updateUploadedCountQuery } from './update-uploaded-count'
import { updateVotedCountQuery } from './update-voted-count'

export const COMMENT_QUERY_DEFINITIONS = {
  deleteComment: deleteCommentQuery,
  deleteCommentList: deleteCommentListQuery,
  deleteCommentVotedLog: deleteCommentVotedLogQuery,
  deleteComments: deleteCommentsQuery,
  deleteCommentsList: deleteCommentsListQuery,
  deleteDeclaredCommentLog: deleteDeclaredCommentLogQuery,
  deleteDeclaredComments: deleteDeclaredCommentsQuery,
  deleteModuleComments: deleteModuleCommentsQuery,
  deleteModuleCommentsList: deleteModuleCommentsListQuery,
  getAllComments: getAllCommentsQuery,
  getChildCommentCount: getChildCommentCountQuery,
  getChildComments: getChildCommentsQuery,
  getComment: getCommentQuery,
  getCommentCount: getCommentCountQuery,
  getCommentCountByMemberSrl: getCommentCountByMemberSrlQuery,
  getCommentDeclaredLogInfo: getCommentDeclaredLogInfoQuery,
  getCommentDepth: getCommentDepthQuery,
  getCommentList: getCommentListQuery,
  getCommentListByMemberSrl: getCommentListByMemberSrlQuery,
  getCommentListItem: getCommentListItemQuery,
  getCommentPage: getCommentPageQuery,
  getCommentPageItem: getCommentPageItemQuery,
  getCommentPageList: getCommentPageListQuery,
  getCommentParentNextSibling: getCommentParentNextSiblingQuery,
  getCommentVotedLog: getCommentVotedLogQuery,
  getCommentVotedLogInfo: getCommentVotedLogInfoQuery,
  getCommentVotedLogMulti: getCommentVotedLogMultiQuery,
  getComments: getCommentsQuery,
  getCommentsByDocumentSrls: getCommentsByDocumentSrlsQuery,
  getDeclaredComment: getDeclaredCommentQuery,
  getDeclaredLatest: getDeclaredLatestQuery,
  getDeclaredList: getDeclaredListQuery,
  getDeclaredLogByCommentSrl: getDeclaredLogByCommentSrlQuery,
  getDistinctModules: getDistinctModulesQuery,
  getModuleList: getModuleListQuery,
  getNewestCommentList: getNewestCommentListQuery,
  getTotalCommentCountByGroupStatus: getTotalCommentCountByGroupStatusQuery,
  getTotalCommentCountWithinMemberByGroupStatus: getTotalCommentCountWithinMemberByGroupStatusQuery,
  getTotalCommentList: getTotalCommentListQuery,
  getTotalCommentListWithinMember: getTotalCommentListWithinMemberQuery,
  getTotalCommentListWithoutJoin: getTotalCommentListWithoutJoinQuery,
  getVotedMemberList: getVotedMemberListQuery,
  insertComment: insertCommentQuery,
  insertCommentDeclaredLog: insertCommentDeclaredLogQuery,
  insertCommentList: insertCommentListQuery,
  insertCommentVotedLog: insertCommentVotedLogQuery,
  insertDeclaredComment: insertDeclaredCommentQuery,
  updateBlamedCount: updateBlamedCountQuery,
  updateComment: updateCommentQuery,
  updateCommentByDelete: updateCommentByDeleteQuery,
  updateCommentByRestore: updateCommentByRestoreQuery,
  updateCommentListArrange: updateCommentListArrangeQuery,
  updateCommentListModule: updateCommentListModuleQuery,
  updateCommentModule: updateCommentModuleQuery,
  updateDeclaredComment: updateDeclaredCommentQuery,
  updateDeclaredCommentCancel: updateDeclaredCommentCancelQuery,
  updatePublishedStatus: updatePublishedStatusQuery,
  updateUploadedCount: updateUploadedCountQuery,
  updateVotedCount: updateVotedCountQuery,
} as const satisfies RhymixCommentQueryDefinitionMap

export type CommentQueryId = keyof typeof COMMENT_QUERY_DEFINITIONS

export type CommentQueryDefinition = (typeof COMMENT_QUERY_DEFINITIONS)[CommentQueryId]
