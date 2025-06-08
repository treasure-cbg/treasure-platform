"use client"

import { useState } from "react"
import { Navbar } from "./components/navbar"
import { ToyCard } from "./components/toy-card"
import { ProductDetail } from "./components/product-detail"
import { BusinessPartnership } from "./components/business-partnership"
import { EventCenter } from "./components/event-center"
import { MarketInsights } from "./components/market-insights"
import { PointsMall } from "./components/points-mall"
import { ProfileCenter } from "./components/profile-center"
import { Discover } from "./components/discover"
import { SearchPage } from "./components/search-page"
import { RankingsPage } from "./components/rankings-page"
import { DetailedUserMap } from "./components/detailed-user-map"
import { LanguageProvider } from "./hooks/use-language"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Award, Globe, Crown, Users, ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { NavigationPage } from "./components/navigation-page"
import { AuthPage } from "./components/auth-page"
import { HelpCenter } from "./components/help-center"
import { DeveloperAPI } from "./components/developer-api"
import { SettingsPage } from "./components/settings-page"
import { NotificationCenter } from "./components/notification-center"
import { FavoritesPage } from "./components/favorites-page"

const mockToys = [
  {
    id: 1,
    rank: 1,
    name: "KAWS Companion",
    brand: "KAWS",
    price: "$299",
    rating: 4.9,
    votes: 12847,
    image: "/placeholder.svg?height=300&width=300",
    category: "figures",
    trend: "up" as const,
    isHot: true,
    growth: 23.5,
  },
  {
    id: 2,
    rank: 2,
    name: "POP MART MOLLY",
    brand: "POP MART",
    price: "$69",
    rating: 4.8,
    votes: 9156,
    image: "/placeholder.svg?height=300&width=300",
    category: "blindBox",
    trend: "same" as const,
    isHot: true,
    growth: 12.3,
  },
  {
    id: 3,
    rank: 3,
    name: "LEGO Architecture",
    brand: "LEGO",
    price: "$89",
    rating: 4.7,
    votes: 7234,
    image: "/placeholder.svg?height=300&width=300",
    category: "blocks",
    trend: "up" as const,
    isHot: true,
    growth: 18.7,
  },
  {
    id: 4,
    rank: 4,
    name: "Bandai Gundam",
    brand: "BANDAI",
    price: "$45",
    rating: 4.6,
    votes: 6543,
    image: "/placeholder.svg?height=300&width=300",
    category: "models",
    trend: "down" as const,
    growth: -5.2,
  },
]

// 模拟热门类别数据
const popularCategories = [
  { name: "Art Toys", count: 245, icon: "🎨" },
  { name: "Blind Box", count: 189, icon: "📦" },
  { name: "Building Blocks", count: 156, icon: "🧱" },
  { name: "Action Figures", count: 132, icon: "🦸" },
  { name: "Plush", count: 98, icon: "🧸" },
]

// 模拟趋势品牌数据
const trendingBrands = [
  { name: "KAWS", growth: "+23%", logo: "/placeholder.svg?height=40&width=40" },
  { name: "POP MART", growth: "+18%", logo: "/placeholder.svg?height=40&width=40" },
  { name: "LEGO", growth: "+12%", logo: "/placeholder.svg?height=40&width=40" },
  { name: "Bandai", growth: "+9%", logo: "/placeholder.svg?height=40&width=40" },
]

function TreasureChamberContent() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
    setSelectedProduct(null)
  }

  // Product Detail View
  if (selectedProduct) {
    return <ProductDetail productId={selectedProduct} onBack={() => setSelectedProduct(null)} />
  }

  // Page Routing
  const renderPage = () => {
    switch (currentPage) {
      case "rankings":
        return <RankingsPage />
      case "partnership":
        return <BusinessPartnership />
      case "events":
        return <EventCenter />
      case "analytics":
        return <MarketInsights />
      case "rewards":
        return <PointsMall />
      case "profile":
        return <ProfileCenter />
      case "discover":
        return <Discover />
      case "search":
        return <SearchPage />
      case "navigation":
        return <NavigationPage onNavigate={handleNavigate} />
      case "auth":
        return <AuthPage />
      case "help":
        return <HelpCenter />
      case "api":
        return <DeveloperAPI />
      case "settings":
        return <SettingsPage />
      case "notifications":
        return <NotificationCenter />
      case "favorites":
        return <FavoritesPage />
      default:
        return (
          <main className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                  Treasure Chamber
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your global treasure hunter — unlocking the most unique treasures from around the world
              </p>
              <div className="flex justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Real-time Rankings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">Expert Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Global Community</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-700/30">
                <CardContent className="p-6 text-center">
                  <Crown className="h-8 w-8 mx-auto mb-3 text-purple-400" />
                  <div className="text-2xl font-bold text-white">1,234</div>
                  <div className="text-sm text-gray-300">Featured Items</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-gray-700/30">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                  <div className="text-2xl font-bold text-white">55.5K</div>
                  <div className="text-sm text-gray-300">Active Hunters</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/50 to-green-800/30 border-green-700/30">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-green-400" />
                  <div className="text-2xl font-bold text-white">+19.2%</div>
                  <div className="text-sm text-gray-300">Average Growth</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/30 border-yellow-700/30">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
                  <div className="text-2xl font-bold text-white">7</div>
                  <div className="text-sm text-gray-300">Active Regions</div>
                </CardContent>
              </Card>
            </div>

            {/* Global User Distribution Map */}
            <div className="mb-16">
              <DetailedUserMap />
            </div>

            {/* Top Rankings Section */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Global Top Rankings</h2>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-400 hover:bg-purple-900/30"
                  onClick={() => handleNavigate("rankings")}
                >
                  View All Rankings
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mockToys.map((toy) => (
                  <div key={toy.id} onClick={() => setSelectedProduct(toy.id.toString())} className="cursor-pointer">
                    <ToyCard {...toy} />
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Categories */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {popularCategories.map((category, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900/50 border-purple-900/30 hover:border-purple-600 transition-all cursor-pointer"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">{category.icon}</div>
                      <h3 className="font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm text-gray-400">{category.count} items</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Trending Brands */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Trending Brands</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {trendingBrands.map((brand, index) => (
                  <Card key={index} className="bg-gray-900/50 border-purple-900/30">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-gray-800 overflow-hidden">
                          <img
                            src={brand.logo || "/placeholder.svg"}
                            alt={brand.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{brand.name}</h3>
                          <Badge className="bg-green-900/50 text-green-300 border-green-700">{brand.growth}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 border-purple-700/30">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Discover More Treasures</h2>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Explore our comprehensive rankings system with advanced filters, trending data, and expert insights.
                  </p>
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                    onClick={() => handleNavigate("rankings")}
                  >
                    Explore Full Rankings
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </main>
        )
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  )
}

export default function TreasureChamber() {
  return (
    <LanguageProvider>
      <TreasureChamberContent />
    </LanguageProvider>
  )
}
