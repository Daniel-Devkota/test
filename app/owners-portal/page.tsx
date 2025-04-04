"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useNotification } from "@/components/notification"

export default function OwnersPortal() {
  const router = useRouter()
  const { showNotification, NotificationContainer } = useNotification()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      showNotification({
        title: "Login successful",
        description: "Welcome back to Strata One",
      })

      // In a real app, you would set the auth state in a context or store
      // For now, we'll just redirect to the dashboard
      router.push("/owners-portal/dashboard")
    }, 1500)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false)
      showNotification({
        title: "Registration submitted",
        description: "Your registration is pending approval by the committee",
      })
    }, 1500)
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-16rem)] py-12">
      <Tabs defaultValue="login" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login to Owners Portal</CardTitle>
              <CardDescription>Access your strata information, levies, and maintenance requests.</CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-sm"
                      onClick={() => router.push("/owners-portal/forgot-password")}
                    >
                      Forgot password?
                    </Button>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Register for Owners Portal</CardTitle>
              <CardDescription>Create an account to access your strata information.</CardDescription>
            </CardHeader>
            <form onSubmit={handleRegister}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unit-number">Unit Number</Label>
                  <Input id="unit-number" placeholder="e.g. 101" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input id="register-email" type="email" placeholder="your.email@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <Input id="register-password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" required />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Registering..." : "Register"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
      <NotificationContainer />
    </div>
  )
}

