"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import { useEffect } from "react"
import { useAuthStore } from "@/store/auth-store"

export function Providers({ children }: { children: React.ReactNode }) {
  const {setUser} = useAuthStore()
  useEffect(() => {
  async function loadUser() {
    const res = await fetch("/api/check", {
      credentials: "include",
    })

    if (res.ok) {
      const data = await res.json()
      setUser(data.user)
    }
  }

  loadUser()
}, [])
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
    
  )
}