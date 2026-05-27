import { deleteMemberGroupQuery } from './delete-member-group'
import { getCommentPointQuery } from './get-comment-point'
import { getCommentUsersQuery } from './get-comment-users'
import { getDocumentPointQuery } from './get-document-point'
import { getFilePointQuery } from './get-file-point'
import { getMemberCountQuery } from './get-member-count'
import { getMemberGroupMemberQuery } from './get-member-group-member'
import { getMemberListQuery } from './get-member-list'
import { getMemberListWithinGroupQuery } from './get-member-list-within-group'
import { getPointQuery } from './get-point'
import { getPointCountQuery } from './get-point-count'
import { initMemberPointQuery } from './init-member-point'
import { insertPointQuery } from './insert-point'
import type { RhymixPointQueryDefinitionMap } from './types'
import { updatePointQuery } from './update-point'

export const POINT_QUERY_DEFINITIONS = {
  deleteMemberGroup: deleteMemberGroupQuery,
  getCommentPoint: getCommentPointQuery,
  getCommentUsers: getCommentUsersQuery,
  getDocumentPoint: getDocumentPointQuery,
  getFilePoint: getFilePointQuery,
  getMemberCount: getMemberCountQuery,
  getMemberGroupMember: getMemberGroupMemberQuery,
  getMemberList: getMemberListQuery,
  getMemberListWithinGroup: getMemberListWithinGroupQuery,
  getPoint: getPointQuery,
  getPointCount: getPointCountQuery,
  initMemberPoint: initMemberPointQuery,
  insertPoint: insertPointQuery,
  updatePoint: updatePointQuery,
} as const satisfies RhymixPointQueryDefinitionMap

export type PointQueryId = keyof typeof POINT_QUERY_DEFINITIONS

export type PointQueryDefinition = (typeof POINT_QUERY_DEFINITIONS)[PointQueryId]
