"use client"

import { SidebarProvider, SidebarInset } from "../components/ui/sidebar"
import { AppSidebar } from "./components/app-sidebar"
import { TopNav } from "./components/top-nav"
import { ThreeDContent } from "./components/three-d-content"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Play, Eye, Clock } from "lucide-react"

export default function YouTubeLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarProvider>
        <div className="flex h-screen">
          <AppSidebar />
          <SidebarInset className="flex flex-1 flex-col">
            <TopNav />

            {/* Main content area */}
            <main className="flex-1 overflow-auto">
              <div className="grid h-full grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                {/* Main video/3D content area */}
                <div className="lg:col-span-2 space-y-4">
                  <Card className="overflow-hidden">
                    <div className="aspect-video relative">
                      <ThreeDContent />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <Badge variant="secondary" className="bg-black/80 text-white">
                          <Play className="h-3 w-3 mr-1" />
                          3D Scene
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h1 className="text-xl font-bold mb-2">Interactive 3D Scene - Geometric Shapes Demo</h1>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          1.2M views
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />2 days ago
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Explore this interactive 3D scene featuring geometric shapes. Use your mouse to rotate, zoom,
                        and pan around the scene. Perfect for learning about 3D graphics and WebGL.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar content */}
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Up Next</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        {
                          title: "Advanced Three.js Techniques",
                          channel: "3D Academy",
                          views: "856K",
                          time: "12:34",
                        },
                        {
                          title: "WebGL Shaders Tutorial",
                          channel: "Code Master",
                          views: "432K",
                          time: "18:22",
                        },
                        {
                          title: "React Three Fiber Basics",
                          channel: "React Pro",
                          views: "1.1M",
                          time: "15:45",
                        },
                      ].map((video, index) => (
                        <div key={index} className="flex gap-3 cursor-pointer hover:bg-accent/50 p-2 rounded">
                          <div className="w-24 h-16 bg-muted rounded flex items-center justify-center">
                            <Play className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-sm line-clamp-2 mb-1">{video.title}</h3>
                            <p className="text-xs text-muted-foreground">{video.channel}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>{video.views} views</span>
                              <span>•</span>
                              <span>{video.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Comments</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        {
                          user: "TechEnthusiast",
                          comment: "Amazing 3D work! The lighting effects are incredible.",
                          time: "2 hours ago",
                        },
                        {
                          user: "WebDev_Pro",
                          comment: "This is exactly what I needed for my project. Thanks!",
                          time: "5 hours ago",
                        },
                      ].map((comment, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground">
                              {comment.user[0]}
                            </div>
                            <span className="font-medium text-sm">{comment.user}</span>
                            <span className="text-xs text-muted-foreground">{comment.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground pl-8">{comment.comment}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
