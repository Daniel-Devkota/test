"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useNotification } from "@/components/notification"
import { userSettings } from "@/data/settings-data"

export default function SettingsPage() {
  const [settings, setSettings] = useState(userSettings)
  const { showNotification, NotificationContainer } = useNotification()
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = () => {
    setIsLoading(true)

    // Simulate saving settings
    setTimeout(() => {
      setIsLoading(false)
      showNotification({
        title: "Settings saved",
        description: "Your settings have been updated successfully",
      })
    }, 1000)
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          {/* Account Settings */}
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={settings.account.profileImage} alt={settings.account.name} />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-medium">Profile Picture</h3>
                    <p className="text-sm text-muted-foreground">
                      This will be displayed on your profile and in the owners directory
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Upload New
                      </Button>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={settings.account.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue={settings.account.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue={settings.account.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unit">Unit Number</Label>
                    <Input id="unit" defaultValue={settings.account.unitNumber} disabled />
                    <p className="text-xs text-muted-foreground">
                      Contact the building manager to update your unit number
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Control how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notification Channels</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-notifications">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                      </div>
                      <Switch id="email-notifications" checked={settings.notifications.email} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="sms-notifications">SMS Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive notifications via text message</p>
                      </div>
                      <Switch id="sms-notifications" checked={settings.notifications.sms} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="push-notifications">Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications in your browser or mobile app
                        </p>
                      </div>
                      <Switch id="push-notifications" checked={settings.notifications.push} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notification Categories</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="maintenance-notifications">Maintenance Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Updates about maintenance requests and building repairs
                        </p>
                      </div>
                      <Switch id="maintenance-notifications" checked={settings.notifications.categories.maintenance} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="financial-notifications">Financial Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Levy notices, payment confirmations, and financial reports
                        </p>
                      </div>
                      <Switch id="financial-notifications" checked={settings.notifications.categories.financial} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="meeting-notifications">Meeting Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Reminders about upcoming meetings and meeting minutes
                        </p>
                      </div>
                      <Switch id="meeting-notifications" checked={settings.notifications.categories.meetings} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="general-notifications">General Announcements</Label>
                        <p className="text-sm text-muted-foreground">
                          General building announcements and community updates
                        </p>
                      </div>
                      <Switch id="general-notifications" checked={settings.notifications.categories.general} />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control your privacy and data sharing preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Directory Visibility</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="show-contact">Show Contact Information</Label>
                        <p className="text-sm text-muted-foreground">
                          Make your contact information visible to other owners
                        </p>
                      </div>
                      <Switch id="show-contact" checked={settings.privacy.showContactInfo} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="show-unit">Show Unit Number</Label>
                        <p className="text-sm text-muted-foreground">Make your unit number visible to other owners</p>
                      </div>
                      <Switch id="show-unit" checked={settings.privacy.showUnitNumber} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Data Sharing</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="share-committee">Share Data with Committee</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow the strata committee to access your contact information
                        </p>
                      </div>
                      <Switch id="share-committee" checked={settings.privacy.shareDataWithCommittee} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Data Management</h3>
                  <p className="text-sm text-muted-foreground">Manage your personal data stored in our system</p>
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" size="sm">
                      Download My Data
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Password</h3>
                  <p className="text-sm text-muted-foreground">
                    Last changed: {new Date(settings.security.lastPasswordChange).toLocaleDateString()}
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div></div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Change Password
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch id="two-factor" checked={settings.security.twoFactorEnabled} />
                  </div>
                  {!settings.security.twoFactorEnabled && (
                    <Button variant="outline" size="sm">
                      Set Up Two-Factor
                    </Button>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Login Alerts</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="login-alerts">Receive Login Alerts</Label>
                      <p className="text-sm text-muted-foreground">Get notified when someone logs into your account</p>
                    </div>
                    <Switch id="login-alerts" checked={settings.security.loginAlerts} />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Active Sessions</h3>
                  <p className="text-sm text-muted-foreground">Devices currently logged into your account</p>
                  <div className="rounded-md border mt-2">
                    <div className="p-4 border-b">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Chrome on Windows</h4>
                          <p className="text-sm text-muted-foreground">Sydney, Australia (Current)</p>
                        </div>
                        <Button variant="ghost" size="sm" disabled>
                          Current
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Safari on iPhone</h4>
                          <p className="text-sm text-muted-foreground">Sydney, Australia (2 days ago)</p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          Log Out
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-2">
                    Log Out All Devices
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Preferences Settings */}
          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle>Display Preferences</CardTitle>
                <CardDescription>Customize your experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Appearance</h3>
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select defaultValue={settings.preferences.theme}>
                      <SelectTrigger id="theme">
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground mt-1">Choose how Strata One appears to you</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Language & Region</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select defaultValue={settings.preferences.language}>
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="English">English</SelectItem>
                          <SelectItem value="Chinese">Chinese</SelectItem>
                          <SelectItem value="Arabic">Arabic</SelectItem>
                          <SelectItem value="Vietnamese">Vietnamese</SelectItem>
                          <SelectItem value="Greek">Greek</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date-format">Date Format</Label>
                      <Select defaultValue={settings.preferences.dateFormat}>
                        <SelectTrigger id="date-format">
                          <SelectValue placeholder="Select date format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                          <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                          <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time-format">Time Format</Label>
                      <Select defaultValue={settings.preferences.timeFormat}>
                        <SelectTrigger id="time-format">
                          <SelectValue placeholder="Select time format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                          <SelectItem value="24h">24-hour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Accessibility</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="reduce-motion">Reduce Motion</Label>
                        <p className="text-sm text-muted-foreground">Minimize animations throughout the interface</p>
                      </div>
                      <Switch id="reduce-motion" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="high-contrast">High Contrast</Label>
                        <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
                      </div>
                      <Switch id="high-contrast" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <NotificationContainer />
    </div>
  )
}

