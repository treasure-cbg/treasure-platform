"use client"

import { useState } from "react"
import {
  Trophy,
  TrendingUp,
  Crown,
  Star,
  Heart,
  Eye,
  Calendar,
  Globe,
  BarChart3,
  Users,
  Zap,
  Award,
  Target,
  Flame,
  Clock,
  ArrowUp,
  ArrowDown,
  Minus,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ToyCard } from "./toy-card"
import { cn } from "@/lib/utils"

// 在文件顶部导入排名比较组件
import { RankingComparison } from "./ranking-comparison"
import { RankingTrends } from "./ranking-trends"

// 模拟排名数据
const mockRankingData = {
  overall: [
    {
      id: 1,
      rank: 1,
      previousRank: 3,
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
      weeklyViews: 45600,
      totalSales: 8900,
      releaseDate: "2023-10-15",
      region: "Global",
    },
    {
      id: 2,
      rank: 2,
      previousRank: 2,
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
      weeklyViews: 38200,
      totalSales: 15600,
      releaseDate: "2023-09-20",
      region: "Asia",
    },
    {
      id: 3,
      rank: 3,
      previousRank: 1,
      name: "LEGO Architecture",
      brand: "LEGO",
      price: "$89",
      rating: 4.7,
      votes: 7234,
      image: "/placeholder.svg?height=300&width=300",
      category: "blocks",
      trend: "down" as const,
      growth: -5.2,
      weeklyViews: 32100,
      totalSales: 12300,
      releaseDate: "2023-08-10",
      region: "Europe",
    },
    {
      id: 4,
      rank: 4,
      previousRank: 6,
      name: "Bandai Gundam",
      brand: "BANDAI",
      price: "$45",
      rating: 4.6,
      votes: 6543,
      image: "/placeholder.svg?height=300&width=300",
      category: "models",
      trend: "up" as const,
      isHot: true,
      growth: 18.7,
      weeklyViews: 28900,
      totalSales: 9800,
      releaseDate: "2023-11-05",
      region: "Asia",
    },
    {
      id: 5,
      rank: 5,
      previousRank: 4,
      name: "Funko Pop Batman",
      brand: "Funko",
      price: "$15",
      rating: 4.5,
      votes: 5432,
      image: "/placeholder.svg?height=300&width=300",
      category: "figures",
      trend: "down" as const,
      growth: -8.1,
      weeklyViews: 25600,
      totalSales: 18900,
      releaseDate: "2023-07-22",
      region: "North America",
    },
  ],
  trending: [
    {
      id: 6,
      rank: 1,
      name: "Limited Edition KAWS Holiday",
      brand: "KAWS",
      price: "$599",
      rating: 4.9,
      votes: 3456,
      image: "/placeholder.svg?height=300&width=300",
      category: "figures",
      growth: 156.7,
      isNew: true,
    },
    {
      id: 7,
      rank: 2,
      name: "Bearbrick 1000%",
      brand: "Medicom Toy",
      price: "$450",
      rating: 4.8,
      votes: 2890,
      image: "/placeholder.svg?height=300&width=300",
      category: "figures",
      growth: 89.3,
      isNew: false,
    },
  ],
  newReleases: [
    {
      id: 8,
      rank: 1,
      name: "Dragon Ball Z Goku",
      brand: "Bandai",
      price: "$75",
      rating: 4.7,
      votes: 1234,
      image: "/placeholder.svg?height=300&width=300",
      category: "figures",
      releaseDate: "2024-01-15",
      preOrders: 5600,
    },
  ],
}

// 排名类别配置
const rankingCategories = [
  {
    id: "overall",
    name: "Overall Rankings",
    icon: Trophy,
    description: "Comprehensive ranking based on all metrics",
    color: "purple",
  },
  {
    id: "trending",
    name: "Trending Now",
    icon: TrendingUp,
    description: "Fastest growing items this week",
    color: "green",
  },
  {
    id: "newReleases",
    name: "New Releases",
    icon: Zap,
    description: "Latest additions to the market",
    color: "blue",
  },
  {
    id: "topRated",
    name: "Top Rated",
    icon: Star,
    description: "Highest rated by community",
    color: "yellow",
  },
  {
    id: "mostVoted",
    name: "Most Voted",
    icon: Users,
    description: "Most community engagement",
    color: "pink",
  },
  {
    id: "pricePerformance",
    name: "Best Value",
    icon: Target,
    description: "Best price-to-quality ratio",
    color: "orange",
  },
]

