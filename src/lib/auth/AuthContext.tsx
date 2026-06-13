/* eslint-disable react-refresh/only-export-components */
import { type User, onAuthStateChanged } from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'

import type { MemberDocument } from '../../modules/member/schema/member'
import { getMemberByEmail } from '../../modules/member/services/getMemberByEmail'
import { auth } from '../firebase'

type AuthContextValue = {
  user: User | null
  member: MemberDocument | null
  isAdmin: boolean
  isLoading: boolean
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  member: null,
  isAdmin: false,
  isLoading: true,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [member, setMember] = useState<MemberDocument | null>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    return onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser)
      if (firebaseUser && firebaseUser.email) {
        try {
          const memberData = await getMemberByEmail(firebaseUser.email)
          setMember(memberData)
          setIsAdmin(memberData?.moderation?.isAdmin ?? false)
        } catch (error) {
          console.error('[AuthContext] Error fetching member info:', error)
          setMember(null)
          setIsAdmin(false)
        }
      } else {
        setMember(null)
        setIsAdmin(false)
      }
      setIsLoading(false)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user, member, isAdmin, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  return useContext(AuthContext)
}
