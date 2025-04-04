import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Clock, PenToolIcon as Tool } from "lucide-react"
import Link from "next/link"

export default function Maintenance() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Maintenance</h1>
          <p className="text-muted-foreground">Submit and track maintenance requests for your building.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Requests</CardTitle>
              <AlertCircle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Currently being processed</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Completed This Month</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Successfully resolved</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Average Resolution Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.5 days</div>
              <p className="text-xs text-muted-foreground">For standard requests</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mb-4">
          <Link href="/maintenance/request">
            <Button size="lg" className="gap-2">
              <Tool className="h-4 w-4" />
              Submit New Maintenance Request
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList>
            <TabsTrigger value="active">Active Requests</TabsTrigger>
            <TabsTrigger value="completed">Completed Requests</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Maintenance</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="space-y-4">
            <h2 className="text-xl font-semibold mt-2">Active Maintenance Requests</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Lobby Light Replacement</CardTitle>
                    <Badge>In Progress</Badge>
                  </div>
                  <CardDescription>Submitted on March 15, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Two lights in the main lobby are flickering and need to be replaced. This is causing visibility
                    issues at night.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Assigned to: Building Manager</div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Elevator Inspection</CardTitle>
                    <Badge variant="outline">Scheduled</Badge>
                  </div>
                  <CardDescription>Submitted on March 20, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    The elevator makes an unusual noise when stopping at the 3rd floor. Requesting inspection and
                    maintenance.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Assigned to: Elevator Contractor</div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Garage Door Repair</CardTitle>
                    <Badge>In Progress</Badge>
                  </div>
                  <CardDescription>Submitted on March 22, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    The garage door is slow to respond and sometimes gets stuck halfway. Needs adjustment or repair.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Assigned to: Maintenance Contractor</div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="completed" className="space-y-4">
            <h2 className="text-xl font-semibold mt-2">Completed Maintenance Requests</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Hallway Carpet Cleaning</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                    >
                      Completed
                    </Badge>
                  </div>
                  <CardDescription>Completed on March 10, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Deep cleaning of all hallway carpets on floors 1-5.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Completed by: Cleaning Service</div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Pool Filter Replacement</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                    >
                      Completed
                    </Badge>
                  </div>
                  <CardDescription>Completed on March 5, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Replacement of the swimming pool filter system as part of regular maintenance.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Completed by: Pool Maintenance Company</div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Gym Equipment Repair</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                    >
                      Completed
                    </Badge>
                  </div>
                  <CardDescription>Completed on February 28, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Repair of the treadmill and elliptical machines in the building gym.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Completed by: Fitness Equipment Technician</div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="scheduled" className="space-y-4">
            <h2 className="text-xl font-semibold mt-2">Scheduled Maintenance</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Annual Fire Safety Inspection</CardTitle>
                    <Badge variant="outline">Scheduled</Badge>
                  </div>
                  <CardDescription>Scheduled for April 20, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Annual inspection of all fire safety equipment including alarms, extinguishers, and sprinkler
                    systems.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Assigned to: Fire Safety Contractor</div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Swimming Pool Maintenance</CardTitle>
                    <Badge variant="outline">Scheduled</Badge>
                  </div>
                  <CardDescription>Scheduled for April 5-7, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Regular maintenance of the swimming pool including cleaning, chemical balancing, and equipment
                    check.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Assigned to: Pool Maintenance Company</div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>HVAC System Servicing</CardTitle>
                    <Badge variant="outline">Scheduled</Badge>
                  </div>
                  <CardDescription>Scheduled for May 15, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Bi-annual servicing of the building's heating, ventilation, and air conditioning systems.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Assigned to: HVAC Contractor</div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

