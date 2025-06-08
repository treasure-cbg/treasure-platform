"use client"

import { useState } from "react"
import { X, Plus, BarChart3, TrendingUp, Star, Users, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// 模拟数据
const availableItems = [
  {
    id: 1,
    name: "KAWS Companion",
    brand: "KAWS",
    image: "/placeholder.svg?height=60&width=60",
    rank: 1,
    rating: 4.9,
    votes: 12847,
    views: 45600,
    growth: 23.5,
  },
  {
    id: 2,
    name: "POP MART MOLLY",
    brand: "POP MART",
    image: "/placeholder.svg?height=60&width=60",
    rank: 2,
    rating: 4.8,
    votes: 9156,
    views: 38200,
    growth: 12.3,
  },
  {
    id: 3,
    name: "LEGO Architecture",
    brand: "LEGO",
    image: "/placeholder.svg?height=60&width=60",
    rank: 3,
    rating: 4.7,
    votes: 7234,
    views: 32100,
    growth: -5.2,
  },
  {
    id: 4,
    name: "Bandai Gundam",
    brand: "BANDAI",
    image: "/placeholder.svg?height=60&width=60",
    rank: 4,
    rating: 4.6,
    votes: 6543,
    views: 28900,
    growth: 18.7,
  },
]

export function RankingComparison() {
  const [selectedItems, setSelectedItems] = useState([availableItems[0], availableItems[1]])
  const [showItemSelector, setShowItemSelector] = useState(false)

  const addItem = (item: any) => {
    if (selectedItems.length < 3 && !selectedItems.find((i) => i.id === item.id)) {
      setSelectedItems([...selectedItems, item])
    }
    setShowItemSelector(false)
  }

  const removeItem = (itemId: number) => {
    if (selectedItems.length > 1) {
      setSelectedItems(selectedItems.filter((item) => item.id !== itemId))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Ranking Comparison</h2>
        <Button
          variant="outline"
          className="border-purple-600 text-purple-400 hover:bg-purple-900/30"
          onClick={() => setShowItemSelector(!showItemSelector)}
          disabled={selectedItems.length >= 3}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Item
        </Button>
      </div>

      {/* Item Selector */}
      {showItemSelector && (
        <Card className="bg-gray-900/50 border-purple-900/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Select Item to Compare</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableItems
                .filter((item) => !selectedItems.find((i) => i.id === item.id))
                .map((item) => (
                  <Button
                    key={item.id}
                    variant="outline"
                    className="flex items-center justify-start gap-3 h-auto py-3 border-gray-700 hover:bg-gray-800"
                    onClick={() => addItem(item)}
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={item.image || "/placeholder.svg"} alt={item.name} />
                      <AvatarFallback>{item.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-400">{item.brand}</div>
                    </div>
                    <Badge className="ml-auto">#{item.rank}</Badge>
                  </Button>
                ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Comparison Table */}
      <Card className="bg-gray-900/50 border-purple-900/30">
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Metrics</th>
                  {selectedItems.map((item) => (
                    <th key={item.id} className="py-3 px-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={item.image || "/placeholder.svg"} alt={item.name} />
                            <AvatarFallback>{item.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="text-left">
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm text-gray-400">{item.brand}</div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-white"
                          onClick={() => removeItem(item.id)}
                          disabled={selectedItems.length <= 1}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Rank */}
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 text-gray-400 flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Current Rank
                  </td>
                  {selectedItems.map((item) => (
                    <td key={item.id} className="py-4 px-4 text-center">
                      <Badge className="bg-purple-900/50 text-purple-300 border-purple-700">#{item.rank}</Badge>
                    </td>
                  ))}
                </tr>

                {/* Rating */}
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 text-gray-400 flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Rating
                  </td>
                  {selectedItems.map((item) => (
                    <td key={item.id} className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{item.rating}</span>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Votes */}
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 text-gray-400 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Total Votes
                  </td>
                  {selectedItems.map((item) => (
                    <td key={item.id} className="py-4 px-4 text-center">
                      {item.votes.toLocaleString()}
                    </td>
                  ))}
                </tr>

                {/* Views */}
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 text-gray-400 flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    Weekly Views
                  </td>
                  {selectedItems.map((item) => (
                    <td key={item.id} className="py-4 px-4 text-center">
                      {item.views.toLocaleString()}
                    </td>
                  ))}
                </tr>

                {/* Growth */}
                <tr>
                  <td className="py-4 px-4 text-gray-400 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Growth Rate
                  </td>
                  {selectedItems.map((item) => (
                    <td key={item.id} className="py-4 px-4 text-center">
                      <span className={item.growth > 0 ? "text-green-400" : "text-red-400"}>
                        {item.growth > 0 ? "+" : ""}
                        {item.growth}%
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Visual Comparison */}
                <tr className="border-t border-gray-700">
                  <td className="py-4 px-4 text-gray-400">Popularity</td>
                  {selectedItems.map((item) => (
                    <td key={item.id} className="py-4 px-4">
                      <div className="space-y-2">
                        <Progress value={((item.votes / 15000) * 100).toFixed(0)} className="h-2" />
                        <div className="text-xs text-gray-400 text-center">
                          {((item.votes / 15000) * 100).toFixed(0)}% of max
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
