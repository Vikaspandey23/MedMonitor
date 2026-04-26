"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LogOut, User, Heart, Activity } from "lucide-react"

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("authToken")
        if (!token) {
          router.push("/signin")
          return
        }

        const response = await fetch("/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          localStorage.removeItem("authToken")
          router.push("/signin")
          return
        }

        const data = await response.json()
        setUser(data.user)
      } catch (error) {
        console.error("[v0] Profile fetch error:", error)
        router.push("/signin")
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Activity className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <nav className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">Med Monitor</span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <User className="w-6 h-6 text-primary" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-1">Welcome</p>
            <p className="text-2xl font-bold">{user?.name}</p>
            <p className="text-xs text-muted-foreground mt-2">{user?.email}</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-emerald-500/10 p-3 rounded-lg">
                <Activity className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-1">Account Status</p>
            <p className="text-2xl font-bold capitalize text-emerald-600">Active</p>
            <p className="text-xs text-muted-foreground mt-2">Role: {user?.role}</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-1">Medications</p>
            <p className="text-2xl font-bold">{user?.medications?.length || 0}</p>
            <p className="text-xs text-muted-foreground mt-2">Tracked items</p>
          </Card>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Your Profile</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Name:</span>
                  <p className="font-medium">{user?.name}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Email:</span>
                  <p className="font-medium">{user?.email}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Role:</span>
                  <p className="font-medium capitalize">{user?.role}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Account Created:</span>
                  <p className="font-medium">{new Date(user?.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button className="w-full" variant="outline">
                  Edit Profile
                </Button>
                <Button className="w-full" variant="outline">
                  Add Medications
                </Button>
                <Button className="w-full" variant="outline">
                  Invite Family Members
                </Button>
                <Button className="w-full" variant="outline">
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
