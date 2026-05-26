# Firestore 데이터 모델 (전체 컬렉션)

간단한 요약: 컬렉션은 대체로 얕게(flat) 유지하되, 문서 관련 댓글/리비전/투표 등 문맥적 데이터는 문서 하위 컬렉션으로 둡니다. 성능 관점에서 자주 함께 조회되는 필드에 대해 복합 인덱스를 권장합니다.

---

## 전체 컬렉션 목록
- `users` (문서 id = uid)
- `boards`
- `documents` (문서 id = docId)
- `comments` (문서 하위 컬렉션: `documents/{docId}/comments`)
- `files`
- `notifications` (사용자별 하위 컬렉션: `users/{uid}/notifications`)
- `conversations` + `conversations/{convId}/messages`
- `polls` (하위컬렉션 `votes`)
- `points` (이벤트 로그, 선택적으로 `users/{uid}/points`로 집계)
- `tags`

---

## 컬렉션별 스키마

사용되는 타입 표기: `string`, `number`, `boolean`, `timestamp`, `map`, `array`, `ref` (참조 ID)

**users**
- 경로: `users/{uid}`
- 문서 예:
```json
{
  "displayName": "홍길동",
  "email": "hong@example.com",
  "photoURL": "https://...",
  "createdAt": "timestamp",
  "lastSeenAt": "timestamp",
  "roles": { "admin": false, "moderator": false },
  "settings": { "notifications": true },
  "pointsTotal": 1234,
  "tagIds": ["tagA","tagB"]
}
```
- 주용도: 인증된 사용자 정보, 프로필, 집계값(포인트 총합) 저장
- 인덱스: 이메일로 사용자 검색은 Authentication을 사용 권장(별도 인덱스 불필요)

**boards**
- 경로: `boards/{boardId}`
- 문서 예:
```json
{
  "title": "프로젝트 A",
  "description": "...",
  "ownerId": "uid",
  "visibility": "public", // public | private | org
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
  "memberCount": 12
}
```
- 멤버 정보는 `boards/{boardId}/members/{memberId}` 하위컬렉션으로 유지(메타데이터, 롤 포함)
- 이유: 멤버 수가 커질 수 있고, 권한/역할을 개별 문서로 관리하기 위함

**documents**
- 경로: `documents/{docId}` (flat, `boardId` 필드 포함)
- 문서 예:
```json
{
  "title": "문서 제목",
  "ownerId": "uid",
  "boardId": "boardId",
  "excerpt": "첫 문장 요약",
  "tags": ["tagA","tagB"],
  "published": true,
  "permission": { "type": "board|private|custom", "overrides": {} },
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
  "commentCount": 5,
  "fileIds": ["file1","file2"]
}
```
- 문서 관련 자주 조회되는 쿼리: 특정 보드의 문서 목록, 최신 수정 순 정렬, 태그로 필터링
- 설계 결론: `documents`를 최상위 컬렉션으로 두어 보드 간 집계/검색이 쉬움. `boardId`에 복합 인덱스 추가 권장.

하위 컬렉션:
- `documents/{docId}/comments` — 문서 단위 댓글
- `documents/{docId}/revisions` — 버전 히스토리(선택)
- `documents/{docId}/polls` — 문서별 투표(또는 top-level `polls`에 연결)

**comments**
- 경로: `documents/{docId}/comments/{commentId}`
- 문서 예:
```json
{
  "authorId": "uid",
  "content": "댓글 내용",
  "createdAt": "timestamp",
  "editedAt": "timestamp|null",
  "parentId": null, // 스레드일 경우 상위 댓글 id
  "deleted": false,
  "reactions": { "like": 3 }
}
```
- 이유: 댓글은 대부분 문서별로 조회하므로 하위컬렉션이 적합(쿼리는 문서별로 한정)

**files**
- 경로: `files/{fileId}`
- 문서 예:
```json
{
  "ownerId": "uid",
  "storagePath": "gs://...",
  "mimeType": "image/png",
  "size": 12345,
  "createdAt": "timestamp",
  "linkedTo": { "type": "document|comment|board", "id": "..." }
}
```
- 파일 메타데이터는 별도 컬렉션에 두고 실제 바이너리는 Firebase Storage에 저장

