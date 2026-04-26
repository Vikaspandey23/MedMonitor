'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
  role: string
}

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  token: string | null
  user: User | null
  setToken: (token: string | null) => void
  setUser: (user: User | null) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [token, setTokenState] = useState<string | null>(null)
  const [user, setUserState] = useState<User | null>(null)

  useEffect(() => {
    // Check if token exists in localStorage on mount
    const storedToken = localStorage.getItem('authToken')
    const storedUser = localStorage.getItem('authUser')
    if (storedToken) {
      setTokenState(storedToken)
      setIsAuthenticated(true)
      if (storedUser) {
        setUserState(JSON.parse(storedUser))
      }
    }
    setIsLoading(false)
  }, [])

  const handleSetToken = (newToken: string | null) => {
    if (newToken) {
      localStorage.setItem('authToken', newToken)
      setTokenState(newToken)
      setIsAuthenticated(true)
    } else {
      localStorage.removeItem('authToken')
      setTokenState(null)
      setIsAuthenticated(false)
    }
  }

  const handleSetUser = (newUser: User | null) => {
    if (newUser) {
      localStorage.setItem('authUser', JSON.stringify(newUser))
      setUserState(newUser)
    } else {
      localStorage.removeItem('authUser')
      setUserState(null)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('authUser')
    setTokenState(null)
    setUserState(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      isLoading, 
      token, 
      user,
      setToken: handleSetToken, 
      setUser: handleSetUser,
      logout: handleLogout
    }}>
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
