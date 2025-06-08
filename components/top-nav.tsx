"use client"

import { Search, Mic, Video, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center pl-2 pr-4">
        {/* Left section - Logo and menu */}
        <div className="flex items-center gap-2">
          <SidebarTrigger className="h-8 w-8" />
          <div className="flex items-center gap-1">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-red-600">
              <Video className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-semibold">ViewTube</span>
          </div>
        </div>

        {/* Center section - Search */}
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="flex w-full max-w-2xl items-center">
            <div className="flex flex-1 items-center">
              <Input
                type="search"
                placeholder="Search"
                className="h-10 rounded-l-full rounded-r-none border-r-0 bg-background pl-4 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button
                size="sm"
                className="h-10 rounded-l-none rounded-r-full border border-l-0 bg-muted hover:bg-muted/80"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <Button size="sm" variant="ghost" className="ml-2 h-10 w-10 rounded-full">
              <Mic className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right section - User actions */}
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" className="h-10 w-10 rounded-full">
            <Video className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" className="h-10 w-10 rounded-full">
            <Bell className="h-4 w-4" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
