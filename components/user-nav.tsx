"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export function UserNav() {
  const router = useRouter()
  // Default to not signed in
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [userData, setUserData] = useState({
    name: "Guest User",
    email: "guest@example.com",
  })

  const handleAuthAction = () => {
    if (isSignedIn) {
      // Sign out logic
      setIsSignedIn(false)
      setUserData({
        name: "Guest User",
        email: "guest@example.com",
      })
    } else {
      // Sign in logic - for demo purposes, we'll just toggle the state
      setIsSignedIn(true)
      setUserData({
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
      })
      router.push("/owners-portal/dashboard")
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>{isSignedIn ? "AJ" : "G"}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        {isSignedIn ? (
          <>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{userData.name}</p>
                <p className="text-xs leading-none text-muted-foreground">{userData.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => router.push("/owners-portal/dashboard")}>Dashboard</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/owners-portal/settings")}>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleAuthAction}>Log out</DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Not signed in</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleAuthAction}>Sign in</DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

