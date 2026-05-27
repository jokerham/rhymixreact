import { deleteNcenterliteUserSettingDataQuery } from './delete-ncenterlite-user-setting-data'
import { deleteNotifyAllQuery } from './delete-notify-all'
import { deleteNotifyByMemberSrlQuery } from './delete-notify-by-member-srl'
import { deleteNotifyBySrlQuery } from './delete-notify-by-srl'
import { deleteNotifyByTargetTypeQuery } from './delete-notify-by-target-type'
import { deleteNotifyTypeQuery } from './delete-notify-type'
import { deleteUnsubscribeQuery } from './delete-unsubscribe'
import { getAdminNotifyListQuery } from './get-admin-notify-list'
import { getAllUserConfigQuery } from './get-all-user-config'
import { getCountNewMessageQuery } from './get-count-new-message'
import { getDispNotifyListQuery } from './get-disp-notify-list'
import { getMemberAdminsQuery } from './get-member-admins'
import { getMemberSrlByIdQuery } from './get-member-srl-by-id'
import { getMemberSrlByNickNameQuery } from './get-member-srl-by-nick-name'
import { getMemberTotalsQuery } from './get-member-totals'
import { getNotifyQuery } from './get-notify'
import { getNotifyListQuery } from './get-notify-list'
import { getNotifyListByCommentSrlQuery } from './get-notify-list-by-comment-srl'
import { getNotifyListByDocumentSrlQuery } from './get-notify-list-by-document-srl'
import { getNotifyMemberSrlBySrlQuery } from './get-notify-member-srl-by-srl'
import { getNotifyNewCountQuery } from './get-notify-new-count'
import { getNotifyTypeQuery } from './get-notify-type'
import { getNotifyTypeAdminListQuery } from './get-notify-type-admin-list'
import { getNotifyTypeByIDQuery } from './get-notify-type-by-id'
import { getOtherCommentByMemberSrlQuery } from './get-other-comment-by-member-srl'
import { getUnsubscribeListQuery } from './get-unsubscribe-list'
import { getUserConfigQuery } from './get-user-config'
import { getUserUnsubscribeConfigByTargetSrlQuery } from './get-user-unsubscribe-config-by-target-srl'
import { getUserUnsubscribeConfigByUnsubscribeSrlQuery } from './get-user-unsubscribe-config-by-unsubscribe-srl'
import { insertNotifyQuery } from './insert-notify'
import { insertNotifyTypeQuery } from './insert-notify-type'
import { insertUnsubscribeQuery } from './insert-unsubscribe'
import { insertUserConfigQuery } from './insert-user-config'
import type { RhymixNotificationQueryDefinitionMap } from './types'
import { updateNotifyReadedQuery } from './update-notify-readed'
import { updateNotifyReadedAllQuery } from './update-notify-readed-all'
import { updateNotifyReadedBySrlQuery } from './update-notify-readed-by-srl'
import { updateNotifyReadedByTargetSrlQuery } from './update-notify-readed-by-target-srl'
import { updateNotifyReadedByTypeQuery } from './update-notify-readed-by-type'
import { updateUserConfigQuery } from './update-user-config'

export const NOTIFICATION_QUERY_DEFINITIONS = {
  deleteNcenterliteUserSettingData: deleteNcenterliteUserSettingDataQuery,
  deleteNotifyAll: deleteNotifyAllQuery,
  deleteNotifyByMemberSrl: deleteNotifyByMemberSrlQuery,
  deleteNotifyBySrl: deleteNotifyBySrlQuery,
  deleteNotifyByTargetType: deleteNotifyByTargetTypeQuery,
  deleteNotifyType: deleteNotifyTypeQuery,
  deleteUnsubscribe: deleteUnsubscribeQuery,
  getAdminNotifyList: getAdminNotifyListQuery,
  getAllUserConfig: getAllUserConfigQuery,
  getCountNewMessage: getCountNewMessageQuery,
  getDispNotifyList: getDispNotifyListQuery,
  getMemberAdmins: getMemberAdminsQuery,
  getMemberSrlById: getMemberSrlByIdQuery,
  getMemberSrlByNickName: getMemberSrlByNickNameQuery,
  getMemberTotals: getMemberTotalsQuery,
  getNotify: getNotifyQuery,
  getNotifyList: getNotifyListQuery,
  getNotifyListByCommentSrl: getNotifyListByCommentSrlQuery,
  getNotifyListByDocumentSrl: getNotifyListByDocumentSrlQuery,
  getNotifyMemberSrlBySrl: getNotifyMemberSrlBySrlQuery,
  getNotifyNewCount: getNotifyNewCountQuery,
  getNotifyType: getNotifyTypeQuery,
  getNotifyTypeAdminList: getNotifyTypeAdminListQuery,
  getNotifyTypeByID: getNotifyTypeByIDQuery,
  getOtherCommentByMemberSrl: getOtherCommentByMemberSrlQuery,
  getUnsubscribeList: getUnsubscribeListQuery,
  getUserConfig: getUserConfigQuery,
  getUserUnsubscribeConfigByTargetSrl: getUserUnsubscribeConfigByTargetSrlQuery,
  getUserUnsubscribeConfigByUnsubscribeSrl: getUserUnsubscribeConfigByUnsubscribeSrlQuery,
  insertNotify: insertNotifyQuery,
  insertNotifyType: insertNotifyTypeQuery,
  insertUnsubscribe: insertUnsubscribeQuery,
  insertUserConfig: insertUserConfigQuery,
  updateNotifyReaded: updateNotifyReadedQuery,
  updateNotifyReadedAll: updateNotifyReadedAllQuery,
  updateNotifyReadedBySrl: updateNotifyReadedBySrlQuery,
  updateNotifyReadedByTargetSrl: updateNotifyReadedByTargetSrlQuery,
  updateNotifyReadedByType: updateNotifyReadedByTypeQuery,
  updateUserConfig: updateUserConfigQuery,
} as const satisfies RhymixNotificationQueryDefinitionMap

export type NotificationQueryId = keyof typeof NOTIFICATION_QUERY_DEFINITIONS

export type NotificationQueryDefinition =
  (typeof NOTIFICATION_QUERY_DEFINITIONS)[NotificationQueryId]
