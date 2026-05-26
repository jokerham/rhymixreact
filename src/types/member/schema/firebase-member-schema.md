# Firebase Member Schema Recommendation

Source reviewed: `/Applications/XAMPP/xamppfiles/htdocs/rhymix/modules/member/schemas`.

This document maps Rhymix's relational member tables to a Firestore document model. The goal is not a 1:1 table copy. Firestore should model the reads and ownership boundaries: member profile reads, login identity lookups, group membership, device tokens, auth tokens, admin lists, and member-owned scraps.

## Source Tables

Rhymix member schema files reviewed:

- `member`
- `member_group`
- `member_group_member`
- `member_devices`
- `member_agreed`
- `member_auth_mail`
- `member_auth_sms`
- `member_count_history`
- `member_login_count`
- `member_denied_user_id`
- `member_denied_nick_name`
- `member_managed_email_hosts`
- `member_join_form`
- `member_nickname_log`
- `member_scrap`
- `member_scrap_folders`

Important relational constraints:

- `member.member_srl` is the primary member identifier.
- `member.user_id` and `member.email_address` are unique.
- `member.phone_number + phone_country` is treated as a lookup identity.
- `member.nick_name` is checked for duplicate nickname usage in application code.
- `member_group_member` is a many-to-many join table between members and groups.
- `member_devices.device_token` is unique.
- `member_auth_mail.auth_key` is a unique token lookup.
- `member_scrap` is unique by `member_srl + document_srl`.

## Recommended Collection Layout

```text
members/{memberId}
members/{memberId}/devices/{deviceId}
members/{memberId}/agreements/{agreementId}
members/{memberId}/nicknameLogs/{logId}
members/{memberId}/scrapFolders/{folderId}
members/{memberId}/scraps/{documentId}

memberGroups/{groupId}
memberGroups/{groupId}/members/{memberId}

memberMemberships/{siteId_groupId_memberId}

authMailTokens/{authKey}
authSmsCodes/{smsCodeId}
uniqueUserIds/{normalizedUserId}
uniqueEmails/{normalizedEmail}
uniquePhones/{phoneKey}
uniqueNicknames/{normalizedNickname}
uniqueDeviceTokens/{tokenHash}

deniedUserIds/{normalizedUserId}
deniedNicknames/{normalizedNickname}
managedEmailHosts/{emailHost}
memberJoinForms/{formId}
memberLoginCounts/{ipKey}
memberCountHistory/{memberId}
```

Use string document IDs. During migration, the simplest stable mapping is `memberId = String(member_srl)` and `groupId = String(group_srl)`. Keep the numeric Rhymix IDs as fields for compatibility.

## `members/{memberId}`

Canonical member document.

```ts
type MemberDocument = {
  memberSrl: number;
  userId: string;
  normalizedUserId: string;
  emailAddress: string;
  normalizedEmail: string;
  emailId: string;
  emailHost?: string;
  phoneNumber?: string;
  phoneCountry?: string;
  phoneType?: string;
  phoneKey?: string;

  passwordHash: string;
  userName: string;
  nickName: string;
  normalizedNickName: string;

  accountRecovery?: {
    questionId?: number;
    answerHash?: string;
  };

  profile: {
    homepage?: string;
    blog?: string;
    birthday?: string;
    description?: string;
    extraVars?: Record<string, unknown>;
  };

  preferences: {
    allowMailing: boolean;
    allowMessage: boolean;
  };

  moderation: {
    isAdmin: boolean;
    denied: boolean;
    status: 'APPROVED' | 'DENIED' | 'PENDING' | string;
    limitDate?: Timestamp;
  };

  groups: Array<{
    groupId: string;
    groupSrl: number;
    siteSrl: number;
    title: string;
    isAdmin: boolean;
  }>;

  regdate?: Timestamp;
  ipaddress?: string;
  lastLogin?: Timestamp;
  lastLoginIpaddress?: string;
  changePasswordDate?: Timestamp;
  listOrder: number;

  createdAt: Timestamp;
  updatedAt: Timestamp;
};
```

Notes:

- Keep frequently displayed group summaries in `members/{memberId}.groups` for fast profile/session reads.
- Do not use the embedded `groups` array as the only source of truth. Use `memberMemberships` and `memberGroups/{groupId}/members` for group administration and large group listings.
- Store `extra_vars` as a map if it can be parsed safely from Rhymix serialized text. Keep the original raw value in `legacyExtraVarsRaw` only if migration cannot parse it reliably.
- Store password and recovery answers as hashes only. Avoid writing raw reset passwords from `member_auth_mail.new_password` into long-lived member documents.

## Uniqueness Lookup Collections

Firestore has no SQL unique index. Enforce uniqueness with transaction-created lookup documents.

```text
uniqueUserIds/{normalizedUserId}
uniqueEmails/{normalizedEmail}
uniquePhones/{phoneCountry_phoneNumber}
uniqueNicknames/{normalizedNickname}
uniqueDeviceTokens/{tokenHash}
```

