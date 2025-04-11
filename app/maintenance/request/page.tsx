"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useNotification } from "@/components/notification"

import { db } from "@/firebase/clientapp" // Import Firebase instance
import { addDoc, collection } from "firebase/firestore"

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  location: z.string().min(2, {
    message: "Please specify the location.",
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  priority: z.string({
    required_error: "Please select a priority level.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
  contactName: z.string().min(2, {
    message: "Please provide a contact name.",
  }),
  contactEmail: z.string().email({
    message: "Please provide a valid email address.",
  }),
  contactPhone: z.string().optional(),
})

export default function MaintenanceRequestPage() {
  const router = useRouter()
  const { showNotification, NotificationContainer } = useNotification()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      location: "",
      category: "",
      priority: "",
      description: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    const categoryToPersonnel: Record<string, string> = {
      electrical: "Electrical Manager",
      plumbing: "Plumbing Manager",
      hvac: "HVAC Specialist",
      structural: "Structural Engineer",
      appliance: "Appliance Technician",
      "common-area": "Building Manager",
      other: "General Maintenance Team",
    }

    try {

      // Assign a person based on the category
      const assignedTo = categoryToPersonnel[values.category] || "Unassigned"
    
      const postRequestData = {
        title: values.title,
        location: values.location,
        category: values.category,
        priority: values.priority,
        description: values.description,
        contactName: values.contactName,
        contactEmail: values.contactEmail,
        contactPhone: values.contactPhone || null, // Optional field
        status: "submitted", // Default status for new requests
        submittedDate: new Date().toISOString(), // Add a timestamp
        assignedTo: assignedTo // Assign based on category
      }
      
      const response = await fetch('/api/maintenance/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Ensure you're sending JSON data
        },
        body: JSON.stringify(postRequestData),  // Send the form data in the body as JSON
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      showNotification({
        title: "Maintenance request submitted",
        description: "Your request has been received and will be processed shortly.",
      })
    
      // Add a delay before redirecting
      setTimeout(() => {
        router.push("/maintenance") // Redirect to the maintenance page
      }, 1500) // 1.5 second delay

    } catch (error) {
      showNotification({
        title: "Error submitting request",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8 max-w-3xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Submit Maintenance Request</h1>
          <p className="text-muted-foreground">
            Please provide details about the maintenance issue you're experiencing.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Maintenance Request Form</CardTitle>
            <CardDescription>All fields marked with * are required.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Request Title *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Broken Light in Hallway" {...field} />
                      </FormControl>
                      <FormDescription>A brief title describing the issue</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 3rd Floor Hallway" {...field} />
                        </FormControl>
                        <FormDescription>Where is the issue located?</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="electrical">Electrical</SelectItem>
                            <SelectItem value="plumbing">Plumbing</SelectItem>
                            <SelectItem value="hvac">HVAC</SelectItem>
                            <SelectItem value="structural">Structural</SelectItem>
                            <SelectItem value="appliance">Appliance</SelectItem>
                            <SelectItem value="common-area">Common Area</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>Type of maintenance issue</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Priority Level *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency - Immediate attention required</SelectItem>
                          <SelectItem value="urgent">Urgent - Within 24 hours</SelectItem>
                          <SelectItem value="high">High - Within 2-3 days</SelectItem>
                          <SelectItem value="normal">Normal - Within a week</SelectItem>
                          <SelectItem value="low">Low - When convenient</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>How urgent is this issue?</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Detailed Description *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please provide a detailed description of the issue..."
                          className="min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Include as much detail as possible about the issue</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Email *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="contactPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => router.back()}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <NotificationContainer />
    </div>
  )
}

