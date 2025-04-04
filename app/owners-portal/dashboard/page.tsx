import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, Bell, Calendar, Home, PenToolIcon as Tool } from "lucide-react"
import Link from "next/link"
import { userData } from "@/data/user-data"
import { financeSummary } from "@/data/finance-data"
import { notificationData } from "@/data/notification-data"
import { requestData } from "@/data/request-data"

export default function Dashboard() {
  // Get the most recent notifications and requests
  const recentNotifications = notificationData.slice(0, 3)
  const activeRequests = requestData
    .filter((req) => req.status === "in-progress" || req.status === "submitted" || req.status === "scheduled")
    .slice(0, 2)

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Owner Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {userData.name}. Unit {userData.unitNumber}.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Administration Fund</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${financeSummary.totalDue.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Next payment due: {financeSummary.nextPaymentDate}</p>
            <Progress value={75} className="mt-3 h-2" />
            <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
              <div>Current Quarter</div>
              <div>75% paid</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Capital Works Fund</CardTitle>
            <Tool className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$750.00</div>
            <p className="text-xs text-muted-foreground">Next payment due: {financeSummary.nextPaymentDate}</p>
            <Progress value={75} className="mt-3 h-2" />
            <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
              <div>Current Quarter</div>
              <div>75% paid</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Maintenance Requests</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeRequests.length}</div>
            <p className="text-xs text-muted-foreground">Active maintenance requests</p>
            <div className="mt-3 space-y-2">
              {activeRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between text-sm">
                  <div>{request.title}</div>
                  <Badge variant={request.status === "in-progress" ? "default" : "outline"}>
                    {request.status === "in-progress"
                      ? "In Progress"
                      : request.status === "scheduled"
                        ? "Scheduled"
                        : "Submitted"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
            <CardDescription>Latest updates from your building</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentNotifications.map((notification) => (
                <div key={notification.id} className="flex items-start gap-4">
                  <Bell className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">{notification.title}</h3>
                    <p className="text-sm text-muted-foreground">{notification.message}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {new Date(notification.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="mt-4 w-full">
              <Link href="/owners-portal/dashboard/notifications">View All Notifications</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Meetings and important dates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Calendar className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Annual General Meeting</h3>
                  <p className="text-sm text-muted-foreground">
                    April 15, 2025 at 7:00 PM in the building's common room
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Quarterly Levy Due</h3>
                  <p className="text-sm text-muted-foreground">April 15, 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Swimming Pool Maintenance</h3>
                  <p className="text-sm text-muted-foreground">April 5-7, 2025 - Pool will be closed</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          <Link href="/maintenance/request">
            <Button className="w-full" size="lg">
              <Tool className="mr-2 h-4 w-4" />
              Submit Maintenance Request
            </Button>
          </Link>
          <Link href="/owners-portal/dashboard/finances">
            <Button className="w-full" variant="outline" size="lg">
              Make a Payment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