Each document should be small:

```ts
type UniqueIdentityDocument = {
  memberId: string;
  memberSrl: number;
  createdAt: Timestamp;
};
```

Create or update these in the same transaction as the member document. For sensitive values such as device tokens, use a stable hash as the document ID and store only the hash unless the plaintext token is required for delivery.

## Groups And Memberships

### `memberGroups/{groupId}`

```ts
type MemberGroupDocument = {
  siteSrl: number;
  groupSrl: number;
  listOrder: number;
  title: string;
  regdate?: Timestamp;
  isDefault: boolean;
  isAdmin: boolean;
  imageMark?: string;
  description?: string;
  memberCount?: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
```

### `memberGroups/{groupId}/members/{memberId}`

Use this subcollection to list members in a group without joining.

```ts
type GroupMemberDocument = {
  memberId: string;
  memberSrl: number;
  siteSrl: number;
  groupId: string;
  groupSrl: number;
  regdate?: Timestamp;

  userId: string;
  userName: string;
  nickName: string;
  emailAddress: string;
  status: string;
  denied: boolean;
  isAdmin: boolean;
  listOrder: number;
};
```

### `memberMemberships/{siteId_groupId_memberId}`

Use this as the canonical many-to-many edge if you need global membership queries and idempotent writes.

```ts
type MemberMembershipDocument = {
  siteSrl: number;
  groupId: string;
  groupSrl: number;
  memberId: string;
  memberSrl: number;
  regdate?: Timestamp;
  createdAt: Timestamp;
};
```

When adding or removing a member from a group, update all three places in a batch or transaction:

- `memberMemberships/{siteId_groupId_memberId}`
- `memberGroups/{groupId}/members/{memberId}`
- `members/{memberId}.groups`

## Devices

### `members/{memberId}/devices/{deviceId}`

```ts
type MemberDeviceDocument = {
  deviceSrl: number;
  memberId: string;
  memberSrl: number;
  deviceTokenHash: string;
  deviceToken?: string;
  deviceTokenType: string;
  deviceKey: string;
  deviceType: string;
  deviceVersion: string;
  deviceModel: string;
  deviceDescription?: string;
  regdate: Timestamp;
  lastActiveDate: Timestamp;
  ipaddress: string;
};
```

Use `uniqueDeviceTokens/{tokenHash}` to enforce one owner per token. If server-side push delivery needs plaintext tokens, restrict reads tightly with security rules and consider keeping plaintext only in server-owned documents.

## Auth And Session Tokens

These should be top-level because most reads start from the token key, not from the member document.

### `authMailTokens/{authKey}`

```ts
type AuthMailTokenDocument = {
  authKey: string;
  memberId: string;
  memberSrl: number;
  userId: string;
  newPasswordHash?: string;
  authType: string;
  isRegister: boolean;
  regdate: Timestamp;
  expiresAt: Timestamp;
  consumedAt?: Timestamp;
};
```

### `authSmsCodes/{smsCodeId}`

```ts
type AuthSmsCodeDocument = {
  memberId?: string;
  memberSrl?: number;
  phoneNumber?: string;
  phoneCountry?: string;
  phoneKey?: string;
  codeHash: string;
  regdate?: Timestamp;
  expiresAt: Timestamp;
  ipaddress?: string;
  consumedAt?: Timestamp;
};
```

## Agreements

### `members/{memberId}/agreements/{agreementId}`

```ts
type MemberAgreementDocument = {
  agreementSequence: number;
  agreed: boolean;
  ipaddress: string;
  regdate: Timestamp;
};
```

Use a deterministic ID such as `${agreementSequence}_${regdateMillis}` if historical agreement changes should be preserved. Use `${agreementSequence}` if only the latest state matters.

## Nickname Logs

### `members/{memberId}/nicknameLogs/{logId}`

```ts
type NicknameLogDocument = {
  memberId: string;
  memberSrl: number;
  beforeNickName: string;
  afterNickName: string;
  userId?: string;
  regdate?: Timestamp;
};
```

If admins need global nickname history searches, use a top-level `memberNicknameLogs/{logId}` collection instead or duplicate a small audit document there.

## Scraps

Rhymix scraps are member-owned and unique by `member_srl + document_srl`, so model them under each member.

### `members/{memberId}/scrapFolders/{folderId}`

```ts
type ScrapFolderDocument = {
  folderSrl: number;
  memberId: string;
  memberSrl: number;
  name?: string;
  regdate?: Timestamp;
  listOrder: number;
};
```

### `members/{memberId}/scraps/{documentId}`

```ts
type ScrapDocumentDocument = {
  memberId: string;
  memberSrl: number;
  documentSrl: number;
  folderId?: string;
  folderSrl?: number;
  title?: string;
  userId?: string;
  userName: string;
  nickName: string;
  targetMemberSrl: number;
  regdate?: Timestamp;
  listOrder: number;
};
```

