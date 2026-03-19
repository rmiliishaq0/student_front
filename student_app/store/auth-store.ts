import { create } from "zustand"
import * as z from "zod"; 
import { formSchema } from "@/utils/schemas";


const schema = formSchema.extend({score:z.number(),isPredict:z.boolean()})
type User = {
  id: string
  email: string
  predictData:z.infer<typeof schema>
}
type AuthState = {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) =>
    set({
      user,
      isAuthenticated: true,
    }),

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}))