import { create, type StoreApi } from 'zustand'
import { onAuthStateChanged, type User } from 'firebase/auth'
import { auth } from '../lib/firebase'

interface AuthState {
  user: User | null
  memberSrl: number | null
  isAdmin: boolean
  isLoading: boolean
  setUser: (user: User | null) => void
  setMember: (srl: number, isAdmin: boolean) => void
}

export const useAuthStore = create<AuthState>((set: StoreApi<AuthState>['setState']) => ({
  user: null,
  memberSrl: null,
  isAdmin: false,
  isLoading: true,
  setUser: (user: User | null) => set({ user, isLoading: false }),
  setMember: (memberSrl: number, isAdmin: boolean) => set({ memberSrl, isAdmin }),
}))

onAuthStateChanged(auth, user => {
  useAuthStore.getState().setUser(user)
})
