import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell } from "lucide-react"
import { notificationData } from "@/data/notification-data"

export default function NotificationsPage() {
  // Group notifications by category
  const generalNotifications = notificationData.filter((item) => item.category === "general")
  const maintenanceNotifications = notificationData.filter((item) => item.category === "maintenance")
  const financialNotifications = notificationData.filter((item) => item.category === "financial")
  const meetingNotifications = notificationData.filter((item) => item.category === "meeting")

  // Count unread notifications
  const unreadCount = notificationData.filter((item) => !item.read).length

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
        <p className="text-muted-foreground">
          Stay updated with important information about your building
          {unreadCount > 0 && ` (${unreadCount} unread)`}
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="meeting">Meetings</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4 mt-4">
          {notificationData.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))}
        </TabsContent>
        <TabsContent value="general" className="space-y-4 mt-4">
          {generalNotifications.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))}
        </TabsContent>
        <TabsContent value="maintenance" className="space-y-4 mt-4">
          {maintenanceNotifications.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))}
        </TabsContent>
        <TabsContent value="financial" className="space-y-4 mt-4">
          {financialNotifications.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))}
        </TabsContent>
        <TabsContent value="meeting" className="space-y-4 mt-4">
          {meetingNotifications.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function NotificationCard({ notification }: { notification: any }) {
  return (
    <Card className={notification.read ? "" : "border-primary"}>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Bell className="h-5 w-5 text-primary" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">{notification.title}</CardTitle>
            <Badge variant={notification.read ? "outline" : "default"}>{notification.read ? "Read" : "New"}</Badge>
          </div>
          <p className="text-xs text-muted-foreground">{new Date(notification.date).toLocaleString()}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{notification.message}</p>
        <div className="mt-2 flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {notification.category.charAt(0).toUpperCase() + notification.category.slice(1)}
          </Badge>
          <Badge
            variant="outline"
            className={`text-xs ${
              notification.priority === "high"
                ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                : notification.priority === "medium"
                  ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
                  : ""
            }`}
          >
            {notification.priority.charAt(0).toUpperCase() + notification.priority.slice(1)} Priority
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

