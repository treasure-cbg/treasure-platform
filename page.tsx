"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TopNav } from "@/components/top-nav"
import { ThreeDContent } from "@/components/three-d-content"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Eye, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarProvider>
        <div className="flex h-screen">
          <AppSidebar />
          <SidebarInset className="flex flex-1 flex-col">
            <TopNav />
            <main className="flex-1 overflow-auto">
              <div className="grid h-full grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                {/* 3D 内容模块 */}
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

                {/* 侧栏推荐和评论模块 */}
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Up Next</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* 省略推荐内容和评论 map，和你已有的一样 */}
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