Use `documentId = String(document_srl)` to preserve the SQL uniqueness rule naturally.

## Admin Configuration Collections

### `deniedUserIds/{normalizedUserId}`

```ts
type DeniedUserIdDocument = {
  userId: string;
  normalizedUserId: string;
  regdate?: Timestamp;
  description?: string;
  listOrder: number;
};
```

### `deniedNicknames/{normalizedNickname}`

```ts
type DeniedNicknameDocument = {
  nickName: string;
  normalizedNickName: string;
  regdate?: Timestamp;
  description?: string;
};
```

### `managedEmailHosts/{emailHost}`

```ts
type ManagedEmailHostDocument = {
  emailHost: string;
  regdate?: Timestamp;
  description?: string;
};
```

### `memberJoinForms/{formId}`

```ts
type MemberJoinFormDocument = {
  memberJoinFormSrl: number;
  columnType: string;
  columnName: string;
  columnTitle: string;
  required: boolean;
  defaultValue?: unknown;
  options?: unknown;
  isActive: boolean;
  description?: string;
  listOrder: number;
  regdate?: Timestamp;
};
```

Parse `default_value` and `options` into structured values if Rhymix stores serialized data. Otherwise keep raw strings with explicit `Raw` suffixes.

## Login Counts And Member Count History

### `memberLoginCounts/{ipKey}`

```ts
type MemberLoginCountDocument = {
  ipaddress: string;
  count: number;
  regdate?: Timestamp;
  lastUpdate?: Timestamp;
};
```

Use a normalized or hashed IP key as the document ID.

### `memberCountHistory/{memberId}`

```ts
type MemberCountHistoryDocument = {
  memberId: string;
  memberSrl: number;
  content: unknown;
  lastUpdate?: Timestamp;
};
```

If `content` is large or append-only, split it into `memberCountHistory/{memberId}/entries/{entryId}` instead of keeping one growing document.

## Query And Index Guidance

Expected Firestore queries:

- Member by ID: direct read `members/{memberId}`.
- Member by user ID/email/phone/nickname: read the corresponding `unique*` lookup document, then read `members/{memberId}`.
- Admin member list: query `members` by `moderation.isAdmin`, `moderation.denied`, `moderation.status`, `regdate`, `lastLogin`, or `listOrder`.
- Group list: query `memberGroups` by `siteSrl`, sorted by `listOrder`.
- Member's groups: direct read from `members/{memberId}.groups`.
- Members in group: query `memberGroups/{groupId}/members`, sorted by `listOrder`.
- Device tokens for members: collection group query on `devices` by `memberSrl`/`memberId` and `deviceTokenType`, or read each member's devices when the member set is small.
- Scraps for a member: query `members/{memberId}/scraps` by `folderId`, sorted by `listOrder` or `regdate`.

Composite indexes likely needed:

```text
members: moderation.status ASC, listOrder ASC
members: moderation.denied ASC, listOrder ASC
members: moderation.isAdmin ASC, listOrder ASC
members: regdate DESC
members: lastLogin DESC
memberGroups: siteSrl ASC, listOrder ASC
memberGroups/{groupId}/members: status ASC, listOrder ASC
members/{memberId}/devices: deviceTokenType ASC, lastActiveDate DESC
members/{memberId}/scraps: folderId ASC, listOrder DESC
```

Firestore cannot replace Rhymix SQL `LIKE` searches over many fields. For admin search across `user_id`, `user_name`, `nick_name`, `email_address`, phone, IP, and `extra_vars`, use one of these:

- exact/prefix fields such as `normalizedUserId`, `normalizedEmail`, `normalizedNickName`, and precomputed search prefixes for small controlled search;
- a dedicated search service such as Algolia, Typesense, Meilisearch, or Elasticsearch for flexible admin search.

## Migration Rules

- Convert Rhymix `Y`/`N` fields to booleans.
- Convert Rhymix date strings to Firestore `Timestamp`.
- Preserve `member_srl`, `group_srl`, `folder_srl`, and `device_srl` numeric values as legacy fields.
- Use deterministic IDs for relational uniqueness:
  - `members/{member_srl}`
  - `memberGroups/{group_srl}`
  - `members/{member_srl}/scraps/{document_srl}`
  - `memberMemberships/{site_srl}_{group_srl}_{member_srl}`
- Use transactions for member creation, email changes, user ID changes, nickname changes, phone changes, and device registration.
- Keep token, password, and SMS collections server-only.

## Final Recommendation

Use `members` as the primary collection, with member-owned subcollections for devices, agreements, nickname logs, folders, and scraps. Use top-level collections for groups, memberships, auth/session tokens, uniqueness lookups, and admin configuration. This preserves Rhymix's identity constraints while avoiding Firestore joins and keeping high-cardinality/history data out of the main member document.
