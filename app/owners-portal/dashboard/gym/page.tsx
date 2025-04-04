import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Dumbbell, Users } from "lucide-react"
import { gymMembership, gymSchedule, gymEquipment } from "@/data/gym-data"

export default function GymPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Gym Membership</h1>
        <p className="text-muted-foreground">Access and manage your building gym membership</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Membership Status</CardTitle>
          <CardDescription>Your current gym membership details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Dumbbell className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold">
                {gymMembership.status === "active"
                  ? "Active Membership"
                  : gymMembership.status === "inactive"
                    ? "Inactive Membership"
                    : "Pending Membership"}
              </h2>
              <p className="text-sm text-muted-foreground">
                Valid from {new Date(gymMembership.startDate).toLocaleDateString()} to{" "}
                {new Date(gymMembership.endDate).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium">Membership Type</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {gymMembership.membershipType === "resident" ? "Resident (Standard)" : "Premium"}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Access Code</h3>
              <p className="text-sm text-muted-foreground mt-1">{gymMembership.accessCode}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Status</h3>
              <div className="mt-1">
                <Badge variant={gymMembership.status === "active" ? "default" : "outline"}>
                  {gymMembership.status.charAt(0).toUpperCase() + gymMembership.status.slice(1)}
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium">Restrictions</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {gymMembership.restrictions && gymMembership.restrictions.length > 0
                  ? gymMembership.restrictions.join(", ")
                  : "None"}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Renew Membership</Button>
        </CardFooter>
      </Card>

      <Tabs defaultValue="schedule" className="w-full">
        <TabsList>
          <TabsTrigger value="schedule">Gym Schedule</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="classes">Classes</TabsTrigger>
        </TabsList>
        <TabsContent value="schedule" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
              <CardDescription>Gym opening hours and availability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {gymSchedule.map((day) => (
                  <div key={day.id} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div>
                      <h3 className="font-medium">{day.day}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {day.openTime} - {day.closeTime}
                      </p>
                      {day.maintenanceTime && (
                        <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                          Maintenance: {day.maintenanceTime}
                        </p>
                      )}
                    </div>
                    {day.classes && day.classes.length > 0 && (
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {day.classes.length} {day.classes.length === 1 ? "Class" : "Classes"}
                        </Badge>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="equipment" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Equipment</CardTitle>
              <CardDescription>Gym equipment and current status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {gymEquipment.map((equipment) => (
                  <Card key={equipment.id} className="border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{equipment.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <p>Quantity: {equipment.count}</p>
                        <p className="mt-1">
                          Status:
                          <Badge
                            variant="outline"
                            className={`ml-2 ${
                              equipment.status === "operational"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
                            }`}
                          >
                            {equipment.status.charAt(0).toUpperCase() + equipment.status.slice(1)}
                          </Badge>
                        </p>
                        {equipment.description && <p className="mt-2">{equipment.description}</p>}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="classes" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Fitness Classes</CardTitle>
              <CardDescription>Weekly classes schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {gymSchedule
                  .filter((day) => day.classes && day.classes.length > 0)
                  .map((day) => (
                    <div key={day.id}>
                      <h3 className="font-medium mb-3">{day.day}</h3>
                      <div className="space-y-3">
                        {day.classes?.map((cls, index) => (
                          <div key={index} className="flex items-start gap-4 rounded-md border p-4">
                            <div className="rounded-full bg-primary/10 p-2">
                              <Users className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium">{cls.name}</h4>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                                  <span className="text-sm text-muted-foreground">{cls.duration} min</span>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">
                                {cls.time} with {cls.instructor}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Book a Class</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

