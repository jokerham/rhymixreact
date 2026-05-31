import { addMemberToGroupQuery } from './add-member-to-group'
import { addScrapDocumentQuery } from './add-scrap-document'
import { changeGroupQuery } from './change-group'
import { chkAuthMailQuery } from './chk-auth-mail'
import { chkAuthSmsQuery } from './chk-auth-sms'
import { chkDeniedIDQuery } from './chk-denied-id'
import { chkDeniedNickNameQuery } from './chk-denied-nick-name'
import { deleteAgreedQuery } from './delete-agreed'
import { deleteAuthChangeEmailAddressQuery } from './delete-auth-change-email-address'
import { deleteAuthMailQuery } from './delete-auth-mail'
import { deleteDeniedIDQuery } from './delete-denied-id'
import { deleteDeniedNickNameQuery } from './delete-denied-nick-name'
import { deleteGroupQuery } from './delete-group'
import { deleteJoinFormQuery } from './delete-join-form'
import { deleteLoginCountByIpQuery } from './delete-login-count-by-ip'
import { deleteLoginCountHistoryByMemberSrlQuery } from './delete-login-count-history-by-member-srl'
import { deleteManagedEmailHostQuery } from './delete-managed-email-host'
import { deleteMemberQuery } from './delete-member'
import { deleteMemberDeviceQuery } from './delete-member-device'
import { deleteMemberGroupQuery } from './delete-member-group'
import { deleteMemberGroupMemberQuery } from './delete-member-group-member'
import { deleteMemberModifyNickNameLogQuery } from './delete-member-modify-nick-name-log'
import { deleteMembersGroupQuery } from './delete-members-group'
import { deleteScrapDocumentQuery } from './delete-scrap-document'
import { deleteScrapDocumentByDocumentSrlQuery } from './delete-scrap-document-by-document-srl'
import { deleteScrapFolderQuery } from './delete-scrap-folder'
import { deleteSiteGroupQuery } from './delete-site-group'
import { getAdminGroupQuery } from './get-admin-group'
import { getAdminsQuery } from './get-admins'
import { getAuthMailQuery } from './get-auth-mail'
import { getAuthMailInfoQuery } from './get-auth-mail-info'
import { getAuthMailTypeQuery } from './get-auth-mail-type'
import { getDefaultGroupQuery } from './get-default-group'
import { getDeniedAndStatusQuery } from './get-denied-and-status'
import { getDeniedIDListQuery } from './get-denied-idlist'
import { getDeniedIDsQuery } from './get-denied-ids'
import { getDeniedNickNamesQuery } from './get-denied-nick-names'
import { getGroupQuery } from './get-group'
import { getGroupsQuery } from './get-groups'
import { getJoinFormQuery } from './get-join-form'
import { getJoinFormListQuery } from './get-join-form-list'
import { getLoginCountByIpQuery } from './get-login-count-by-ip'
import { getLoginCountHistoryByMemberSrlQuery } from './get-login-count-history-by-member-srl'
import { getManagedEmailHostsQuery } from './get-managed-email-hosts'
import { getMemberCountByDateQuery } from './get-member-count-by-date'
import { getMemberCountByPhoneCountryQuery } from './get-member-count-by-phone-country'
import { getMemberDeviceQuery } from './get-member-device'
import { getMemberDeviceTokensByMemberSrlQuery } from './get-member-device-tokens-by-member-srl'
import { getMemberGroupMemberQuery } from './get-member-group-member'
import { getMemberGroupMemberCountByDateQuery } from './get-member-group-member-count-by-date'
import { getMemberGroupsQuery } from './get-member-groups'
import { getMemberInfoQuery } from './get-member-info'
import { getMemberInfoByEmailAddressQuery } from './get-member-info-by-email-address'
import { getMemberInfoByMemberSrlQuery } from './get-member-info-by-member-srl'
import { getMemberInfoByPhoneNumberQuery } from './get-member-info-by-phone-number'
import { getMemberListQuery } from './get-member-list'
import { getMemberListWithinGroupQuery } from './get-member-list-within-group'
import { getMemberModifyNickNameQuery } from './get-member-modify-nick-name'
import { getMemberSrlQuery } from './get-member-srl'
import { getMembersQuery } from './get-members'
import { getMembersGroupQuery } from './get-members-group'
import { getMembersGroupsQuery } from './get-members-groups'
import { getScrapDocumentQuery } from './get-scrap-document'
import { getScrapDocumentListQuery } from './get-scrap-document-list'
import { getScrapFolderListQuery } from './get-scrap-folder-list'
import { getSiteAdminMemberSrlsQuery } from './get-site-admin-member-srls'
import { getSiteMemberListQuery } from './get-site-member-list'
import { insertAgreedQuery } from './insert-agreed'
import { insertAuthMailQuery } from './insert-auth-mail'
import { insertAuthSmsQuery } from './insert-auth-sms'
import { insertDeniedIDQuery } from './insert-denied-id'
import { insertDeniedNickNameQuery } from './insert-denied-nick-name'
import { insertGroupQuery } from './insert-group'
import { insertJoinFormQuery } from './insert-join-form'
import { insertLoginCountByIpQuery } from './insert-login-count-by-ip'
import { insertLoginCountHistoryByMemberSrlQuery } from './insert-login-count-history-by-member-srl'
import { insertManagedEmailHostQuery } from './insert-managed-email-host'
import { insertMemberQuery } from './insert-member'
import { insertMemberDeviceQuery } from './insert-member-device'
import { insertMemberModifyNickNameQuery } from './insert-member-modify-nick-name'
import { insertScrapFolderQuery } from './insert-scrap-folder'
import type { RhymixMemberQueryDefinitionMap } from './types'
import { updateAllChangePasswordDateQuery } from './update-all-change-password-date'
import { updateAllMemberGroupListOrderQuery } from './update-all-member-group-list-order'
import { updateAuthMailQuery } from './update-auth-mail'
import { updateChangePasswordDateQuery } from './update-change-password-date'
import { updateFindAccountAnswerQuery } from './update-find-account-answer'
import { updateGroupQuery } from './update-group'
import { updateGroupDefaultClearQuery } from './update-group-default-clear'
import { updateJoinFormQuery } from './update-join-form'
import { updateLastLoginQuery } from './update-last-login'
import { updateLoginCountByIpQuery } from './update-login-count-by-ip'
import { updateLoginCountHistoryByMemberSrlQuery } from './update-login-count-history-by-member-srl'
import { updateMemberQuery } from './update-member'
import { updateMemberDeniedInfoQuery } from './update-member-denied-info'
import { updateMemberDeviceQuery } from './update-member-device'
import { updateMemberDeviceLastActiveDateQuery } from './update-member-device-last-active-date'
import { updateMemberEmailAddressQuery } from './update-member-email-address'
import { updateMemberExtraVarsQuery } from './update-member-extra-vars'
import { updateMemberFindQuestionAnswerQuery } from './update-member-find-question-answer'
import { updateMemberGroupListOrderQuery } from './update-member-group-list-order'
import { updateMemberJoinFormListorderQuery } from './update-member-join-form-listorder'
import { updateMemberListOrderAllQuery } from './update-member-list-order-all'
import { updateMemberPasswordQuery } from './update-member-password'
import { updateMemberPhoneCountryQuery } from './update-member-phone-country'
import { updateMemberPhoneNumberQuery } from './update-member-phone-number'
import { updateMemberStatusQuery } from './update-member-status'
import { updateScrapDocumentFolderQuery } from './update-scrap-document-folder'
import { updateScrapFolderQuery } from './update-scrap-folder'
import { updateScrapFolderFromNullQuery } from './update-scrap-folder-from-null'

