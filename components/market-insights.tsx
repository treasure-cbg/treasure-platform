"use client"

import { BarChart3, TrendingUp, TrendingDown, Users, Globe, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MarketInsights() {
  const marketStats = [
    {
      title: "Global Market Size",
      value: "$24.8B",
      change: "+12.5%",
      trend: "up",
      description: "Total collectibles market value",
    },
    {
      title: "Active Collectors",
      value: "2.1M",
      change: "+8.3%",
      trend: "up",
      description: "Monthly active users",
    },
    {
      title: "Average Price",
      value: "$156",
      change: "-3.2%",
      trend: "down",
      description: "Average item price",
    },
    {
      title: "Transaction Volume",
      value: "45.2K",
      change: "+15.7%",
      trend: "up",
      description: "Weekly transactions",
    },
  ]

  const trendingCategories = [
    { name: "Art Toys", growth: 34.5, volume: 12500, color: "purple" },
    { name: "Blind Boxes", growth: 28.3, volume: 8900, color: "blue" },
    { name: "Trading Cards", growth: 22.1, volume: 15600, color: "green" },
    { name: "Vintage Toys", growth: 18.7, volume: 6700, color: "amber" },
    { name: "Designer Figures", growth: 15.2, volume: 4300, color: "red" },
  ]

  const regionalData = [
    { region: "North America", share: 35, value: "$8.68B", growth: "+10.2%" },
    { region: "Asia Pacific", share: 28, value: "$6.94B", growth: "+18.5%" },
    { region: "Europe", share: 22, value: "$5.46B", growth: "+7.8%" },
    { region: "Latin America", share: 10, value: "$2.48B", growth: "+25.3%" },
    { region: "Others", share: 5, value: "$1.24B", growth: "+12.1%" },
  ]

  const priceRanges = [
    { range: "$1 - $25", percentage: 45, count: "18.2K" },
    { range: "$26 - $100", percentage: 30, count: "12.1K" },
    { range: "$101 - $500", percentage: 18, count: "7.3K" },
    { range: "$501 - $1000", percentage: 5, count: "2.0K" },
    { range: "$1000+", percentage: 2, count: "0.8K" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Market Insights
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive data and analytics on the global collectibles and treasures market.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-900/30">
              Subscribe to Updates
            </Button>
          </div>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketStats.map((stat, index) => (
            <Card key={index} className="bg-gray-900/50 border-purple-900/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {stat.trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    {stat.change}
                  </div>
                </div>
                <h3 className="font-semibold mb-1">{stat.title}</h3>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Insights Tabs */}
        <Tabs defaultValue="trends" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900/50 mb-8">
            <TabsTrigger value="trends" className="data-[state=active]:bg-purple-900/50">
              Category Trends
            </TabsTrigger>
            <TabsTrigger value="regional" className="data-[state=active]:bg-purple-900/50">
              Regional Data
            </TabsTrigger>
            <TabsTrigger value="pricing" className="data-[state=active]:bg-purple-900/50">
              Price Analysis
            </TabsTrigger>
            <TabsTrigger value="forecast" className="data-[state=active]:bg-purple-900/50">
              Forecast
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trends">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Trending Categories</h3>
                  <div className="space-y-4">
                    {trendingCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{category.name}</span>
                          <div className="flex items-center gap-2">
                            <Badge
                              className={`bg-${category.color}-900/50 text-${category.color}-300 border-${category.color}-700`}
                            >
                              +{category.growth}%
                            </Badge>
                            <span className="text-sm text-gray-400">{category.volume.toLocaleString()}</span>
                          </div>
                        </div>
                        <Progress value={category.growth} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Market Sentiment</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span>Bullish</span>
                        <span className="text-green-400">68%</span>
                      </div>
                      <Progress value={68} className="h-3" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span>Neutral</span>
                        <span className="text-gray-400">22%</span>
                      </div>
                      <Progress value={22} className="h-3" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span>Bearish</span>
                        <span className="text-red-400">10%</span>
                      </div>
                      <Progress value={10} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="regional">
            <Card className="bg-gray-900/50 border-purple-900/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Regional Market Distribution</h3>
                <div className="space-y-4">
                  {regionalData.map((region, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{region.region}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-400">{region.value}</span>
                          <Badge className="bg-green-900/50 text-green-300 border-green-700">{region.growth}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={region.share} className="flex-1 h-2" />
                        <span className="text-sm text-gray-400 w-12">{region.share}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing">
            <Card className="bg-gray-900/50 border-purple-900/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Price Range Distribution</h3>
                <div className="space-y-4">
                  {priceRanges.map((range, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{range.range}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-400">{range.count} items</span>
                          <span className="text-sm text-purple-400">{range.percentage}%</span>
                        </div>
                      </div>
                      <Progress value={range.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forecast">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">2024 Predictions</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-green-400" />
                      <div>
                        <div className="font-medium">Market Growth</div>
                        <div className="text-sm text-gray-400">Expected 15-20% growth in collectibles market</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-blue-400" />
                      <div>
                        <div className="font-medium">User Base Expansion</div>
                        <div className="text-sm text-gray-400">25% increase in active collectors</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-purple-400" />
                      <div>
                        <div className="font-medium">Global Expansion</div>
                        <div className="text-sm text-gray-400">New markets in Southeast Asia and Africa</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Key Opportunities</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-700/30">
                      <div className="font-medium mb-2">Digital Integration</div>
                      <div className="text-sm text-gray-400">
                        NFTs and digital collectibles showing strong growth potential
                      </div>
                    </div>
                    <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-700/30">
                      <div className="font-medium mb-2">Sustainability Focus</div>
                      <div className="text-sm text-gray-400">
                        Eco-friendly packaging and materials becoming key differentiators
                      </div>
                    </div>
                    <div className="p-4 bg-green-900/20 rounded-lg border border-green-700/30">
                      <div className="font-medium mb-2">Community Building</div>
                      <div className="text-sm text-gray-400">
                        Social features and community engagement driving retention
                      </div>
                    </div>
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
