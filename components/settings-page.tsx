"use client"

import { useState } from "react"
import {
  User,
  Bell,
  Shield,
  Palette,
  Download,
  Trash2,
  Smartphone,
  Mail,
  Lock,
  Database,
  Moon,
  Sun,
  Monitor,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function SettingsPage() {
  const [theme, setTheme] = useState("dark")
  const [language, setLanguage] = useState("en")
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false,
    rankings: true,
    events: true,
    social: true,
  })

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showActivity: false,
    showCollection: true,
    allowMessages: true,
    showLocation: false,
  })

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Settings
            </span>
          </h1>
          <p className="text-gray-400">Manage your account preferences and privacy settings</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-gray-900/50 mb-8">
            <TabsTrigger value="profile" className="data-[state=active]:bg-purple-900/50">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-purple-900/50">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="data-[state=active]:bg-purple-900/50">
              <Shield className="h-4 w-4 mr-2" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-purple-900/50">
              <Lock className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="appearance" className="data-[state=active]:bg-purple-900/50">
              <Palette className="h-4 w-4 mr-2" />
              Appearance
            </TabsTrigger>
            <TabsTrigger value="data" className="data-[state=active]:bg-purple-900/50">
              <Database className="h-4 w-4 mr-2" />
              Data
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <Button variant="outline" className="border-purple-600 text-purple-400">
                        Change Avatar
                      </Button>
                      <p className="text-sm text-gray-400 mt-1">JPG, PNG up to 5MB</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" className="bg-gray-800/50 border-gray-700 text-white" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" className="bg-gray-800/50 border-gray-700 text-white" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="bg-gray-800/50 border-gray-700 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      rows={3}
                      placeholder="Tell us about yourself..."
                      className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-md text-white placeholder:text-gray-400"
                    />
                  </div>

                  <Button className="bg-gradient-to-r from-purple-600 to-purple-700">Save Changes</Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardHeader>
                  <CardTitle>Collector Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="collectorType">Collector Type</Label>
                    <Select defaultValue="enthusiast">
                      <SelectTrigger className="bg-gray-800/50 border-gray-700">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="enthusiast">Enthusiast</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="interests">Interests</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Art Toys", "Blind Box", "LEGO", "Gundam", "Funko Pop", "Vintage"].map((interest) => (
                        <Badge
                          key={interest}
                          variant="outline"
                          className="border-purple-600 text-purple-300 cursor-pointer hover:bg-purple-900/30"
                        >
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Select defaultValue="us">
                      <SelectTrigger className="bg-gray-800/50 border-gray-700">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="cn">China</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                        <SelectItem value="kr">South Korea</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Verification Status</Label>
                      <p className="text-sm text-gray-400">Verify your identity for enhanced features</p>
                    </div>
                    <Button variant="outline" className="border-green-600 text-green-400">
                      Verify Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { key: "email", label: "Email Notifications", desc: "Receive updates via email", icon: Mail },
                    { key: "push", label: "Push Notifications", desc: "Browser and mobile notifications", icon: Bell },
                    { key: "sms", label: "SMS Notifications", desc: "Text message alerts", icon: Smartphone },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-purple-400" />
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-sm text-gray-400">{item.desc}</div>
                        </div>
                      </div>
                      <Switch
                        checked={notifications[item.key as keyof typeof notifications]}
                        onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, [item.key]: checked }))}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardHeader>
                  <CardTitle>Content Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { key: "rankings", label: "Ranking Updates", desc: "New rankings and changes" },
                    { key: "events", label: "Events & Competitions", desc: "Upcoming events and results" },
                    { key: "social", label: "Social Activity", desc: "Follows, likes, and comments" },
                    { key: "marketing", label: "Marketing & Promotions", desc: "Special offers and news" },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-gray-400">{item.desc}</div>
                      </div>
                      <Switch
                        checked={notifications[item.key as keyof typeof notifications]}
                        onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, [item.key]: checked }))}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Privacy */}
          <TabsContent value="privacy">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardHeader>
                  <CardTitle>Profile Privacy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { key: "profileVisible", label: "Public Profile", desc: "Make your profile visible to others" },
                    { key: "showActivity", label: "Show Activity", desc: "Display your recent activity" },
                    { key: "showCollection", label: "Show Collection", desc: "Display your collection publicly" },
                    { key: "allowMessages", label: "Allow Messages", desc: "Let others send you messages" },
                    { key: "showLocation", label: "Show Location", desc: "Display your location on profile" },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-gray-400">{item.desc}</div>
                      </div>
                      <Switch
                        checked={privacy[item.key as keyof typeof privacy]}
                        onCheckedChange={(checked) => setPrivacy((prev) => ({ ...prev, [item.key]: checked }))}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardHeader>
                  <CardTitle>Data & Analytics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Analytics Tracking</div>
                      <div className="text-sm text-gray-400">Help improve our service with usage data</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Personalized Recommendations</div>
                      <div className="text-sm text-gray-400">Get personalized content recommendations</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Separator className="bg-gray-700" />

                  <div>
                    <h4 className="font-medium mb-2">Data Requests</h4>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full border-gray-700">
                        <Download className="h-4 w-4 mr-2" />
                        Download My Data
                      </Button>
                      <Button variant="outline" className="w-full border-red-600 text-red-400 hover:bg-red-900/30">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Security */}
          <TabsContent value="security">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardHeader>
                  <CardTitle>Password & Authentication</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" className="bg-gray-800/50 border-gray-700 text-white" />
                  </div>

                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" className="bg-gray-800/50 border-gray-700 text-white" />
                  </div>

                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" className="bg-gray-800/50 border-gray-700 text-white" />
                  </div>

                  <Button className="bg-gradient-to-r from-purple-600 to-purple-700">Update Password</Button>

                  <Separator className="bg-gray-700" />

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Two-Factor Authentication</div>
                      <div className="text-sm text-gray-400">Add an extra layer of security</div>
                    </div>
                    <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
                  </div>

                  {twoFactorEnabled && (
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-4 w-4 text-green-400" />
                        <span className="text-green-400 font-medium">2FA Enabled</span>
                      </div>
                      <p className="text-sm text-gray-300">Your account is protected with two-factor authentication.</p>
                      <Button variant="outline" size="sm" className="mt-2 border-green-600 text-green-400">
                        View Recovery Codes
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardHeader>
                  <CardTitle>Active Sessions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { device: "Chrome on Windows", location: "New York, US", current: true },
                      { device: "Safari on iPhone", location: "New York, US", current: false },
                      { device: "Firefox on Mac", location: "San Francisco, US", current: false },
                    ].map((session, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                        <div>
                          <div className="font-medium flex items-center gap-2">
                            {session.device}
                            {session.current && <Badge className="bg-green-600 text-white text-xs">Current</Badge>}
                          </div>
                          <div className="text-sm text-gray-400">{session.location}</div>
                        </div>
                        {!session.current && (
                          <Button variant="outline" size="sm" className="border-red-600 text-red-400">
                            Revoke
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full border-red-600 text-red-400">
                    Sign Out All Devices
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Appearance */}
          <TabsContent value="appearance">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardHeader>
                  <CardTitle>Theme & Display</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium">Theme</Label>
                    <div className="grid grid-cols-3 gap-3 mt-3">
                      {[
                        { id: "light", label: "Light", icon: Sun },
                        { id: "dark", label: "Dark", icon: Moon },
                        { id: "system", label: "System", icon: Monitor },
                      ].map((themeOption) => (
                        <button
                          key={themeOption.id}
                          onClick={() => setTheme(themeOption.id)}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            theme === themeOption.id
                              ? "border-purple-600 bg-purple-900/30"
                              : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                          }`}
                        >
                          <themeOption.icon className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-sm font-medium">{themeOption.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="language">Language</Label>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger className="bg-gray-800/50 border-gray-700">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="zh">中文</SelectItem>
                        <SelectItem value="ja">日本語</SelectItem>
                        <SelectItem value="ko">한국어</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Sound Effects</div>
                      <div className="text-sm text-gray-400">Play sounds for interactions</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Animations</div>
                      <div className="text-sm text-gray-400">Enable smooth animations</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardHeader>
                  <CardTitle>Accessibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">High Contrast</div>
                      <div className="text-sm text-gray-400">Increase color contrast for better visibility</div>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Large Text</div>
                      <div className="text-sm text-gray-400">Increase font size throughout the app</div>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Reduce Motion</div>
                      <div className="text-sm text-gray-400">Minimize animations and transitions</div>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Screen Reader Support</div>
                      <div className="text-sm text-gray-400">Enhanced support for screen readers</div>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Data */}
          <TabsContent value="data">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardHeader>
                  <CardTitle>Data Export</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400">Download your data in various formats for backup or migration.</p>

                  <div className="space-y-3">
                    {[
                      { type: "Profile Data", desc: "Personal information and settings", format: "JSON" },
                      { type: "Collection Data", desc: "Your saved items and collections", format: "CSV" },
                      { type: "Activity History", desc: "Votes, reviews, and interactions", format: "JSON" },
                      { type: "Complete Archive", desc: "All your data in one package", format: "ZIP" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                        <div>
                          <div className="font-medium">{item.type}</div>
                          <div className="text-sm text-gray-400">{item.desc}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="border-gray-600">
                            {item.format}
                          </Badge>
                          <Button variant="outline" size="sm" className="border-purple-600 text-purple-400">
                            <Download className="h-4 w-4 mr-1" />
                            Export
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardHeader>
                  <CardTitle>Storage Usage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { type: "Profile Images", size: "2.4 MB", percentage: 15 },
                      { type: "Collection Data", size: "8.7 MB", percentage: 55 },
                      { type: "Cache & Temp", size: "3.2 MB", percentage: 20 },
                      { type: "Other", size: "1.6 MB", percentage: 10 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{item.type}</span>
                          <span className="text-sm text-gray-400">{item.size}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="h-2 rounded-full bg-purple-600" style={{ width: `${item.percentage}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Total Used</span>
                      <span>15.9 MB / 100 MB</span>
                    </div>
                    <Button variant="outline" className="w-full border-gray-700">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Clear Cache
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
