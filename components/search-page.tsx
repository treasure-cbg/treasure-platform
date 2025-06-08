"use client"

import type React from "react"

import { useState } from "react"
import { SearchIcon, Filter, X, Clock, TrendingUp, History, Sparkles } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { ToyCard } from "./toy-card"
import { SearchFilters } from "./search-filters"
import { Skeleton } from "../components/ui/skeleton"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"

// 模拟搜索结果数据
const mockSearchResults = {
  products: [
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
      growth: 18.7,
    },
  ],
  events: [
    {
      id: 1,
      title: "Global Treasure Hunt 2024",
      date: "2024-03-15",
      location: "Worldwide (Online)",
      image: "/placeholder.svg?height=200&width=300&text=Event",
      category: "Competition",
    },
    {
      id: 2,
      title: "KAWS Exhibition Opening",
      date: "2024-02-28",
      location: "New York, NY",
      image: "/placeholder.svg?height=200&width=300&text=Exhibition",
      category: "Exhibition",
    },
  ],
  creators: [
    {
      id: 1,
      name: "Alex Chen",
      title: "Art Toy Designer",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: 45600,
    },
    {
      id: 2,
      name: "Sarah Kim",
      title: "Collectibles Curator",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: 32100,
    },
  ],
  posts: [
    {
      id: 1,
      title: "Why KAWS Companion is Worth Every Penny",
      author: "CollectorInsights",
      date: "2024-01-15",
      image: "/placeholder.svg?height=200&width=300&text=Post",
      likes: 5600,
    },
    {
      id: 2,
      title: "The Evolution of Designer Toys",
      author: "ToyHistory",
      date: "2024-01-08",
      image: "/placeholder.svg?height=200&width=300&text=Post",
      likes: 3200,
    },
  ],
}

// 搜索建议
const searchSuggestions = [
  "KAWS Companion",
  "POP MART MOLLY",
  "LEGO Architecture",
  "Bandai Gundam",
  "Blind Box",
  "Designer Toys",
  "Limited Edition",
  "Collectibles",
]

// 热门搜索
const trendingSearches = ["KAWS", "Blind Box", "POP MART", "LEGO", "Gundam", "Funko Pop", "Limited Edition"]

// 搜索历史
const initialSearchHistory = ["KAWS Companion", "Designer Toys", "Blind Box Collection", "LEGO Architecture"]

