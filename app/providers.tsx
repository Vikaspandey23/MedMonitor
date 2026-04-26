'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  token: string | null
  setToken: (token: string | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    // Check if token exists in localStorage on mount
    const storedToken = localStorage.getItem('authToken')
    if (storedToken) {
      setToken(storedToken)
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSetToken = (newToken: string | null) => {
    if (newToken) {
      localStorage.setItem('authToken', newToken)
      setToken(newToken)
      setIsAuthenticated(true)
    } else {
      localStorage.removeItem('authToken')
      setToken(null)
      setIsAuthenticated(false)
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, token, setToken: handleSetToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