// 时间范围选项
const timeRanges = [
  { id: "daily", name: "Daily", icon: Clock },
  { id: "weekly", name: "Weekly", icon: Calendar },
  { id: "monthly", name: "Monthly", icon: BarChart3 },
  { id: "yearly", name: "Yearly", icon: Award },
]

// 地区选项
const regions = [
  { id: "global", name: "Global", flag: "🌍" },
  { id: "asia", name: "Asia", flag: "🌏" },
  { id: "europe", name: "Europe", flag: "🇪🇺" },
  { id: "northAmerica", name: "North America", flag: "🇺🇸" },
  { id: "oceania", name: "Oceania", flag: "🇦🇺" },
]

export function RankingsPage() {
  const [activeCategory, setActiveCategory] = useState("overall")
  const [activeTimeRange, setActiveTimeRange] = useState("weekly")
  const [activeRegion, setActiveRegion] = useState("global")
  const [viewMode, setViewMode] = useState<"cards" | "list">("cards")

  // 获取排名变化图标
  const getRankChangeIcon = (current: number, previous: number) => {
    if (current < previous) {
      return <ArrowUp className="h-4 w-4 text-green-400" />
    } else if (current > previous) {
      return <ArrowDown className="h-4 w-4 text-red-400" />
    }
    return <Minus className="h-4 w-4 text-gray-400" />
  }

  // 获取排名变化数值
  const getRankChange = (current: number, previous: number) => {
    const change = previous - current
    if (change > 0) return `+${change}`
    if (change < 0) return change.toString()
    return "0"
  }

  // 获取当前数据
  const getCurrentData = () => {
    switch (activeCategory) {
      case "trending":
        return mockRankingData.trending
      case "newReleases":
        return mockRankingData.newReleases
      default:
        return mockRankingData.overall
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Global Rankings
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the most coveted treasures ranked by our global community of collectors and experts.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-700/30">
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 mx-auto mb-3 text-purple-400" />
              <div className="text-2xl font-bold text-white">1,234</div>
              <div className="text-sm text-gray-300">Ranked Items</div>
              <div className="text-xs text-green-400 mt-1">+12% this week</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/50 to-green-800/30 border-green-700/30">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-green-400" />
              <div className="text-2xl font-bold text-white">892K</div>
              <div className="text-sm text-gray-300">Total Votes</div>
              <div className="text-xs text-green-400 mt-1">+8.5% this week</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-blue-700/30">
            <CardContent className="p-6 text-center">
              <Eye className="h-8 w-8 mx-auto mb-3 text-blue-400" />
              <div className="text-2xl font-bold text-white">2.1M</div>
              <div className="text-sm text-gray-300">Weekly Views</div>
              <div className="text-xs text-green-400 mt-1">+15.2% this week</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-900/50 to-amber-800/30 border-amber-700/30">
            <CardContent className="p-6 text-center">
              <Flame className="h-8 w-8 mx-auto mb-3 text-amber-400" />
              <div className="text-2xl font-bold text-white">156</div>
              <div className="text-sm text-gray-300">Trending Items</div>
              <div className="text-xs text-green-400 mt-1">+23% this week</div>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Category Selection */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Ranking Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {rankingCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={cn(
                    "flex flex-col items-center gap-2 h-auto py-4",
                    activeCategory === category.id
                      ? `bg-gradient-to-r from-${category.color}-600 to-${category.color}-700`
                      : `border-${category.color}-600/50 text-${category.color}-400 hover:bg-${category.color}-900/30`,
                  )}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <category.icon className="h-5 w-5" />
                  <span className="text-xs text-center">{category.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Time Range & Region Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Time Range:</span>
            <div className="flex gap-1">
              {timeRanges.map((range) => (
                <Button
                  key={range.id}
                  variant={activeTimeRange === range.id ? "default" : "outline"}
                  size="sm"
                  className={
                    activeTimeRange === range.id ? "bg-purple-600" : "border-gray-700 text-gray-300 hover:bg-gray-800"
                  }
                  onClick={() => setActiveTimeRange(range.id)}
                >
                  <range.icon className="h-4 w-4 mr-1" />
                  {range.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Region:</span>
            <div className="flex gap-1">
              {regions.map((region) => (
                <Button
                  key={region.id}
                  variant={activeRegion === region.id ? "default" : "outline"}
                  size="sm"
                  className={
                    activeRegion === region.id ? "bg-purple-600" : "border-gray-700 text-gray-300 hover:bg-gray-800"
                  }
                  onClick={() => setActiveRegion(region.id)}
                >
                  <span className="mr-1">{region.flag}</span>
                  {region.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <Button
              variant={viewMode === "cards" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("cards")}
            >
              Cards
            </Button>
            <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
              List
            </Button>
          </div>
        </div>

        {/* Advanced Filters */}
        <Card className="mb-8 bg-gray-900/50 border-purple-900/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Advanced Filters</h3>
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300">
                Reset Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Price Range */}
              <div>
                <h4 className="text-sm text-gray-400 mb-2">Price Range</h4>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-800 rounded px-3 py-1 text-sm flex-1">$0</div>
                  <span className="text-gray-400">to</span>
                  <div className="bg-gray-800 rounded px-3 py-1 text-sm flex-1">$1000+</div>
                </div>
              </div>

              {/* Rating */}
              <div>
                <h4 className="text-sm text-gray-400 mb-2">Rating</h4>
                <div className="flex items-center gap-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <Button
                      key={rating}
                      variant="outline"
                      size="sm"
                      className="border-gray-700 text-gray-300 flex items-center gap-1"
                    >
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {rating}+
                    </Button>
                  ))}
                </div>
              </div>

              {/* Release Date */}
              <div>
                <h4 className="text-sm text-gray-400 mb-2">Release Date</h4>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="border-gray-700 text-gray-300">
                    This Year
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-700 text-gray-300">
                    Last Year
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-700 text-gray-300">
                    All Time
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {/* Brands */}
              <div>
                <h4 className="text-sm text-gray-400 mb-2">Brands</h4>
                <div className="flex flex-wrap gap-2">
                  {["KAWS", "POP MART", "LEGO", "Bandai", "Funko", "Hot Toys"].map((brand) => (
                    <Badge
                      key={brand}
                      variant="outline"
                      className="border-gray-700 text-gray-300 cursor-pointer hover:bg-gray-800"
                    >
                      {brand}
                    </Badge>
                  ))}
                  <Badge variant="outline" className="border-gray-700 text-gray-300">
                    +More
                  </Badge>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-sm text-gray-400 mb-2">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {["Art Toys", "Blind Box", "Building Blocks", "Action Figures", "Plush"].map((category) => (
                    <Badge
                      key={category}
                      variant="outline"
                      className="border-gray-700 text-gray-300 cursor-pointer hover:bg-gray-800"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <h4 className="text-sm text-gray-400 mb-2">Availability</h4>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="border-gray-700 text-gray-300">
                    In Stock
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-700 text-gray-300">
                    Pre-order
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-700 text-gray-300">
                    All
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700">Apply Filters</Button>
            </div>
          </CardContent>
        </Card>

        {/* Current Category Info */}
        <div className="mb-8">
          {rankingCategories.map((category) => {
            if (category.id === activeCategory) {
              return (
                <Card key={category.id} className={`bg-${category.color}-900/20 border-${category.color}-700/30`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${category.color}-600`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{category.name}</h2>
                        <p className="text-gray-300">{category.description}</p>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="text-sm text-gray-400">Last Updated</div>
                        <div className="text-sm font-medium">
                          {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            }
            return null
          })}
        </div>

        {/* Rankings Content */}
        <div className="space-y-8">
          {/* Top 3 Podium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {getCurrentData()
              .slice(0, 3)
              .map((item, index) => {
                const position = index + 1
                const heights = ["h-32", "h-40", "h-28"]
                const colors = [
                  "from-yellow-600 to-yellow-700",
                  "from-gray-300 to-gray-400",
                  "from-amber-600 to-amber-700",
                ]

                return (
                  <Card key={item.id} className="bg-gray-900/50 border-purple-900/30 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${colors[index]} ${heights[index]} flex items-center justify-center`}
                    >
                      <div className="text-center text-white">
                        <Crown className="h-8 w-8 mx-auto mb-2" />
                        <div className="text-2xl font-bold">#{position}</div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="h-16 w-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <p className="text-gray-400">{item.brand}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-sm">{item.rating}</span>
                            <span className="text-sm text-gray-400">({item.votes.toLocaleString()})</span>
                          </div>
                        </div>
                      </div>

                      {item.previousRank && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Rank Change:</span>
                          <div className="flex items-center gap-1">
                            {getRankChangeIcon(item.rank, item.previousRank)}
                            <span
                              className={
                                item.rank < item.previousRank
                                  ? "text-green-400"
                                  : item.rank > item.previousRank
                                    ? "text-red-400"
                                    : "text-gray-400"
                              }
                            >
                              {getRankChange(item.rank, item.previousRank)}
                            </span>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
          </div>

          {/* Full Rankings */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Complete Rankings</h2>
              <div className="text-sm text-gray-400">Showing {getCurrentData().length} items • Updated every hour</div>
            </div>

            {viewMode === "cards" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getCurrentData().map((item) => (
                  <div key={item.id} className="relative">
                    <ToyCard {...item} />
                    {/* Additional ranking info overlay */}
                    <div className="absolute top-2 left-2 z-10">
                      <Badge className="bg-black/80 text-white border-0">#{item.rank}</Badge>
                    </div>
                    {item.previousRank && (
                      <div className="absolute top-2 right-2 z-10">
                        <Badge
                          className={cn(
                            "border-0",
                            item.rank < item.previousRank
                              ? "bg-green-600"
                              : item.rank > item.previousRank
                                ? "bg-red-600"
                                : "bg-gray-600",
                          )}
                        >
                          {getRankChangeIcon(item.rank, item.previousRank)}
                          {getRankChange(item.rank, item.previousRank)}
                        </Badge>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {getCurrentData().map((item) => (
                  <Card key={item.id} className="bg-gray-900/50 border-purple-900/30">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        {/* Rank */}
                        <div className="text-center min-w-[60px]">
                          <div className="text-2xl font-bold text-purple-400">#{item.rank}</div>
                          {item.previousRank && (
                            <div className="flex items-center justify-center gap-1 text-sm">
                              {getRankChangeIcon(item.rank, item.previousRank)}
                              <span
                                className={
                                  item.rank < item.previousRank
                                    ? "text-green-400"
                                    : item.rank > item.previousRank
                                      ? "text-red-400"
                                      : "text-gray-400"
                                }
                              >
                                {getRankChange(item.rank, item.previousRank)}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Image */}
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="h-20 w-20 rounded-lg object-cover"
                        />

                        {/* Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                              <p className="text-gray-400 mb-2">{item.brand}</p>
                              <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                  <span>{item.rating}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4 text-blue-400" />
                                  <span>{item.votes.toLocaleString()}</span>
                                </div>
                                {item.weeklyViews && (
                                  <div className="flex items-center gap-1">
                                    <Eye className="h-4 w-4 text-green-400" />
                                    <span>{item.weeklyViews.toLocaleString()}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-purple-400">{item.price}</div>
                              {item.growth !== undefined && (
                                <div className={`text-sm ${item.growth > 0 ? "text-green-400" : "text-red-400"}`}>
                                  {item.growth > 0 ? "+" : ""}
                                  {item.growth}%
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-2">
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            <Heart className="h-4 w-4 mr-1" />
                            Vote
                          </Button>
                          <Button size="sm" variant="outline" className="border-gray-700">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Ranking Comparison */}
        <div className="mt-16">
          <RankingComparison />
        </div>

        {/* Ranking Trends */}
        <div className="mt-16">
          <RankingTrends />
        </div>

        {/* Ranking Insights */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Ranking Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-900/50 border-purple-900/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  Biggest Movers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">KAWS Companion</span>
                    <Badge className="bg-green-900/50 text-green-300">+2 positions</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Bandai Gundam</span>
                    <Badge className="bg-green-900/50 text-green-300">+2 positions</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">LEGO Architecture</span>
                    <Badge className="bg-red-900/50 text-red-300">-2 positions</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-purple-900/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-orange-400" />
                  Hot Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Art Toys</span>
                    <div className="flex items-center gap-2">
                      <Progress value={85} className="w-16 h-2" />
                      <span className="text-xs text-green-400">+15%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Blind Boxes</span>
                    <div className="flex items-center gap-2">
                      <Progress value={72} className="w-16 h-2" />
                      <span className="text-xs text-green-400">+8%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Models</span>
                    <div className="flex items-center gap-2">
                      <Progress value={68} className="w-16 h-2" />
                      <span className="text-xs text-green-400">+12%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-purple-900/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-400" />
                  Regional Leaders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">🌏 Asia: POP MART MOLLY</span>
                    <Badge variant="outline">#1</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">🇪🇺 Europe: LEGO Architecture</span>
                    <Badge variant="outline">#1</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">🇺🇸 N.America: Funko Pop</span>
                    <Badge variant="outline">#1</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
