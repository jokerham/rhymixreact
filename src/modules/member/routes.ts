import { createElement, lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const LoginPage = lazy(() => import('./views/LoginPage'))
const SignUpPage = lazy(() => import('./views/SignUpPage'))
const FindAccountPage = lazy(() => import('./views/FindAccountPage'))
const MemberProfilePage = lazy(() => import('./views/MemberProfilePage'))
const ModifyInfoPage = lazy(() => import('./views/ModifyInfoPage'))
const ModifyPasswordPage = lazy(() => import('./views/ModifyPasswordPage'))
const ModifyEmailPage = lazy(() => import('./views/ModifyEmailPage'))
const MemberLeavePage = lazy(() => import('./views/MemberLeavePage'))
const ActiveLoginsPage = lazy(() => import('./views/ActiveLoginsPage'))
const MyDocumentsPage = lazy(() => import('./views/MyDocumentsPage'))
const MyCommentsPage = lazy(() => import('./views/MyCommentsPage'))
const MySavedPage = lazy(() => import('./views/MySavedPage'))
const MyScrappedPage = lazy(() => import('./views/MyScrappedPage'))

export const memberRoutes: RouteObject[] = [
  // Guest only
  { path: 'member/login', element: createElement(LoginPage) },
  { path: 'member/signup', element: createElement(SignUpPage) },
  { path: 'member/find-account', element: createElement(FindAccountPage) },

  // Public
  { path: 'member/:memberSrl', element: createElement(MemberProfilePage) },

  // Auth required
  { path: 'member/modify', element: createElement(ModifyInfoPage) },
  { path: 'member/modify/password', element: createElement(ModifyPasswordPage) },
  { path: 'member/modify/email', element: createElement(ModifyEmailPage) },
  { path: 'member/leave', element: createElement(MemberLeavePage) },
  { path: 'member/active-logins', element: createElement(ActiveLoginsPage) },
  { path: 'member/my/documents', element: createElement(MyDocumentsPage) },
  { path: 'member/my/comments', element: createElement(MyCommentsPage) },
  { path: 'member/my/saved', element: createElement(MySavedPage) },
  { path: 'member/my/scrapped', element: createElement(MyScrappedPage) },
]
