export interface NotificationItem {
  id: string
  title: string
  message: string
  date: string
  read: boolean
  category: "general" | "maintenance" | "financial" | "meeting" | "other"
  priority: "low" | "medium" | "high"
}

export const notificationData: NotificationItem[] = [
  {
    id: "notif-001",
    title: "Annual General Meeting",
    message: "The Annual General Meeting will be held on April 15, 2025 at 7:00 PM in the building's common room.",
    date: "2025-04-01T10:00:00Z",
    read: false,
    category: "meeting",
    priority: "high",
  },
  {
    id: "notif-002",
    title: "Quarterly Levy Due",
    message:
      "Your quarterly levy payment of $2,000 is due by April 15, 2025. Please ensure timely payment to avoid late fees.",
    date: "2025-03-25T09:30:00Z",
    read: true,
    category: "financial",
    priority: "high",
  },
  {
    id: "notif-003",
    title: "Maintenance Update",
    message: "Your maintenance request for the lobby light replacement has been updated to 'In Progress'.",
    date: "2025-03-20T14:15:00Z",
    read: true,
    category: "maintenance",
    priority: "medium",
  },
  {
    id: "notif-004",
    title: "Swimming Pool Closure",
    message:
      "The swimming pool will be closed for maintenance from April 5-7, 2025. We apologize for any inconvenience.",
    date: "2025-03-15T11:45:00Z",
    read: false,
    category: "general",
    priority: "medium",
  },
  {
    id: "notif-005",
    title: "New By-Law Proposal",
    message:
      "A new by-law regarding pet ownership has been proposed and will be discussed at the next committee meeting.",
    date: "2025-03-10T16:30:00Z",
    read: false,
    category: "other",
    priority: "low",
  },
]

