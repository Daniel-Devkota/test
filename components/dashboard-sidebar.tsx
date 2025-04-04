"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, Bell, ClipboardList, Dumbbell, Home, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ReactNode
  }[]
}

export function DashboardSidebar({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className)} {...props}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
          )}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

export function DashboardSidebarNav() {
  const items = [
    {
      href: "/owners-portal/dashboard",
      title: "Overview",
      icon: <Home className="h-4 w-4" />,
    },
    {
      href: "/owners-portal/dashboard/finances",
      title: "Finances",
      icon: <BarChart className="h-4 w-4" />,
    },
    {
      href: "/owners-portal/dashboard/notifications",
      title: "Notifications",
      icon: <Bell className="h-4 w-4" />,
    },
    {
      href: "/owners-portal/dashboard/requests",
      title: "My Requests",
      icon: <ClipboardList className="h-4 w-4" />,
    },
    {
      href: "/owners-portal/dashboard/gym",
      title: "Gym Membership",
      icon: <Dumbbell className="h-4 w-4" />,
    },
    {
      href: "/owners-portal/settings",
      title: "Settings",
      icon: <Settings className="h-4 w-4" />,
    },
  ]

  return <DashboardSidebar items={items} />
}

