import type React from "react"
import { DashboardSidebarNav } from "@/components/dashboard-sidebar"

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
        <aside className="hidden md:block">
          <DashboardSidebarNav />
        </aside>
        <main>{children}</main>
      </div>
    </div>
  )
}

