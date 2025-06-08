"use client"

import {
  Home,
  Compass,
  PlaySquare,
  Clock,
  ThumbsUp,
  Download,
  Flame,
  Music,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Settings,
  HelpCircle,
  Flag,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "../components/ui/sidebar"

const mainNavItems = [
  { title: "Home", icon: Home, url: "#" },
  { title: "Explore", icon: Compass, url: "#" },
  { title: "Subscriptions", icon: PlaySquare, url: "#" },
]

const libraryItems = [
  { title: "History", icon: Clock, url: "#" },
  { title: "Liked videos", icon: ThumbsUp, url: "#" },
  { title: "Downloads", icon: Download, url: "#" },
]

const exploreItems = [
  { title: "Trending", icon: Flame, url: "#" },
  { title: "Music", icon: Music, url: "#" },
  { title: "Gaming", icon: Gamepad2, url: "#" },
  { title: "News", icon: Newspaper, url: "#" },
  { title: "Sports", icon: Trophy, url: "#" },
  { title: "Learning", icon: Lightbulb, url: "#" },
  { title: "Fashion", icon: Shirt, url: "#" },
]

const moreItems = [
  { title: "Settings", icon: Settings, url: "#" },
  { title: "Help", icon: HelpCircle, url: "#" },
  { title: "Send feedback", icon: Flag, url: "#" },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border/40">
      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10 hover:bg-accent/50">
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold text-muted-foreground">Library</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {libraryItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10 hover:bg-accent/50">
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold text-muted-foreground">Explore</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {exploreItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10 hover:bg-accent/50">
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {moreItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10 hover:bg-accent/50">
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
