"use client"

import {
  Trophy,
  Search,
  Users,
  Briefcase,
  Calendar,
  BarChart3,
  Gift,
  Heart,
  User,
  Settings,
  HelpCircle,
  Code,
  Shield,
  Palette,
  Crown,
  Star,
  Globe,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NavigationPageProps {
  onNavigate?: (page: string) => void
}

export function NavigationPage({ onNavigate }: NavigationPageProps) {
  const navigationSections = [
    {
      title: "Core Features",
      description: "Essential platform features",
      items: [
        {
          name: "Rankings",
          description: "Global treasure rankings with advanced filters",
          icon: Trophy,
          page: "rankings",
          color: "purple",
          badge: "Hot",
        },
        {
          name: "Search & Discovery",
          description: "Intelligent search with AI-powered recommendations",
          icon: Search,
          page: "search",
          color: "blue",
          badge: "New",
        },
        {
          name: "Community Hub",
          description: "Connect with fellow treasure hunters worldwide",
          icon: Users,
          page: "discover",
          color: "green",
        },
        {
          name: "Market Insights",
          description: "Comprehensive market data and analytics",
          icon: BarChart3,
          page: "analytics",
          color: "amber",
          badge: "Pro",
        },
      ],
    },
    {
      title: "Business & Partnership",
      description: "Professional services and collaborations",
      items: [
        {
          name: "Business Partnership",
          description: "Partner with leading brands and companies",
          icon: Briefcase,
          page: "partnership",
          color: "indigo",
        },
        {
          name: "Event Center",
          description: "Exclusive events, competitions, and experiences",
          icon: Calendar,
          page: "events",
          color: "pink",
        },
        {
          name: "Creator Portal",
          description: "Tools and resources for designers and creators",
          icon: Palette,
          page: "creators",
          color: "orange",
        },
        {
          name: "Enterprise Solutions",
          description: "Custom solutions for large organizations",
          icon: Crown,
          page: "enterprise",
          color: "violet",
          badge: "Enterprise",
        },
      ],
    },
    {
      title: "User Experience",
      description: "Personal features and customization",
      items: [
        {
          name: "Rewards Mall",
          description: "Exchange points for exclusive items and perks",
          icon: Gift,
          page: "rewards",
          color: "red",
        },
        {
          name: "Profile Center",
          description: "Manage your profile, achievements, and collections",
          icon: User,
          page: "profile",
          color: "cyan",
        },
        {
          name: "Favorites & Wishlist",
          description: "Save and organize your favorite treasures",
          icon: Heart,
          page: "favorites",
          color: "rose",
        },
        {
          name: "User Titles & Achievements",
          description: "Unlock titles and showcase your expertise",
          icon: Star,
          page: "titles",
          color: "yellow",
        },
      ],
    },
    {
      title: "Platform Tools",
      description: "Advanced tools and utilities",
      items: [
        {
          name: "Trend Analysis",
          description: "Real-time trend tracking and predictions",
          icon: TrendingUp,
          page: "trends",
          color: "emerald",
          badge: "Beta",
        },
        {
          name: "Price Tracker",
          description: "Monitor price changes and get alerts",
          icon: Target,
          page: "price-tracker",
          color: "teal",
        },
        {
          name: "Global Leaderboards",
          description: "Compete with collectors worldwide",
          icon: Globe,
          page: "leaderboards",
          color: "sky",
        },
        {
          name: "AI Recommendations",
          description: "Personalized treasure recommendations",
          icon: Zap,
          page: "ai-recommendations",
          color: "purple",
          badge: "AI",
        },
      ],
    },
    {
      title: "Support & Resources",
      description: "Help, documentation, and developer tools",
      items: [
        {
          name: "Help Center",
          description: "FAQs, guides, and customer support",
          icon: HelpCircle,
          page: "help",
          color: "gray",
        },
        {
          name: "Developer API",
          description: "Integrate our data into your applications",
          icon: Code,
          page: "api",
          color: "slate",
        },
        {
          name: "Settings & Privacy",
          description: "Account settings and privacy controls",
          icon: Settings,
          page: "settings",
          color: "zinc",
        },
        {
          name: "Security Center",
          description: "Account security and verification",
          icon: Shield,
          page: "security",
          color: "neutral",
        },
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      purple: "from-purple-600 to-purple-700 border-purple-700/30",
      blue: "from-blue-600 to-blue-700 border-blue-700/30",
      green: "from-green-600 to-green-700 border-green-700/30",
      amber: "from-amber-600 to-amber-700 border-amber-700/30",
      indigo: "from-indigo-600 to-indigo-700 border-indigo-700/30",
      pink: "from-pink-600 to-pink-700 border-pink-700/30",
      orange: "from-orange-600 to-orange-700 border-orange-700/30",
      violet: "from-violet-600 to-violet-700 border-violet-700/30",
      red: "from-red-600 to-red-700 border-red-700/30",
      cyan: "from-cyan-600 to-cyan-700 border-cyan-700/30",
      rose: "from-rose-600 to-rose-700 border-rose-700/30",
      yellow: "from-yellow-600 to-yellow-700 border-yellow-700/30",
      emerald: "from-emerald-600 to-emerald-700 border-emerald-700/30",
      teal: "from-teal-600 to-teal-700 border-teal-700/30",
      sky: "from-sky-600 to-sky-700 border-sky-700/30",
      gray: "from-gray-600 to-gray-700 border-gray-700/30",
      slate: "from-slate-600 to-slate-700 border-slate-700/30",
      zinc: "from-zinc-600 to-zinc-700 border-zinc-700/30",
      neutral: "from-neutral-600 to-neutral-700 border-neutral-700/30",
    }
    return colorMap[color] || colorMap.purple
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Platform Navigation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore all features and tools available on Treasure Chamber
          </p>
        </div>

        {/* Navigation Sections */}
        <div className="space-y-16">
          {navigationSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
                <p className="text-gray-400">{section.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className="bg-gray-900/50 border-purple-900/30 hover:border-purple-600/50 transition-all duration-300 cursor-pointer group"
                    onClick={() => onNavigate?.(item.page)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${getColorClasses(item.color)}`}>
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        {item.badge && <Badge className="bg-purple-600 text-white text-xs">{item.badge}</Badge>}
                      </div>

                      <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 pt-16 border-t border-purple-900/30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-700/30 text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-white mb-2">25+</div>
                <div className="text-sm text-gray-300">Core Features</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-blue-700/30 text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-white mb-2">5</div>
                <div className="text-sm text-gray-300">Main Categories</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-900/50 to-green-800/30 border-green-700/30 text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Uptime</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-900/50 to-amber-800/30 border-amber-700/30 text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