export const MEMBER_QUERY_DEFINITIONS = {
  addMemberToGroup: addMemberToGroupQuery,
  addScrapDocument: addScrapDocumentQuery,
  changeGroup: changeGroupQuery,
  chkAuthMail: chkAuthMailQuery,
  chkAuthSms: chkAuthSmsQuery,
  chkDeniedID: chkDeniedIDQuery,
  chkDeniedNickName: chkDeniedNickNameQuery,
  deleteAgreed: deleteAgreedQuery,
  deleteAuthChangeEmailAddress: deleteAuthChangeEmailAddressQuery,
  deleteAuthMail: deleteAuthMailQuery,
  deleteDeniedID: deleteDeniedIDQuery,
  deleteDeniedNickName: deleteDeniedNickNameQuery,
  deleteGroup: deleteGroupQuery,
  deleteJoinForm: deleteJoinFormQuery,
  deleteLoginCountByIp: deleteLoginCountByIpQuery,
  deleteLoginCountHistoryByMemberSrl: deleteLoginCountHistoryByMemberSrlQuery,
  deleteManagedEmailHost: deleteManagedEmailHostQuery,
  deleteMember: deleteMemberQuery,
  deleteMemberDevice: deleteMemberDeviceQuery,
  deleteMemberGroup: deleteMemberGroupQuery,
  deleteMemberGroupMember: deleteMemberGroupMemberQuery,
  deleteMemberModifyNickNameLog: deleteMemberModifyNickNameLogQuery,
  deleteMembersGroup: deleteMembersGroupQuery,
  deleteScrapDocument: deleteScrapDocumentQuery,
  deleteScrapDocumentByDocumentSrl: deleteScrapDocumentByDocumentSrlQuery,
  deleteScrapFolder: deleteScrapFolderQuery,
  deleteSiteGroup: deleteSiteGroupQuery,
  getAdminGroup: getAdminGroupQuery,
  getAdmins: getAdminsQuery,
  getAuthMail: getAuthMailQuery,
  getAuthMailInfo: getAuthMailInfoQuery,
  getAuthMailType: getAuthMailTypeQuery,
  getDefaultGroup: getDefaultGroupQuery,
  getDeniedAndStatus: getDeniedAndStatusQuery,
  getDeniedIDList: getDeniedIDListQuery,
  getDeniedIDs: getDeniedIDsQuery,
  getDeniedNickNames: getDeniedNickNamesQuery,
  getGroup: getGroupQuery,
  getGroups: getGroupsQuery,
  getJoinForm: getJoinFormQuery,
  getJoinFormList: getJoinFormListQuery,
  getLoginCountByIp: getLoginCountByIpQuery,
  getLoginCountHistoryByMemberSrl: getLoginCountHistoryByMemberSrlQuery,
  getManagedEmailHosts: getManagedEmailHostsQuery,
  getMemberCountByDate: getMemberCountByDateQuery,
  getMemberCountByPhoneCountry: getMemberCountByPhoneCountryQuery,
  getMemberDevice: getMemberDeviceQuery,
  getMemberDeviceTokensByMemberSrl: getMemberDeviceTokensByMemberSrlQuery,
  getMemberGroupMember: getMemberGroupMemberQuery,
  getMemberGroupMemberCountByDate: getMemberGroupMemberCountByDateQuery,
  getMemberGroups: getMemberGroupsQuery,
  getMemberInfo: getMemberInfoQuery,
  getMemberInfoByEmailAddress: getMemberInfoByEmailAddressQuery,
  getMemberInfoByMemberSrl: getMemberInfoByMemberSrlQuery,
  getMemberInfoByPhoneNumber: getMemberInfoByPhoneNumberQuery,
  getMemberList: getMemberListQuery,
  getMemberListWithinGroup: getMemberListWithinGroupQuery,
  getMemberModifyNickName: getMemberModifyNickNameQuery,
  getMemberSrl: getMemberSrlQuery,
  getMembers: getMembersQuery,
  getMembersGroup: getMembersGroupQuery,
  getMembersGroups: getMembersGroupsQuery,
  getScrapDocument: getScrapDocumentQuery,
  getScrapDocumentList: getScrapDocumentListQuery,
  getScrapFolderList: getScrapFolderListQuery,
  getSiteAdminMemberSrls: getSiteAdminMemberSrlsQuery,
  getSiteMemberList: getSiteMemberListQuery,
  insertAgreed: insertAgreedQuery,
  insertAuthMail: insertAuthMailQuery,
  insertAuthSms: insertAuthSmsQuery,
  insertDeniedID: insertDeniedIDQuery,
  insertDeniedNickName: insertDeniedNickNameQuery,
  insertGroup: insertGroupQuery,
  insertJoinForm: insertJoinFormQuery,
  insertLoginCountByIp: insertLoginCountByIpQuery,
  insertLoginCountHistoryByMemberSrl: insertLoginCountHistoryByMemberSrlQuery,
  insertManagedEmailHost: insertManagedEmailHostQuery,
  insertMember: insertMemberQuery,
  insertMemberDevice: insertMemberDeviceQuery,
  insertMemberModifyNickName: insertMemberModifyNickNameQuery,
  insertScrapFolder: insertScrapFolderQuery,
  updateAllChangePasswordDate: updateAllChangePasswordDateQuery,
  updateAllMemberGroupListOrder: updateAllMemberGroupListOrderQuery,
  updateAuthMail: updateAuthMailQuery,
  updateChangePasswordDate: updateChangePasswordDateQuery,
  updateFindAccountAnswer: updateFindAccountAnswerQuery,
  updateGroup: updateGroupQuery,
  updateGroupDefaultClear: updateGroupDefaultClearQuery,
  updateJoinForm: updateJoinFormQuery,
  updateLastLogin: updateLastLoginQuery,
  updateLoginCountByIp: updateLoginCountByIpQuery,
  updateLoginCountHistoryByMemberSrl: updateLoginCountHistoryByMemberSrlQuery,
  updateMember: updateMemberQuery,
  updateMemberDeniedInfo: updateMemberDeniedInfoQuery,
  updateMemberDevice: updateMemberDeviceQuery,
  updateMemberDeviceLastActiveDate: updateMemberDeviceLastActiveDateQuery,
  updateMemberEmailAddress: updateMemberEmailAddressQuery,
  updateMemberExtraVars: updateMemberExtraVarsQuery,
  updateMemberFindQuestionAnswer: updateMemberFindQuestionAnswerQuery,
  updateMemberGroupListOrder: updateMemberGroupListOrderQuery,
  updateMemberJoinFormListorder: updateMemberJoinFormListorderQuery,
  updateMemberListOrderAll: updateMemberListOrderAllQuery,
  updateMemberPassword: updateMemberPasswordQuery,
  updateMemberPhoneCountry: updateMemberPhoneCountryQuery,
  updateMemberPhoneNumber: updateMemberPhoneNumberQuery,
  updateMemberStatus: updateMemberStatusQuery,
  updateScrapDocumentFolder: updateScrapDocumentFolderQuery,
  updateScrapFolder: updateScrapFolderQuery,
  updateScrapFolderFromNull: updateScrapFolderFromNullQuery,
} as const satisfies RhymixMemberQueryDefinitionMap

export type MemberQueryId = keyof typeof MEMBER_QUERY_DEFINITIONS

export type MemberQueryDefinition = (typeof MEMBER_QUERY_DEFINITIONS)[MemberQueryId]
