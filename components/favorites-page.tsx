"use client"

import { useState } from "react"
import { Heart, Plus, Search, Filter, Grid, List, Star, TrendingUp, Calendar, Share2, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToyCard } from "./toy-card"

export function FavoritesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCollection, setSelectedCollection] = useState("all")

  const collections = [
    { id: "all", name: "All Favorites", count: 24, color: "purple" },
    { id: "art-toys", name: "Art Toys", count: 8, color: "blue" },
    { id: "blind-box", name: "Blind Box", count: 6, color: "green" },
    { id: "lego", name: "LEGO", count: 5, color: "red" },
    { id: "wishlist", name: "Wishlist", count: 12, color: "yellow" },
  ]

  const favoriteItems = [
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
      addedDate: "2024-01-15",
      collection: "art-toys",
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
      addedDate: "2024-01-10",
      collection: "blind-box",
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
      growth: 18.7,
      addedDate: "2024-01-08",
      collection: "lego",
    },
  ]

  const filteredItems = favoriteItems.filter(
    (item) => selectedCollection === "all" || item.collection === selectedCollection,
  )

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                My Favorites
              </span>
            </h1>
            <p className="text-gray-400">Your curated collection of treasures</p>
          </div>
          <div className="flex items-center gap-2">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              New Collection
            </Button>
            <Button variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Collections Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {collections.map((collection) => (
            <Card
              key={collection.id}
              className={`cursor-pointer transition-all ${
                selectedCollection === collection.id
                  ? "border-purple-600 bg-purple-900/30"
                  : "bg-gray-900/50 border-purple-900/30 hover:border-purple-600/50"
              }`}
              onClick={() => setSelectedCollection(collection.id)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">{collection.count}</div>
                <div className="text-sm text-gray-300">{collection.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search your favorites..."
                className="pl-10 bg-gray-900/50 border-purple-800/30 text-white"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="border-gray-700">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <div className="flex border border-gray-700 rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="items" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900/50 mb-8">
            <TabsTrigger value="items" className="data-[state=active]:bg-purple-900/50">
              <Heart className="h-4 w-4 mr-2" />
              Favorite Items
            </TabsTrigger>
            <TabsTrigger value="collections" className="data-[state=active]:bg-purple-900/50">
              <Grid className="h-4 w-4 mr-2" />
              Collections
            </TabsTrigger>
            <TabsTrigger value="activity" className="data-[state=active]:bg-purple-900/50">
              <TrendingUp className="h-4 w-4 mr-2" />
              Activity
            </TabsTrigger>
          </TabsList>

          <TabsContent value="items">
            {filteredItems.length === 0 ? (
              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardContent className="p-12 text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-medium mb-2">No favorites yet</h3>
                  <p className="text-gray-400 mb-4">Start building your collection by favoriting items you love</p>
                  <Button className="bg-gradient-to-r from-purple-600 to-purple-700">Explore Treasures</Button>
                </CardContent>
              </Card>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    : "space-y-4"
                }
              >
                {filteredItems.map((item) => (
                  <div key={item.id} className="relative group">
                    {viewMode === "grid" ? (
                      <div className="relative">
                        <ToyCard {...item} />
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 w-8 p-0 bg-black/80 border-red-600 text-red-400"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="absolute bottom-2 left-2">
                          <Badge className="bg-black/80 text-white text-xs">
                            Added {new Date(item.addedDate).toLocaleDateString()}
                          </Badge>
                        </div>
                      </div>
                    ) : (
                      <Card className="bg-gray-900/50 border-purple-900/30 hover:border-purple-600/50 transition-all">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-6">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="h-20 w-20 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                                  <p className="text-gray-400 mb-2">{item.brand}</p>
                                  <div className="flex items-center gap-4 text-sm">
                                    <div className="flex items-center gap-1">
                                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                      <span>{item.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <TrendingUp className="h-4 w-4 text-green-400" />
                                      <span className="text-green-400">{item.growth}%</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Calendar className="h-4 w-4 text-gray-400" />
                                      <span className="text-gray-400">
                                        Added {new Date(item.addedDate).toLocaleDateString()}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-xl font-bold text-purple-400 mb-2">{item.price}</div>
                                  <Badge className="bg-purple-900/50 text-purple-300">#{item.rank}</Badge>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                                View Details
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-red-600 text-red-400 hover:bg-red-900/30"
                              >
                                <Heart className="h-4 w-4 mr-1 fill-red-400" />
                                Remove
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="collections">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.slice(1).map((collection) => (
                <Card
                  key={collection.id}
                  className="bg-gray-900/50 border-purple-900/30 hover:border-purple-600/50 transition-all cursor-pointer"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{collection.name}</span>
                      <Badge className="bg-purple-900/50 text-purple-300">{collection.count} items</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-square bg-gray-800 rounded-lg" />
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Last updated 2 days ago</span>
                      <Button size="sm" variant="outline" className="border-gray-700">
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-gray-900/50 border-purple-900/30 border-dashed hover:border-purple-600/50 transition-all cursor-pointer">
                <CardContent className="p-12 text-center">
                  <Plus className="h-8 w-8 mx-auto mb-4 text-gray-400" />
                  <h3 className="font-medium mb-2">Create New Collection</h3>
                  <p className="text-sm text-gray-400">Organize your favorites into custom collections</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="activity">
            <div className="space-y-4">
              {[
                { action: "Added to favorites", item: "KAWS Companion", time: "2 hours ago" },
                { action: "Removed from wishlist", item: "Bearbrick 1000%", time: "1 day ago" },
                { action: "Created collection", item: "Art Toys", time: "3 days ago" },
                { action: "Added to favorites", item: "POP MART MOLLY", time: "1 week ago" },
              ].map((activity, index) => (
                <Card key={index} className="bg-gray-900/50 border-purple-900/30">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full" />
                        <span className="font-medium">{activity.action}</span>
                        <span className="text-purple-400">{activity.item}</span>
                      </div>
                      <span className="text-sm text-gray-400">{activity.time}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
