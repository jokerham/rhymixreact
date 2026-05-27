# Rhymix React — Routing Guide

> Based on Rhymix CMS module actions extracted from `/modules/*/conf/module.xml`.  
> Router: **react-router-dom v7** (already installed)

---

## Table of Contents

1. [Overview](#overview)
2. [URL Design Principle](#url-design-principle)
3. [Dynamic Module Resolver](#dynamic-module-resolver)
4. [Full Route Table](#full-route-table)
   - [Core / Home](#core--home)
   - [Board Routes](#board-routes)
   - [Document Routes](#document-routes)
   - [Member Routes](#member-routes)
   - [Communication Routes](#communication-routes)
   - [Notification Routes](#notification-routes)
   - [Search & Feed Routes](#search--feed-routes)
   - [Admin Routes](#admin-routes)
5. [Route Guards](#route-guards)
6. [Suggested Router Setup](#suggested-router-setup)

---

## Overview

Rhymix CMS uses an **act-based routing system** where every page is identified by an `act` parameter (e.g. `dispBoardContentList`). Action names follow the pattern:

| Prefix | Purpose | React equivalent |
|--------|---------|-----------------|
| `disp*` | Display a page (GET) | A `<Route>` with a page component |
| `proc*` | Process a form (POST) | An API call / form submit handler |
| `get*`  | Fetch data (AJAX GET) | A query function / data loader |

For the React frontend, only `disp*` actions map to routes. `proc*` and `get*` become API calls.

---

## URL Design Principle

Rhymix identifies content by `mid` (module instance ID — e.g. `freeboard`, `notice`) and `document_srl` (numeric document ID).

The React router adopts **clean semantic URLs** instead of query strings:

```
Rhymix (original):   /?mid=freeboard&act=dispBoardContentView&document_srl=42
React (clean URL):   /freeboard/42
```

The most important dynamic segment is `/:mid`, which resolves to different module types (board, page, etc.) at runtime.

---

## Dynamic Module Resolver

Because `/:mid` can point to a **board** or a **static page** (or any future module), a resolver component is needed:

```tsx
// src/pages/ModuleResolver.tsx
import { useParams } from 'react-router-dom';
import { useModuleType } from '@/hooks/useModuleType';
import BoardPage from '@/pages/board/BoardPage';
import StaticPage from '@/pages/page/StaticPage';
import NotFound from '@/pages/NotFound';

export default function ModuleResolver() {
  const { mid } = useParams<{ mid: string }>();
  const { data: moduleType, isLoading } = useModuleType(mid);

  if (isLoading) return <LoadingSpinner />;
  if (moduleType === 'board') return <BoardPage />;
  if (moduleType === 'page')  return <StaticPage />;
  return <NotFound />;
}
```

`useModuleType(mid)` calls the Rhymix API to determine which module is assigned to the given `mid`.

---

## Full Route Table

### Core / Home

| Path | Rhymix Action | Component | Notes |
|------|--------------|-----------|-------|
| `/` | `dispPageIndex` | `<HomePage />` | Main landing page |
| `/404` | `dispBoardNotFound` / `dispPageNotFound` | `<NotFound />` | Catch-all not found |

---

### Board Routes

| Path | Rhymix Action | Component | Notes |
|------|--------------|-----------|-------|
| `/:mid` | `dispBoardContentList` | `<ModuleResolver />` | Board list OR static page |
| `/:mid/write` | `dispBoardWrite` | `<BoardWritePage />` | Create new post |
| `/:mid/category/:categorySrl` | `dispBoardCategory` | `<BoardCategoryPage />` | Filter by category |
| `/:mid/tags` | `dispBoardTagList` | `<BoardTagListPage />` | Tag listing |
| `/:mid/notices` | `dispBoardNoticeList` | `<BoardNoticePage />` | Notice posts only |
| `/:mid/:documentSrl` | `dispBoardContentView` | `<BoardPostPage />` | Post detail view |
| `/:mid/:documentSrl/edit` | *(edit act)* | `<BoardEditPage />` | Edit existing post |
| `/:mid/:documentSrl/print` | `dispDocumentPrint` | `<DocumentPrintPage />` | Printable view |
| `/:mid/:documentSrl/preview` | `dispDocumentPreview` | `<DocumentPreviewPage />` | Preview before publish |
| `/:mid/:documentSrl/comments` | `dispBoardContentCommentList` | `<CommentListPage />` | Comment list (paginated) |
| `/:mid/:documentSrl/update-log` | `dispBoardUpdateLog` | `<UpdateLogPage />` | Edit history log |
| `/:mid/:documentSrl/update-log/:logSrl` | `dispBoardUpdateLogView` | `<UpdateLogViewPage />` | Specific log entry |
| `/:mid/:documentSrl/vote-log` | `dispBoardVoteLog` | `<VoteLogPage />` | Who voted on this post |

---

### Document Routes

| Path | Rhymix Action | Component | Notes |
|------|--------------|-----------|-------|
| `/document/temp-saved` | `dispTempSavedList` | `<TempSavedPage />` | Auto-saved drafts |
| `/document/declare` | `dispDocumentDeclare` | `<DeclarePage />` | Report/declare a document |

---

### Member Routes

#### Authentication

| Path | Rhymix Action | Component | Guard |
|------|--------------|-----------|-------|
| `/member/login` | `dispMemberLoginForm` | `<LoginPage />` | Guest only |
| `/member/signup` | `dispMemberSignUpForm` | `<SignUpPage />` | Guest only |
| `/member/find-account` | `dispMemberFindAccount` | `<FindAccountPage />` | Guest only |
| `/member/logout` | `dispMemberLogout` | *(redirect)* | Auth required |

#### Profile & Settings

| Path | Rhymix Action | Component | Guard |
|------|--------------|-----------|-------|
| `/member/:memberSrl` | `dispMemberInfo` | `<MemberProfilePage />` | Public |
| `/member/modify` | `dispMemberModifyInfo` | `<ModifyInfoPage />` | Auth required |
| `/member/modify/password` | `dispMemberModifyPassword` | `<ModifyPasswordPage />` | Auth required |
| `/member/modify/email` | `dispMemberModifyEmailAddress` | `<ModifyEmailPage />` | Auth required |
| `/member/modify/nickname-log` | `dispMemberModifyNicknameLog` | `<NicknameLogPage />` | Auth required |
| `/member/leave` | `dispMemberLeave` | `<MemberLeavePage />` | Auth required |
| `/member/active-logins` | `dispMemberActiveLogins` | `<ActiveLoginsPage />` | Auth required |

#### My Activity

| Path | Rhymix Action | Component | Guard |
|------|--------------|-----------|-------|
| `/member/my/documents` | `dispMemberOwnDocument` | `<MyDocumentsPage />` | Auth required |
| `/member/my/comments` | `dispMemberOwnComment` | `<MyCommentsPage />` | Auth required |
| `/member/my/saved` | `dispMemberSavedDocument` | `<MySavedPage />` | Auth required |
| `/member/my/scrapped` | `dispMemberScrappedDocument` | `<MyScrappedPage />` | Auth required |

---

### Communication Routes

| Path | Rhymix Action | Component | Guard |
|------|--------------|-----------|-------|
| `/communication/friends` | `dispCommunicationFriend` | `<FriendsPage />` | Auth required |
| `/communication/friends/add` | `dispCommunicationAddFriend` | `<AddFriendPage />` | Auth required |
| `/communication/messages` | `dispCommunicationMessageBoxList` | `<MessageBoxPage />` | Auth required |
| `/communication/messages/new` | `dispCommunicationNewMessage` | `<NewMessagePage />` | Auth required |
| `/communication/messages/send` | `dispCommunicationSendMessage` | `<SendMessagePage />` | Auth required |
| `/communication/messages/:boxSrl` | `dispCommunicationMessages` | `<MessageThreadPage />` | Auth required |
| `/message` | `dispMessage` | `<SystemMessagePage />` | Auth required |

---

### Notification Routes

| Path | Rhymix Action | Component | Guard |
|------|--------------|-----------|-------|
| `/notifications` | `dispNcenterliteNotifyList` | `<NotificationListPage />` | Auth required |
| `/notifications/unsubscribe` | `dispNcenterliteUnsubscribeList` | `<UnsubscribeListPage />` | Auth required |
| `/notifications/unsubscribe/add` | `dispNcenterliteInsertUnsubscribe` | `<AddUnsubscribePage />` | Auth required |
| `/notifications/config` | `dispNcenterliteUserConfig` | `<NotificationConfigPage />` | Auth required |

---

### Search & Feed Routes

| Path | Rhymix Action | Component | Notes |
|------|--------------|-----------|-------|
| `/search` | `IS` (integration_search) | `<SearchPage />` | Query via `?q=` param |
| `/rss` | `rss` | *(proxy / redirect)* | Served by Rhymix backend |
| `/atom` | `atom` | *(proxy / redirect)* | Served by Rhymix backend |

---

### Admin Routes

> Admin routes live under `/admin` and should be wrapped in a separate admin layout with strict permission checks.

| Path | Rhymix Action | Notes |
|------|--------------|-------|
| `/admin` | `dispAdminIndex` | Admin dashboard |
| `/admin/config` | `dispAdminConfigGeneral` | General settings |
| `/admin/config/seo` | `dispAdminConfigSEO` | SEO settings |
| `/admin/config/security` | `dispAdminConfigSecurity` | Security settings |
| `/admin/members` | `dispMemberAdminList` | Member management |
| `/admin/members/:memberSrl` | `dispMemberAdminInfo` | Member detail |
| `/admin/members/insert` | `dispMemberAdminInsert` | Add member |
| `/admin/members/groups` | `dispMemberAdminGroupList` | Group management |
| `/admin/board/:mid` | `dispBoardAdminContent` | Board management |
| `/admin/board/:mid/info` | `dispBoardAdminBoardInfo` | Board settings |
| `/admin/board/:mid/skin` | `dispBoardAdminSkinInfo` | Skin settings |
| `/admin/board/:mid/grants` | `dispBoardAdminGrantInfo` | Permission settings |
| `/admin/documents` | `dispDocumentAdminList` | Document management |
| `/admin/documents/declared` | `dispDocumentAdminDeclared` | Reported documents |
| `/admin/documents/trash` | `dispDocumentAdminTrashList` | Trash |
| `/admin/comments` | `dispCommentAdminList` | Comment management |
| `/admin/comments/declared` | `dispCommentAdminDeclared` | Reported comments |
| `/admin/files` | `dispFileAdminList` | File management |
| `/admin/layout` | `dispLayoutAdminInstalledList` | Layout management |
| `/admin/layout/:layoutSrl/edit` | `dispLayoutAdminEdit` | Edit layout |
| `/admin/menu` | `dispMenuAdminSiteMap` | Site map / menu |
| `/admin/modules` | `dispModuleAdminContent` | Module management |
| `/admin/trash` | `dispTrashAdminList` | Trash management |
| `/admin/poll` | `dispPollAdminList` | Poll management |
| `/admin/point` | `dispPointAdminPointList` | Point management |
| `/admin/notifications` | `dispNcenterliteAdminList` | Notification management |
| `/admin/spamfilter` | `dispSpamfilterAdminDeniedIPList` | Spam filter |

---

## Route Guards

Three guard levels are needed:

```
GuestGuard     → Redirect to home if already logged in (login, signup pages)
AuthGuard      → Redirect to /member/login if not logged in
AdminGuard     → Redirect to / if not an admin
BoardGuard     → Check board-level ACL for write/edit actions
```

```tsx
// src/guards/AuthGuard.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';

export function AuthGuard() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/member/login" replace />;
}

export function GuestGuard() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  return isLoggedIn ? <Navigate to="/" replace /> : <Outlet />;
}
```

---

## Suggested Router Setup

```tsx
// src/App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [

      // ── Core ────────────────────────────────────────────
      { index: true, element: <HomePage /> },

      // ── Member — Guest only ──────────────────────────────
      {
        element: <GuestGuard />,
        children: [
          { path: 'member/login',        element: <LoginPage /> },
          { path: 'member/signup',       element: <SignUpPage /> },
          { path: 'member/find-account', element: <FindAccountPage /> },
        ],
      },

      // ── Member — Auth required ───────────────────────────
      {
        element: <AuthGuard />,
        children: [
          { path: 'member/modify',           element: <ModifyInfoPage /> },
          { path: 'member/modify/password',  element: <ModifyPasswordPage /> },
          { path: 'member/modify/email',     element: <ModifyEmailPage /> },
          { path: 'member/leave',            element: <MemberLeavePage /> },
          { path: 'member/active-logins',    element: <ActiveLoginsPage /> },
          { path: 'member/my/documents',     element: <MyDocumentsPage /> },
          { path: 'member/my/comments',      element: <MyCommentsPage /> },
          { path: 'member/my/saved',         element: <MySavedPage /> },
          { path: 'member/my/scrapped',      element: <MyScrappedPage /> },
          { path: 'document/temp-saved',     element: <TempSavedPage /> },
          { path: 'communication/friends',          element: <FriendsPage /> },
          { path: 'communication/messages',         element: <MessageBoxPage /> },
          { path: 'communication/messages/new',     element: <NewMessagePage /> },
          { path: 'communication/messages/:boxSrl', element: <MessageThreadPage /> },
          { path: 'notifications',              element: <NotificationListPage /> },
          { path: 'notifications/config',       element: <NotificationConfigPage /> },
          { path: 'notifications/unsubscribe',  element: <UnsubscribeListPage /> },
        ],
      },

      // ── Member — Public profile ──────────────────────────
      { path: 'member/:memberSrl', element: <MemberProfilePage /> },

      // ── Search ──────────────────────────────────────────
      { path: 'search', element: <SearchPage /> },

      // ── Admin (separate layout + AdminGuard) ─────────────
      {
        path: 'admin',
        element: <AdminGuard />,
        children: [
          { index: true,                  element: <AdminDashboard /> },
          { path: 'members',              element: <AdminMemberListPage /> },
          { path: 'members/:memberSrl',   element: <AdminMemberInfoPage /> },
          { path: 'board/:mid',           element: <AdminBoardPage /> },
          { path: 'documents',            element: <AdminDocumentListPage /> },
          { path: 'comments',             element: <AdminCommentListPage /> },
          // ... more admin routes
        ],
      },

      // ── Dynamic module (board / page) ── MUST be last ────
      {
        path: ':mid',
        element: <ModuleResolver />,
        children: [
          { index: true,                             element: <BoardContentList /> },
          { path: 'write',                           element: <BoardWritePage /> },
          { path: 'notices',                         element: <BoardNoticePage /> },
          { path: 'tags',                            element: <BoardTagListPage /> },
          { path: 'category/:categorySrl',           element: <BoardCategoryPage /> },
          { path: ':documentSrl',                    element: <BoardPostPage /> },
          { path: ':documentSrl/edit',               element: <BoardEditPage /> },
          { path: ':documentSrl/print',              element: <DocumentPrintPage /> },
          { path: ':documentSrl/preview',            element: <DocumentPreviewPage /> },
          { path: ':documentSrl/comments',           element: <CommentListPage /> },
          { path: ':documentSrl/update-log',         element: <UpdateLogPage /> },
          { path: ':documentSrl/update-log/:logSrl', element: <UpdateLogViewPage /> },
          { path: ':documentSrl/vote-log',           element: <VoteLogPage /> },
        ],
      },

      // ── 404 ─────────────────────────────────────────────
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

---

## Notes

- **`/:mid` must be the last route** among siblings so that named paths like `/member/*`, `/search`, `/admin` are matched first.
- **`/rss` and `/atom`** are best handled as backend-passthrough routes (Rhymix serves them directly) — you may proxy them via Vite's `server.proxy` in dev.
- **`document_srl`** in `/:mid/:documentSrl` is always a **number** — validate with a loader or `useEffect` and redirect to `/404` if it's not numeric.
- Dynamic `categorySrl`, `boxSrl`, `logSrl`, `memberSrl` follow the same numeric convention.