**notifications**
- 경로: `users/{uid}/notifications/{notifId}` (사용자별 하위컬렉션)
- 문서 예:
```json
{
  "type": "mention|comment|message|system",
  "payload": {"docId":"...","snippet":"..."},
  "read": false,
  "createdAt": "timestamp",
  "source": {"collection":"documents","id":"docId"}
}
```
- 이유: 사용자 단위로 알림을 조회(미확인 카운트 등)

**conversations / messages**
- 경로: `conversations/{convId}`
- conversation 문서 예:
```json
{
  "participantIds": ["uid1","uid2"],
  "lastMessageAt": "timestamp",
  "unreadCounts": {"uid1": 0, "uid2": 2}
}
```
- 하위컬렉션: `conversations/{convId}/messages/{messageId}`
- message 예:
```json
{
  "senderId": "uid",
  "text": "메시지 텍스트",
  "createdAt": "timestamp",
  "attachments": ["fileId"],
  "readBy": ["uid1"]
}
```
- 이유: 메시지는 대화 단위로 쿼리하며, 하위컬렉션이 자연스러움

**polls**
- 경로 옵션 A: `polls/{pollId}` (top-level) + `polls/{pollId}/votes/{uid}`
- 문서 예:
```json
{
  "question": "어떤 색이 좋은가?",
  "options": [{"id":"o1","label":"빨강"},{"id":"o2","label":"파랑"}],
  "target": {"collection":"documents","id":"docId"},
  "createdAt": "timestamp",
  "createdBy": "uid"
}
```
- 투표는 `votes` 하위컬렉션으로 사용자별 투표 기록을 두어 집계와 변경을 안전하게 처리

**points**
- 경로: `points/{eventId}` 또는 `users/{uid}/points/{eventId}`
- 문서 예:
```json
{
  "userId": "uid",
  "amount": 10,
  "reason": "upvote|accept|system",
  "ref": {"collection":"documents","id":"docId"},
  "createdAt": "timestamp"
}
```
- 총합은 `users/{uid}.pointsTotal`에 집계 필드로 유지(Cloud Function으로 동기화 권장)

**tags**
- 경로: `tags/{tagId}`
- 문서 예:
```json
{
  "name": "react",
  "slug": "react",
  "usageCount": 123
}
```
- 문서에 `tags` 배열을 두고 `array-contains` 쿼리로 태그 검색

---

## 권장 인덱스(예)
- `documents`:
  - composite: `boardId ASC, updatedAt DESC` (보드별 최신 문서 조회)
  - single-field: `tags` (array-contains 쿼리)
- `users/{uid}/notifications`: single-field `read` + `createdAt` 복합 인덱스 (미확인 알림 빠른 조회)
- `conversations/{convId}/messages`: 기본적으로 `createdAt`로 정렬 — 하위컬렉션이므로 별도 복합 인덱스는 일반적으로 불필요
- `points`: `userId ASC, createdAt DESC` (사용자 포인트 이벤트 페이징)

참고: 실제 필요한 복합 인덱스는 앱에서 수행하는 쿼리 패턴에 따라 달라지므로, 앱의 대표 쿼리(리스트, 필터, 정렬)를 먼저 수집한 뒤 인덱스 생성 권장

---

## 설계 결정 요약
- 자주 함께 조회되는 단위(문서-댓글, 대화-메시지)는 하위컬렉션으로 둬서 쿼리 경계(scope)를 명확히 함
- 검색/필터가 필요한 엔티티(document, board 등)는 top-level 컬렉션에 `boardId`/`tags` 같은 필드를 두어 전역 검색이 가능하게 함
- 집계 필드(예: `commentCount`, `memberCount`, `pointsTotal`)는 문서에 유지하되, 정확성은 Cloud Functions 또는 트랜잭션으로 보장
- 텍스트 검색은 Firestore가 약하므로 복잡한 검색이 필요하면 Algolia/Elastic 같은 외부 색인 사용 권장

---

## 다음 단계 제안
- 실제 앱의 주요 쿼리 목록을 제공해 주세요(예: 보드별 문서 리스트, 태그별 검색, 사용자 알림 조회 등). 그에 맞춰 정확한 복합 인덱스 목록과 보안 규칙 초안을 만들어 드립니다.