export function SearchPage() {
  const [query, setQuery] = useState("")
  const [searchHistory, setSearchHistory] = useState(initialSearchHistory)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [filtersVisible, setFiltersVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [sortOption, setSortOption] = useState("relevance")

  // 筛选条件
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    categories: [],
    brands: [],
    rating: 0,
    availability: "all",
  })

  // 处理搜索
  const handleSearch = () => {
    if (!query.trim()) return

    setIsSearching(true)
    setShowSuggestions(false)

    // 模拟搜索延迟
    setTimeout(() => {
      setIsSearching(false)
      setHasSearched(true)

      // 添加到搜索历史
      if (!searchHistory.includes(query)) {
        setSearchHistory([query, ...searchHistory].slice(0, 10))
      }
    }, 800)
  }

  // 处理回车键搜索
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  // 清除搜索
  const clearSearch = () => {
    setQuery("")
    setHasSearched(false)
  }

  // 清除搜索历史
  const clearSearchHistory = () => {
    setSearchHistory([])
  }

  // 使用搜索建议
  const useSuggestion = (suggestion: string) => {
    setQuery(suggestion)
    setShowSuggestions(false)
    handleSearch()
  }

  // 切换筛选面板
  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible)
  }

  // 应用筛选条件
  const applyFilters = (newFilters: any) => {
    setFilters(newFilters)
    // 在实际应用中，这里会重新触发搜索
  }

  // 获取结果计数
  const getResultCount = () => {
    if (activeTab === "all") {
      return (
        mockSearchResults.products.length +
        mockSearchResults.events.length +
        mockSearchResults.creators.length +
        mockSearchResults.posts.length
      )
    } else if (activeTab === "products") {
      return mockSearchResults.products.length
    } else if (activeTab === "events") {
      return mockSearchResults.events.length
    } else if (activeTab === "creators") {
      return mockSearchResults.creators.length
    } else if (activeTab === "posts") {
      return mockSearchResults.posts.length
    }
    return 0
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* 搜索头部 */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="search"
                placeholder="Search treasures, events, creators..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setShowSuggestions(e.target.value.length > 0)
                }}
                onKeyDown={handleKeyDown}
                onFocus={() => setShowSuggestions(query.length > 0)}
                className="pl-10 pr-10 py-6 text-lg bg-gray-900/50 border-purple-800/30 text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:border-purple-500"
              />
              {query && (
                <button className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={clearSearch}>
                  <X className="h-5 w-5 text-gray-400 hover:text-white" />
                </button>
              )}
            </div>
            <Button
              onClick={handleSearch}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 py-6 px-8"
            >
              Search
            </Button>
            <Button
              variant="outline"
              onClick={toggleFilters}
              className="border-purple-600 text-purple-400 hover:bg-purple-900/30 py-6"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </Button>
          </div>

          {/* 搜索建议下拉框 */}
          {showSuggestions && !isSearching && !hasSearched && (
            <div className="absolute z-50 mt-1 w-full max-w-3xl bg-gray-900 border border-purple-800/30 rounded-md shadow-lg">
              <div className="p-4">
                {/* 搜索建议 */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Sparkles className="h-4 w-4" />
                    <span>Suggestions</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {searchSuggestions
                      .filter((suggestion) => suggestion.toLowerCase().includes(query.toLowerCase()))
                      .slice(0, 5)
                      .map((suggestion, index) => (
                        <Badge
                          key={index}
                          className="bg-purple-900/50 text-purple-300 border-purple-700 cursor-pointer hover:bg-purple-800/50"
                          onClick={() => useSuggestion(suggestion)}
                        >
                          {suggestion}
                        </Badge>
                      ))}
                  </div>
                </div>

                {/* 搜索历史 */}
                {searchHistory.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <div className="flex items-center gap-2">
                        <History className="h-4 w-4" />
                        <span>Recent Searches</span>
                      </div>
                      <button className="text-xs text-purple-400 hover:text-purple-300" onClick={clearSearchHistory}>
                        Clear
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {searchHistory.slice(0, 5).map((item, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-gray-700 text-gray-300 cursor-pointer hover:bg-gray-800/50 flex items-center gap-1"
                          onClick={() => useSuggestion(item)}
                        >
                          <Clock className="h-3 w-3" />
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* 热门搜索 */}
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <TrendingUp className="h-4 w-4" />
                    <span>Trending</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trendingSearches.slice(0, 5).map((item, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-green-700/50 text-green-400 cursor-pointer hover:bg-green-900/20 flex items-center gap-1"
                        onClick={() => useSuggestion(item)}
                      >
                        <TrendingUp className="h-3 w-3" />
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 搜索结果区域 */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 筛选面板 */}
          {filtersVisible && (
            <div className="lg:w-1/4">
              <SearchFilters filters={filters} onApplyFilters={applyFilters} />
            </div>
          )}

          {/* 结果区域 */}
          <div className={filtersVisible ? "lg:w-3/4" : "w-full"}>
            {isSearching ? (
              // 加载状态
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-8 w-48 bg-gray-800" />
                  <Skeleton className="h-8 w-32 bg-gray-800" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Skeleton key={i} className="h-80 bg-gray-800 rounded-lg" />
                  ))}
                </div>
              </div>
            ) : hasSearched ? (
              // 搜索结果
              <div>
                {/* 结果头部 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Search results for "{query}"</h2>
                    <p className="text-gray-400">{getResultCount()} results found</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                          Sort by: {sortOption.charAt(0).toUpperCase() + sortOption.slice(1)}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-gray-900 border-purple-800/30">
                        <DropdownMenuItem
                          className="text-gray-300 hover:text-white hover:bg-purple-900/30"
                          onClick={() => setSortOption("relevance")}
                        >
                          Relevance
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-gray-300 hover:text-white hover:bg-purple-900/30"
                          onClick={() => setSortOption("newest")}
                        >
                          Newest
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-gray-300 hover:text-white hover:bg-purple-900/30"
                          onClick={() => setSortOption("popularity")}
                        >
                          Popularity
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-gray-300 hover:text-white hover:bg-purple-900/30"
                          onClick={() => setSortOption("priceHigh")}
                        >
                          Price: High to Low
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-gray-300 hover:text-white hover:bg-purple-900/30"
                          onClick={() => setSortOption("priceLow")}
                        >
                          Price: Low to High
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                {/* 结果分类标签 */}
                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
                  <TabsList className="grid w-full grid-cols-5 bg-gray-900/50">
                    <TabsTrigger value="all" className="data-[state=active]:bg-purple-900/50">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="products" className="data-[state=active]:bg-purple-900/50">
                      Products
                    </TabsTrigger>
                    <TabsTrigger value="events" className="data-[state=active]:bg-purple-900/50">
                      Events
                    </TabsTrigger>
                    <TabsTrigger value="creators" className="data-[state=active]:bg-purple-900/50">
                      Creators
                    </TabsTrigger>
                    <TabsTrigger value="posts" className="data-[state=active]:bg-purple-900/50">
                      Posts
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-6">
                    {/* 产品结果 */}
                    {mockSearchResults.products.length > 0 && (
                      <div className="mb-10">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold">Products</h3>
                          <Button
                            variant="link"
                            className="text-purple-400 hover:text-purple-300 p-0"
                            onClick={() => setActiveTab("products")}
                          >
                            View all
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {mockSearchResults.products.slice(0, 3).map((product) => (
                            <ToyCard key={product.id} {...product} />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 活动结果 */}
                    {mockSearchResults.events.length > 0 && (
                      <div className="mb-10">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold">Events</h3>
                          <Button
                            variant="link"
                            className="text-purple-400 hover:text-purple-300 p-0"
                            onClick={() => setActiveTab("events")}
                          >
                            View all
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {mockSearchResults.events.map((event) => (
                            <Card key={event.id} className="bg-gray-900/50 border-purple-900/30 overflow-hidden">
                              <div className="flex h-full">
                                <div className="w-1/3">
                                  <img
                                    src={event.image || "/placeholder.svg"}
                                    alt={event.title}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <CardContent className="w-2/3 p-4">
                                  <Badge className="mb-2 bg-purple-900/50 text-purple-300 border-purple-700">
                                    {event.category}
                                  </Badge>
                                  <h4 className="font-semibold mb-2">{event.title}</h4>
                                  <p className="text-sm text-gray-400 mb-2">
                                    {new Date(event.date).toLocaleDateString()}
                                  </p>
                                  <p className="text-sm text-gray-400">{event.location}</p>
                                </CardContent>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 创作者结果 */}
                    {mockSearchResults.creators.length > 0 && (
                      <div className="mb-10">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold">Creators</h3>
                          <Button
                            variant="link"
                            className="text-purple-400 hover:text-purple-300 p-0"
                            onClick={() => setActiveTab("creators")}
                          >
                            View all
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {mockSearchResults.creators.map((creator) => (
                            <Card key={creator.id} className="bg-gray-900/50 border-purple-900/30">
                              <CardContent className="p-6 text-center">
                                <div className="flex justify-center mb-4">
                                  <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-purple-600">
                                    <img
                                      src={creator.avatar || "/placeholder.svg"}
                                      alt={creator.name}
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                </div>
                                <h4 className="font-semibold mb-1">{creator.name}</h4>
                                <p className="text-sm text-gray-400 mb-3">{creator.title}</p>
                                <p className="text-sm text-gray-400">{creator.followers.toLocaleString()} followers</p>
                                <Button
                                  className="mt-4 w-full bg-gradient-to-r from-purple-600 to-purple-700"
                                  size="sm"
                                >
                                  Follow
                                </Button>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 文章结果 */}
                    {mockSearchResults.posts.length > 0 && (
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold">Posts</h3>
                          <Button
                            variant="link"
                            className="text-purple-400 hover:text-purple-300 p-0"
                            onClick={() => setActiveTab("posts")}
                          >
                            View all
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {mockSearchResults.posts.map((post) => (
                            <Card key={post.id} className="bg-gray-900/50 border-purple-900/30 overflow-hidden">
                              <div className="flex h-full">
                                <div className="w-1/3">
                                  <img
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <CardContent className="w-2/3 p-4">
                                  <h4 className="font-semibold mb-2">{post.title}</h4>
                                  <p className="text-sm text-gray-400 mb-2">By {post.author}</p>
                                  <p className="text-sm text-gray-400">
                                    {new Date(post.date).toLocaleDateString()} • {post.likes} likes
                                  </p>
                                </CardContent>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="products" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mockSearchResults.products.map((product) => (
                        <ToyCard key={product.id} {...product} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="events" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {mockSearchResults.events.map((event) => (
                        <Card key={event.id} className="bg-gray-900/50 border-purple-900/30 overflow-hidden">
                          <div className="flex h-full">
                            <div className="w-1/3">
                              <img
                                src={event.image || "/placeholder.svg"}
                                alt={event.title}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <CardContent className="w-2/3 p-4">
                              <Badge className="mb-2 bg-purple-900/50 text-purple-300 border-purple-700">
                                {event.category}
                              </Badge>
                              <h4 className="font-semibold mb-2">{event.title}</h4>
                              <p className="text-sm text-gray-400 mb-2">{new Date(event.date).toLocaleDateString()}</p>
                              <p className="text-sm text-gray-400">{event.location}</p>
                            </CardContent>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="creators" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {mockSearchResults.creators.map((creator) => (
                        <Card key={creator.id} className="bg-gray-900/50 border-purple-900/30">
                          <CardContent className="p-6 text-center">
                            <div className="flex justify-center mb-4">
                              <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-purple-600">
                                <img
                                  src={creator.avatar || "/placeholder.svg"}
                                  alt={creator.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                            </div>
                            <h4 className="font-semibold mb-1">{creator.name}</h4>
                            <p className="text-sm text-gray-400 mb-3">{creator.title}</p>
                            <p className="text-sm text-gray-400">{creator.followers.toLocaleString()} followers</p>
                            <Button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-purple-700" size="sm">
                              Follow
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="posts" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {mockSearchResults.posts.map((post) => (
                        <Card key={post.id} className="bg-gray-900/50 border-purple-900/30 overflow-hidden">
                          <div className="flex h-full">
                            <div className="w-1/3">
                              <img
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <CardContent className="w-2/3 p-4">
                              <h4 className="font-semibold mb-2">{post.title}</h4>
                              <p className="text-sm text-gray-400 mb-2">By {post.author}</p>
                              <p className="text-sm text-gray-400">
                                {new Date(post.date).toLocaleDateString()} • {post.likes} likes
                              </p>
                            </CardContent>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            ) : (
              // 初始状态
              <div className="text-center py-12">
                <div className="flex justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-900/50 border border-purple-700">
                    <SearchIcon className="h-8 w-8 text-purple-400" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">Search for treasures</h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                  Discover products, events, creators, and more from the global treasure community.
                </p>

                {/* 热门搜索 */}
                <div className="max-w-lg mx-auto">
                  <h3 className="text-sm text-gray-400 mb-3 flex items-center justify-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Popular searches
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {trendingSearches.map((item, index) => (
                      <Badge
                        key={index}
                        className="bg-purple-900/50 text-purple-300 border-purple-700 cursor-pointer hover:bg-purple-800/50"
                        onClick={() => useSuggestion(item)}
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
