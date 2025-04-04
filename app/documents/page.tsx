import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FileText, Download, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Documents() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
          <p className="text-muted-foreground">Access important documents related to your building.</p>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search documents..." className="pl-8" />
          </div>
        </div>

        <Tabs defaultValue="bylaws" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
            <TabsTrigger value="bylaws">By-Laws</TabsTrigger>
            <TabsTrigger value="minutes">Meeting Minutes</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="insurance">Insurance</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>

          <TabsContent value="bylaws" className="space-y-4">
            <h2 className="text-xl font-semibold mt-2">Building By-Laws</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Strata By-Laws</CardTitle>
                    <CardDescription>Last updated: January 15, 2025</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete set of by-laws governing the strata scheme.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Pet By-Laws</CardTitle>
                    <CardDescription>Last updated: March 10, 2025</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Specific by-laws related to pet ownership in the building.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Renovation By-Laws</CardTitle>
                    <CardDescription>Last updated: February 5, 2025</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Guidelines for renovations and alterations to individual units.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="minutes" className="space-y-4">
            <h2 className="text-xl font-semibold mt-2">Meeting Minutes</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Committee Meeting Minutes</CardTitle>
                    <CardDescription>March 15, 2025</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Minutes from the March committee meeting.</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
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
                  <p className="text-sm text-muted-foreground mb-4">Minutes from the February committee meeting.</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Annual General Meeting Minutes</CardTitle>
                    <CardDescription>January 20, 2025</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Minutes from the Annual General Meeting.</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="financial" className="space-y-4">
            <h2 className="text-xl font-semibold mt-2">Financial Documents</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Annual Budget</CardTitle>
                    <CardDescription>Fiscal Year 2025</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Approved budget for the 2025 fiscal year.</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Quarterly Financial Report</CardTitle>
                    <CardDescription>Q1 2025</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Financial report for the first quarter of 2025.</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Levy Schedule</CardTitle>
                    <CardDescription>2025</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Schedule of levy payments for all units for 2025.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="insurance" className="space-y-4">
            <h2 className="text-xl font-semibold mt-2">Insurance Documents</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Building Insurance Certificate</CardTitle>
                    <CardDescription>2025-2026</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Certificate of insurance for the building structure and common property.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Public Liability Insurance</CardTitle>
                    <CardDescription>2025-2026</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Public liability insurance policy for common areas.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Workers Compensation Insurance</CardTitle>
                    <CardDescription>2025-2026</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Workers compensation insurance for building staff and contractors.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="other" className="space-y-4">
            <h2 className="text-xl font-semibold mt-2">Other Documents</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Building Evacuation Plan</CardTitle>
                    <CardDescription>Last updated: February 2025</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Emergency evacuation procedures and assembly points.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Maintenance Schedule</CardTitle>
                    <CardDescription>2025</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Schedule of planned maintenance activities for 2025.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Building Amenities Guide</CardTitle>
                    <CardDescription>Last updated: January 2025</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Guide to using building amenities such as the gym, pool, and common areas.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

