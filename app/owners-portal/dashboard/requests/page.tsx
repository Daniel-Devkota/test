import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ClipboardList, MessageSquare, PenToolIcon as Tool } from "lucide-react"
import Link from "next/link"
import { requestData } from "@/data/request-data"

export default function RequestsPage() {
  // Group requests by status
  const activeRequests = requestData.filter(
    (req) => req.status === "in-progress" || req.status === "submitted" || req.status === "scheduled",
  )
  const completedRequests = requestData.filter((req) => req.status === "completed")

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Requests</h1>
        <p className="text-muted-foreground">Track and manage your maintenance requests</p>
      </div>

      <div className="flex justify-end">
        <Link href="/maintenance/request">
          <Button>
            <Tool className="mr-2 h-4 w-4" />
            New Maintenance Request
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList>
          <TabsTrigger value="active">Active Requests ({activeRequests.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedRequests.length})</TabsTrigger>
          <TabsTrigger value="all">All Requests ({requestData.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4 mt-4">
          {activeRequests.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </TabsContent>
        <TabsContent value="completed" className="space-y-4 mt-4">
          {completedRequests.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </TabsContent>
        <TabsContent value="all" className="space-y-4 mt-4">
          {requestData.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function RequestCard({ request }: { request: any }) {
  // Get status badge color
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in-progress":
        return <Badge>In Progress</Badge>
      case "scheduled":
        return <Badge variant="outline">Scheduled</Badge>
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
            Completed
          </Badge>
        )
      case "submitted":
        return <Badge variant="outline">Submitted</Badge>
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{request.title}</CardTitle>
          {getStatusBadge(request.status)}
        </div>
        <CardDescription>
          Submitted on {new Date(request.submittedDate).toLocaleDateString()}
          {request.updatedDate !== request.submittedDate &&
            ` • Updated on ${new Date(request.updatedDate).toLocaleDateString()}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium">Description</h3>
            <p className="text-sm text-muted-foreground mt-1">{request.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium">Location</h3>
              <p className="text-sm text-muted-foreground mt-1">{request.location}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Category</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {request.category.charAt(0).toUpperCase() + request.category.slice(1)}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Priority</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Assigned To</h3>
              <p className="text-sm text-muted-foreground mt-1">{request.assignedTo || "Not yet assigned"}</p>
            </div>
          </div>
          {request.comments && request.comments.length > 0 && (
            <div>
              <h3 className="text-sm font-medium">Comments</h3>
              <div className="space-y-2 mt-2">
                {request.comments.map((comment: any, index: number) => (
                  <div key={index} className="rounded-md bg-muted p-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{comment.author}</span>
                      <span className="text-xs text-muted-foreground">{new Date(comment.date).toLocaleString()}</span>
                    </div>
                    <p className="mt-1">{comment.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          <MessageSquare className="mr-2 h-4 w-4" />
          Add Comment
        </Button>
        <Button variant="outline" size="sm">
          <ClipboardList className="mr-2 h-4 w-4" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

