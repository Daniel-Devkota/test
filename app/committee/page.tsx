import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, FileText } from "lucide-react"

export default function Committee() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Strata Committee</h1>
          <p className="text-muted-foreground">
            Meet your elected representatives responsible for managing the building.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarImage src="/placeholder.svg?height=56&width=56" alt="Sarah Johnson" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Sarah Johnson</CardTitle>
                  <CardDescription>Chairperson</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Sarah has been the Chairperson for 3 years and has extensive experience in property management.
              </p>
              <Button variant="outline" size="sm" className="mt-4">
                Contact
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarImage src="/placeholder.svg?height=56&width=56" alt="Michael Chen" />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Michael Chen</CardTitle>
                  <CardDescription>Secretary</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Michael handles all administrative duties including meeting minutes and correspondence.
              </p>
              <Button variant="outline" size="sm" className="mt-4">
                Contact
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarImage src="/placeholder.svg?height=56&width=56" alt="David Patel" />
                  <AvatarFallback>DP</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>David Patel</CardTitle>
                  <CardDescription>Treasurer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                David manages the financial affairs of the Owners Corporation, including levies and budgeting.
              </p>
              <Button variant="outline" size="sm" className="mt-4">
                Contact
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarImage src="/placeholder.svg?height=56&width=56" alt="Emma Wilson" />
                  <AvatarFallback>EW</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Emma Wilson</CardTitle>
                  <CardDescription>Committee Member</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Emma oversees building maintenance and coordinates with contractors for repairs.
              </p>
              <Button variant="outline" size="sm" className="mt-4">
                Contact
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarImage src="/placeholder.svg?height=56&width=56" alt="James Rodriguez" />
                  <AvatarFallback>JR</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>James Rodriguez</CardTitle>
                  <CardDescription>Committee Member</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                James focuses on community engagement and organizing building events.
              </p>
              <Button variant="outline" size="sm" className="mt-4">
                Contact
              </Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="meetings" className="w-full">
          <TabsList>
            <TabsTrigger value="meetings">Upcoming Meetings</TabsTrigger>
            <TabsTrigger value="minutes">Meeting Minutes</TabsTrigger>
            <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
          </TabsList>
          <TabsContent value="meetings" className="space-y-4">
            <h2 className="text-xl font-semibold mt-2">Upcoming Committee Meetings</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Annual General Meeting</CardTitle>
                    <CardDescription>April 15, 2025 at 7:00 PM</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Annual General Meeting to discuss the past year's activities, elect new committee members, and
                    approve the budget for the coming year.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" size="sm">
                      Add to Calendar
                    </Button>
                    <Button size="sm">View Agenda</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Committee Meeting</CardTitle>
                    <CardDescription>May 10, 2025 at 6:30 PM</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Regular committee meeting to discuss ongoing maintenance projects and other building matters.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Add to Calendar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="minutes" className="space-y-4">
            <h2 className="text-xl font-semibold mt-2">Recent Meeting Minutes</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Committee Meeting Minutes</CardTitle>
                    <CardDescription>March 15, 2025</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Minutes from the March committee meeting discussing upcoming maintenance projects and budget
                    allocations.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Committee Meeting Minutes</CardTitle>
                    <CardDescription>February 12, 2025</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Minutes from the February committee meeting discussing the upcoming AGM and annual budget review.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Committee Meeting Minutes</CardTitle>
                    <CardDescription>January 18, 2025</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Minutes from the January committee meeting discussing building security upgrades and maintenance
                    schedule.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="responsibilities" className="space-y-4">
            <h2 className="text-xl font-semibold mt-2">Committee Responsibilities</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Chairperson</h3>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                      <li>Preside over committee and general meetings</li>
                      <li>Ensure the Strata Schemes Management Act is followed</li>
                      <li>Act as the primary point of contact for owners and external parties</li>
                      <li>Coordinate the activities of the committee</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Secretary</h3>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                      <li>Prepare and distribute meeting notices, agendas, and minutes</li>
                      <li>Maintain the strata roll and records</li>
                      <li>Handle correspondence on behalf of the Owners Corporation</li>
                      <li>Ensure compliance with record-keeping requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Treasurer</h3>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                      <li>Manage the financial affairs of the Owners Corporation</li>
                      <li>Prepare and maintain financial records and statements</li>
                      <li>Collect levies and manage the administration and capital works funds</li>
                      <li>Prepare annual budgets and financial reports</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Committee Members</h3>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                      <li>Attend committee meetings and participate in decision-making</li>
                      <li>Assist with specific responsibilities as delegated</li>
                      <li>Represent the interests of all owners in the building</li>
                      <li>Contribute to the effective management of the building</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

