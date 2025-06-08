"use client"

import { Search, Heart, Menu, Trophy, Gift, ChevronDown, Briefcase, Calendar, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LanguageSwitcher } from "./language-switcher"

interface NavbarProps {
  onNavigate?: (page: string) => void
}

export function Navbar({ onNavigate }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-purple-900/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate?.("home")}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Treasure Chamber
              </span>
              <span className="text-xs text-gray-400">Global Treasure Rankings</span>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full" onClick={() => onNavigate?.("search")}>
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search treasures, brands, creators..."
                className="pl-10 bg-gray-900/50 border-purple-800/30 text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:border-purple-500 cursor-pointer"
                readOnly
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:flex text-gray-300 hover:text-white hover:bg-purple-900/30"
              onClick={() => onNavigate?.("rankings")}
            >
              Rankings
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden lg:flex text-gray-300 hover:text-white hover:bg-purple-900/30 gap-1"
                >
                  Community
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900 border-purple-800/30">
                <DropdownMenuItem
                  className="text-gray-300 hover:text-white hover:bg-purple-900/30"
                  onClick={() => onNavigate?.("discover")}
                >
                  Discover
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-gray-300 hover:text-white hover:bg-purple-900/30"
                  onClick={() => onNavigate?.("creators")}
                >
                  Creator Portal
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-gray-300 hover:text-white hover:bg-purple-900/30"
                  onClick={() => onNavigate?.("business")}
                >
                  Business Hub
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden lg:flex text-gray-300 hover:text-white hover:bg-purple-900/30 gap-1"
                >
                  More
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900 border-purple-800/30">
                <DropdownMenuItem
                  className="text-gray-300 hover:text-white hover:bg-purple-900/30 flex items-center gap-2"
                  onClick={() => onNavigate?.("events")}
                >
                  <Calendar className="h-4 w-4" />
                  Event Center
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-gray-300 hover:text-white hover:bg-purple-900/30 flex items-center gap-2"
                  onClick={() => onNavigate?.("partnership")}
                >
                  <Briefcase className="h-4 w-4" />
                  Business Partnership
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-gray-300 hover:text-white hover:bg-purple-900/30 flex items-center gap-2"
                  onClick={() => onNavigate?.("analytics")}
                >
                  <BarChart3 className="h-4 w-4" />
                  Market Insights
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-purple-800/30" />
                <DropdownMenuItem
                  className="text-gray-300 hover:text-white hover:bg-purple-900/30"
                  onClick={() => onNavigate?.("help")}
                >
                  Help Center
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-gray-300 hover:text-white hover:bg-purple-900/30"
                  onClick={() => onNavigate?.("api")}
                >
                  Developer API
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:flex text-gray-300 hover:text-white hover:bg-purple-900/30 relative"
              onClick={() => onNavigate?.("rewards")}
            >
              <Gift className="h-4 w-4 mr-2" />
              Rewards
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-purple-600">3</Badge>
            </Button>

            <LanguageSwitcher />

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-purple-900/30 relative"
            >
              <Heart className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-purple-600">12</Badge>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="text-right hidden md:block">
                    <div className="text-sm font-medium text-white">1,234</div>
                    <div className="text-xs text-gray-400">Points</div>
                  </div>
                  <Avatar className="h-8 w-8 border border-purple-600">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback className="bg-purple-900 text-white">U</AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gray-900 border-purple-800/30">
                <DropdownMenuLabel className="text-gray-300">
                  <div className="flex flex-col">
                    <span>Treasure Hunter</span>
                    <span className="text-xs text-gray-400">Level 5</span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-purple-800/30" />
                <DropdownMenuItem
                  className="text-gray-300 hover:text-white hover:bg-purple-900/30"
                  onClick={() => onNavigate?.("profile")}
                >
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-gray-300 hover:text-white hover:bg-purple-900/30"
                  onClick={() => onNavigate?.("titles")}
                >
                  My Titles
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-purple-900/30">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-purple-800/30" />
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-purple-900/30">
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-white">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
