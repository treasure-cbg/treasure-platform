"use client"

import { useState } from "react"
import { Bell, Check, X, Trophy, Users, Calendar, Award, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

interface Notification {
  id: string
  type: "ranking" | "social" | "event" | "system" | "achievement"
  title: string
  message: string
  time: string
  read: boolean
  actionable?: boolean
  data?: any
}

export function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "ranking",
      title: "KAWS Companion moved to #1!",
      message: "Your favorite item just reached the top of the rankings",
      time: "2 minutes ago",
      read: false,
      actionable: true,
    },
    {
      id: "2",
      type: "social",
      title: "New follower",
      message: "CollectorPro started following you",
      time: "1 hour ago",
      read: false,
      actionable: true,
    },
    {
      id: "3",
      type: "achievement",
      title: "Achievement unlocked!",
      message: "You've earned the 'Trend Spotter' badge for early voting",
      time: "3 hours ago",
      read: false,
    },
    {
      id: "4",
      type: "event",
      title: "Global Treasure Hunt starts tomorrow",
      message: "Don't miss the biggest event of the year! Registration closes in 12 hours.",
      time: "6 hours ago",
      read: true,
      actionable: true,
    },
    {
      id: "5",
      type: "system",
      title: "Weekly ranking summary",
      message: "Your votes helped 3 items climb the rankings this week",
      time: "1 day ago",
      read: true,
    },
  ])

  const [filter, setFilter] = useState<"all" | "unread" | "ranking" | "social" | "event" | "system" | "achievement">(
    "all",
  )

  const getIcon = (type: string) => {
    switch (type) {
      case "ranking":
        return Trophy
      case "social":
        return Users
      case "event":
        return Calendar
      case "system":
        return Bell
      case "achievement":
        return Award
      default:
        return Bell
    }
  }

  const getColor = (type: string) => {
    switch (type) {
      case "ranking":
        return "text-yellow-400"
      case "social":
        return "text-blue-400"
      case "event":
        return "text-green-400"
      case "system":
        return "text-gray-400"
      case "achievement":
        return "text-purple-400"
      default:
        return "text-gray-400"
    }
  }

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
  }

  const filteredNotifications = notifications.filter((notif) => {
    if (filter === "all") return true
    if (filter === "unread") return !notif.read
    return notif.type === filter
  })

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Notifications
              </span>
            </h1>
            <p className="text-gray-400">
              Stay updated with the latest activities and announcements
              {unreadCount > 0 && <Badge className="ml-2 bg-red-600 text-white">{unreadCount} unread</Badge>}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={markAllAsRead} disabled={unreadCount === 0}>
              <Check className="h-4 w-4 mr-2" />
              Mark All Read
            </Button>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        <Tabs defaultValue="notifications" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-900/50 mb-8">
            <TabsTrigger value="notifications" className="data-[state=active]:bg-purple-900/50">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-purple-900/50">
              <Settings className="h-4 w-4 mr-2" />
              Notification Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="notifications">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Filters */}
              <div className="lg:col-span-1">
                <Card className="bg-gray-900/50 border-purple-900/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Filters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        { id: "all", label: "All", count: notifications.length },
                        { id: "unread", label: "Unread", count: unreadCount },
                        {
                          id: "ranking",
                          label: "Rankings",
                          count: notifications.filter((n) => n.type === "ranking").length,
                        },
                        {
                          id: "social",
                          label: "Social",
                          count: notifications.filter((n) => n.type === "social").length,
                        },
                        { id: "event", label: "Events", count: notifications.filter((n) => n.type === "event").length },
                        {
                          id: "achievement",
                          label: "Achievements",
                          count: notifications.filter((n) => n.type === "achievement").length,
                        },
                        {
                          id: "system",
                          label: "System",
                          count: notifications.filter((n) => n.type === "system").length,
                        },
                      ].map((filterOption) => (
                        <button
                          key={filterOption.id}
                          onClick={() => setFilter(filterOption.id as any)}
                          className={`w-full text-left p-3 rounded-lg transition-all ${
                            filter === filterOption.id
                              ? "bg-purple-900/50 border border-purple-600"
                              : "hover:bg-gray-800/50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{filterOption.label}</span>
                            <Badge variant="outline" className="border-gray-600 text-gray-300">
                              {filterOption.count}
                            </Badge>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Notifications List */}
              <div className="lg:col-span-3">
                <div className="space-y-4">
                  {filteredNotifications.length === 0 ? (
                    <Card className="bg-gray-900/50 border-purple-900/30">
                      <CardContent className="p-12 text-center">
                        <Bell className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                        <h3 className="text-lg font-medium mb-2">No notifications</h3>
                        <p className="text-gray-400">You're all caught up! Check back later for updates.</p>
                      </CardContent>
                    </Card>
                  ) : (
                    filteredNotifications.map((notification) => {
                      const Icon = getIcon(notification.type)
                      const iconColor = getColor(notification.type)

                      return (
                        <Card
                          key={notification.id}
                          className={`bg-gray-900/50 border-purple-900/30 transition-all hover:border-purple-600/50 ${
                            !notification.read ? "border-l-4 border-l-purple-600" : ""
                          }`}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className={`p-2 rounded-lg bg-gray-800/50 ${iconColor}`}>
                                <Icon className="h-5 w-5" />
                              </div>

                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <h3
                                    className={`font-semibold ${!notification.read ? "text-white" : "text-gray-300"}`}
                                  >
                                    {notification.title}
                                  </h3>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-400">{notification.time}</span>
                                    {!notification.read && <div className="w-2 h-2 bg-purple-600 rounded-full" />}
                                  </div>
                                </div>

                                <p className="text-gray-400 mb-3">{notification.message}</p>

                                <div className="flex items-center gap-2">
                                  {notification.actionable && (
                                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                                      View Details
                                    </Button>
                                  )}
                                  {!notification.read && (
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => markAsRead(notification.id)}
                                      className="border-gray-700"
                                    >
                                      <Check className="h-4 w-4 mr-1" />
                                      Mark Read
                                    </Button>
                                  )}
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => deleteNotification(notification.id)}
                                    className="border-red-600 text-red-400 hover:bg-red-900/30"
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardHeader>
                  <CardTitle>Push Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      key: "rankings",
                      label: "Ranking Changes",
                      desc: "When items you follow change position",
                      icon: Trophy,
                    },
                    { key: "social", label: "Social Activity", desc: "Follows, likes, and comments", icon: Users },
                    {
                      key: "events",
                      label: "Events & Competitions",
                      desc: "Event updates and reminders",
                      icon: Calendar,
                    },
                    { key: "achievements", label: "Achievements", desc: "When you unlock new badges", icon: Award },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-purple-400" />
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-sm text-gray-400">{item.desc}</div>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { key: "digest", label: "Daily Digest", desc: "Summary of daily activities" },
                    { key: "weekly", label: "Weekly Report", desc: "Your weekly ranking performance" },
                    { key: "marketing", label: "Marketing Updates", desc: "Product news and promotions" },
                    { key: "security", label: "Security Alerts", desc: "Account security notifications" },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-gray-400">{item.desc}</div>
                      </div>
                      <Switch defaultChecked={item.key !== "marketing"} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
