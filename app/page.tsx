import Link from "next/link"
import Image from "next/image"
import { FileText, PenToolIcon as Tool, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Welcome to Strata One
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Your comprehensive platform for managing strata properties in New South Wales.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/owners-portal">
                  <Button size="lg">Owners Portal</Button>
                </Link>
                <Link href="/maintenance">
                  <Button size="lg" variant="outline">
                    Report Maintenance
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:mr-0">
              <div className="relative h-[300px] w-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Building"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Manage Your Building with Ease
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform provides all the tools you need to effectively manage your strata property.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Owners Corporation</CardTitle>
                  <CardDescription>Manage the collective responsibilities of all owners</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access information about levies, meetings, and important decisions affecting the building.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/owners-portal">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Committee Management</CardTitle>
                  <CardDescription>Tools for the elected Strata Committee</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Organize meetings, record minutes, and manage the responsibilities of the Treasurer, Secretary, and
                  Chairperson.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/committee">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Tool className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Maintenance Requests</CardTitle>
                  <CardDescription>Submit and track maintenance issues</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Easily report maintenance issues in common areas and track their resolution status.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/maintenance">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest News & Updates</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay informed about what's happening in your building
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>April 1, 2025</span>
                </div>
                <CardTitle>Annual General Meeting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The Annual General Meeting will be held on April 15, 2025 at 7:00 PM in the building's common room.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>March 25, 2025</span>
                </div>
                <CardTitle>Pool Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The swimming pool will be closed for maintenance from April 5-7, 2025. We apologize for any
                  inconvenience.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>March 15, 2025</span>
                </div>
                <CardTitle>New By-Law Proposal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A new by-law regarding pet ownership has been proposed and will be discussed at the next committee
                  meeting.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Register for the Owners Portal to access all features and stay connected with your building community.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/owners-portal">
                <Button size="lg">Register Now</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

