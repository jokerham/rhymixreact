export const MEMBER_COLLECTIONS = {
  members: 'members',
  memberGroups: 'memberGroups',
  memberMemberships: 'memberMemberships',
  authMailTokens: 'authMailTokens',
  authSmsCodes: 'authSmsCodes',
  uniqueUserIds: 'uniqueUserIds',
  uniqueEmails: 'uniqueEmails',
  uniquePhones: 'uniquePhones',
  uniqueNicknames: 'uniqueNicknames',
  uniqueDeviceTokens: 'uniqueDeviceTokens',
  deniedUserIds: 'deniedUserIds',
  deniedNicknames: 'deniedNicknames',
  managedEmailHosts: 'managedEmailHosts',
  memberJoinForms: 'memberJoinForms',
  memberLoginCounts: 'memberLoginCounts',
  memberCountHistory: 'memberCountHistory',
} as const

export const MEMBER_SUBCOLLECTIONS = {
  devices: 'devices',
  agreements: 'agreements',
  nicknameLogs: 'nicknameLogs',
  scrapFolders: 'scrapFolders',
  scraps: 'scraps',
  groupMembers: 'members',
} as const

export type MemberCollectionName =
  (typeof MEMBER_COLLECTIONS)[keyof typeof MEMBER_COLLECTIONS]

export type MemberSubcollectionName =
  (typeof MEMBER_SUBCOLLECTIONS)[keyof typeof MEMBER_SUBCOLLECTIONS]

export const getMemberPath = (memberId: string) =>
  `${MEMBER_COLLECTIONS.members}/${memberId}`

export const getMemberDevicePath = (memberId: string, deviceId: string) =>
  `${getMemberPath(memberId)}/${MEMBER_SUBCOLLECTIONS.devices}/${deviceId}`

export const getMemberAgreementPath = (memberId: string, agreementId: string) =>
  `${getMemberPath(memberId)}/${MEMBER_SUBCOLLECTIONS.agreements}/${agreementId}`

export const getMemberNicknameLogPath = (memberId: string, logId: string) =>
  `${getMemberPath(memberId)}/${MEMBER_SUBCOLLECTIONS.nicknameLogs}/${logId}`

export const getMemberScrapFolderPath = (memberId: string, folderId: string) =>
  `${getMemberPath(memberId)}/${MEMBER_SUBCOLLECTIONS.scrapFolders}/${folderId}`

export const getMemberScrapPath = (memberId: string, documentId: string) =>
  `${getMemberPath(memberId)}/${MEMBER_SUBCOLLECTIONS.scraps}/${documentId}`

export const getMemberGroupPath = (groupId: string) =>
  `${MEMBER_COLLECTIONS.memberGroups}/${groupId}`

export const getMemberGroupMemberPath = (groupId: string, memberId: string) =>
  `${getMemberGroupPath(groupId)}/${MEMBER_SUBCOLLECTIONS.groupMembers}/${memberId}`
