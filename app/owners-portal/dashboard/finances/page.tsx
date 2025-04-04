import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BarChart, Download, DollarSign, PiggyBank, Receipt } from "lucide-react"
import { financeData, financeSummary } from "@/data/finance-data"

export default function FinancesPage() {
  // Group finance data by category
  const adminFundItems = financeData.filter((item) => item.category === "admin")
  const capitalFundItems = financeData.filter((item) => item.category === "capital")
  const specialLevyItems = financeData.filter((item) => item.category === "special")

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Finances</h1>
        <p className="text-muted-foreground">Manage your strata levies and payments</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Due</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${financeSummary.totalDue.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Next payment due: {financeSummary.nextPaymentDate}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Make Payment</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Admin Fund Balance</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${financeSummary.adminFundBalance.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Building operational expenses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Capital Works Balance</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${financeSummary.capitalWorksBalance.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Long-term maintenance and improvements</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>Your recent levy payments and charges</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All Transactions</TabsTrigger>
              <TabsTrigger value="admin">Admin Fund</TabsTrigger>
              <TabsTrigger value="capital">Capital Works</TabsTrigger>
              <TabsTrigger value="special">Special Levies</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4 mt-4">
              <div className="rounded-md border">
                <div className="grid grid-cols-5 p-4 font-medium">
                  <div>Date</div>
                  <div className="col-span-2">Description</div>
                  <div>Category</div>
                  <div className="text-right">Amount</div>
                </div>
                <div className="divide-y">
                  {financeData.map((item) => (
                    <div key={item.id} className="grid grid-cols-5 p-4 text-sm">
                      <div>{new Date(item.date).toLocaleDateString()}</div>
                      <div className="col-span-2">{item.description}</div>
                      <div>
                        <Badge variant="outline">
                          {item.category === "admin"
                            ? "Admin Fund"
                            : item.category === "capital"
                              ? "Capital Works"
                              : "Special Levy"}
                        </Badge>
                      </div>
                      <div className={`text-right ${item.type === "payment" ? "text-green-600" : ""}`}>
                        {item.type === "payment" ? "-" : ""}${item.amount.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="admin" className="space-y-4 mt-4">
              <div className="rounded-md border">
                <div className="grid grid-cols-5 p-4 font-medium">
                  <div>Date</div>
                  <div className="col-span-2">Description</div>
                  <div>Status</div>
                  <div className="text-right">Amount</div>
                </div>
                <div className="divide-y">
                  {adminFundItems.map((item) => (
                    <div key={item.id} className="grid grid-cols-5 p-4 text-sm">
                      <div>{new Date(item.date).toLocaleDateString()}</div>
                      <div className="col-span-2">{item.description}</div>
                      <div>
                        <Badge variant={item.status === "paid" ? "outline" : "default"}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </Badge>
                      </div>
                      <div className={`text-right ${item.type === "payment" ? "text-green-600" : ""}`}>
                        {item.type === "payment" ? "-" : ""}${item.amount.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="capital" className="space-y-4 mt-4">
              <div className="rounded-md border">
                <div className="grid grid-cols-5 p-4 font-medium">
                  <div>Date</div>
                  <div className="col-span-2">Description</div>
                  <div>Status</div>
                  <div className="text-right">Amount</div>
                </div>
                <div className="divide-y">
                  {capitalFundItems.map((item) => (
                    <div key={item.id} className="grid grid-cols-5 p-4 text-sm">
                      <div>{new Date(item.date).toLocaleDateString()}</div>
                      <div className="col-span-2">{item.description}</div>
                      <div>
                        <Badge variant={item.status === "paid" ? "outline" : "default"}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </Badge>
                      </div>
                      <div className={`text-right ${item.type === "payment" ? "text-green-600" : ""}`}>
                        {item.type === "payment" ? "-" : ""}${item.amount.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="special" className="space-y-4 mt-4">
              <div className="rounded-md border">
                <div className="grid grid-cols-5 p-4 font-medium">
                  <div>Date</div>
                  <div className="col-span-2">Description</div>
                  <div>Status</div>
                  <div className="text-right">Amount</div>
                </div>
                <div className="divide-y">
                  {specialLevyItems.map((item) => (
                    <div key={item.id} className="grid grid-cols-5 p-4 text-sm">
                      <div>{new Date(item.date).toLocaleDateString()}</div>
                      <div className="col-span-2">{item.description}</div>
                      <div>
                        <Badge variant={item.status === "paid" ? "outline" : "default"}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </Badge>
                      </div>
                      <div className={`text-right ${item.type === "payment" ? "text-green-600" : ""}`}>
                        {item.type === "payment" ? "-" : ""}${item.amount.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download Statement
          </Button>
          <Button variant="outline" size="sm">
            <BarChart className="mr-2 h-4 w-4" />
            View Financial Reports
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

