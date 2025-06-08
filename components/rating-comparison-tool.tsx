"use client"

import { useState } from "react"
import { Plus, X, Award, Users, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ComparisonItem {
  id: string
  name: string
  brand: string
  image: string
  overallRating: number
  expertRating: number
  userRating: number
  dimensions: {
    quality: number
    design: number
    value: number
    collectibility: number
    packaging: number
  }
  price: string
  votes: number
}

export function RatingComparisonTool() {
  const [selectedItems, setSelectedItems] = useState<ComparisonItem[]>([])
  const [showSelector, setShowSelector] = useState(false)

  // 模拟可选择的物品
  const availableItems: ComparisonItem[] = [
    {
      id: "1",
      name: "KAWS Companion",
      brand: "KAWS",
      image: "/placeholder.svg?height=300&width=300",
      overallRating: 9.2,
      expertRating: 9.5,
      userRating: 8.9,
      dimensions: {
        quality: 9.8,
        design: 9.6,
        value: 8.5,
        collectibility: 9.7,
        packaging: 9.2,
      },
      price: "$299",
      votes: 12847,
    },
    {
      id: "2",
      name: "POP MART MOLLY",
      brand: "POP MART",
      image: "/placeholder.svg?height=300&width=300",
      overallRating: 8.5,
      expertRating: 8.2,
      userRating: 8.8,
      dimensions: {
        quality: 8.3,
        design: 9.1,
        value: 9.2,
        collectibility: 8.0,
        packaging: 8.7,
      },
      price: "$69",
      votes: 9156,
    },
    {
      id: "3",
      name: "LEGO Architecture",
      brand: "LEGO",
      image: "/placeholder.svg?height=300&width=300",
      overallRating: 8.8,
      expertRating: 9.0,
      userRating: 8.6,
      dimensions: {
        quality: 9.5,
        design: 8.9,
        value: 8.8,
        collectibility: 7.9,
        packaging: 9.1,
      },
      price: "$89",
      votes: 7234,
    },
  ]

  const addItem = (item: ComparisonItem) => {
    if (selectedItems.length < 3 && !selectedItems.find((i) => i.id === item.id)) {
      setSelectedItems([...selectedItems, item])
    }
  }

  const removeItem = (id: string) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id))
  }

  const getRatingColor = (rating: number) => {
    if (rating >= 9) return "text-green-400"
    if (rating >= 7) return "text-blue-400"
    if (rating >= 5) return "text-yellow-400"
    if (rating >= 3) return "text-orange-400"
    return "text-red-400"
  }

  const getBestValue = (values: number[]) => {
    const max = Math.max(...values)
    return values.map((v) => v === max)
  }

  const renderRatingDots = (rating: number, size = "w-2 h-2") => {
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              size,
              "rounded-full",
              i < rating
                ? rating >= 9
                  ? "bg-green-400"
                  : rating >= 7
                    ? "bg-blue-400"
                    : rating >= 5
                      ? "bg-yellow-400"
                      : rating >= 3
                        ? "bg-orange-400"
                        : "bg-red-400"
                : "bg-gray-600",
            )}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gray-900/50 border-purple-900/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-purple-400" />
            Rating Comparison Tool
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* 选择器 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm text-gray-400">Compare up to 3 items:</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowSelector(!showSelector)}
                className="border-purple-600/50 text-purple-400"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Item
              </Button>
            </div>

            {showSelector && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-800/50 rounded-lg">
                {availableItems
                  .filter((item) => !selectedItems.find((s) => s.id === item.id))
                  .map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg cursor-pointer hover:bg-gray-900/70"
                      onClick={() => addItem(item)}
                    >
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-gray-400">{item.brand}</div>
                        <div className={`text-sm font-bold ${getRatingColor(item.overallRating)}`}>
                          {item.overallRating.toFixed(1)}/10
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* 比较表格 */}
          {selectedItems.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-3 text-gray-400">Metric</th>
                    {selectedItems.map((item) => (
                      <th key={item.id} className="text-center p-3">
                        <div className="flex flex-col items-center gap-2">
                          <div className="relative">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <Button
                              size="icon"
                              variant="ghost"
                              className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-600 hover:bg-red-700"
                              onClick={() => removeItem(item.id)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-sm">{item.name}</div>
                            <div className="text-xs text-gray-400">{item.brand}</div>
                            <div className="text-xs text-purple-400">{item.price}</div>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* 总体评分 */}
                  <tr className="border-b border-gray-800">
                    <td className="p-3 font-medium">Overall Rating</td>
                    {selectedItems.map((item, index) => {
                      const isBest = getBestValue(selectedItems.map((i) => i.overallRating))[index]
                      return (
                        <td key={item.id} className="text-center p-3">
                          <div
                            className={cn(
                              "font-bold text-lg",
                              getRatingColor(item.overallRating),
                              isBest && "bg-green-900/30 rounded px-2 py-1",
                            )}
                          >
                            {item.overallRating.toFixed(1)}
                          </div>
                          {renderRatingDots(item.overallRating)}
                          <div className="text-xs text-gray-400 mt-1">{item.votes.toLocaleString()} votes</div>
                        </td>
                      )
                    })}
                  </tr>

                  {/* 专家评分 */}
                  <tr className="border-b border-gray-800">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-amber-400" />
                        <span>Expert Rating</span>
                      </div>
                    </td>
                    {selectedItems.map((item, index) => {
                      const isBest = getBestValue(selectedItems.map((i) => i.expertRating))[index]
                      return (
                        <td key={item.id} className="text-center p-3">
                          <div
                            className={cn(
                              "font-bold",
                              getRatingColor(item.expertRating),
                              isBest && "bg-amber-900/30 rounded px-2 py-1",
                            )}
                          >
                            {item.expertRating.toFixed(1)}
                          </div>
                        </td>
                      )
                    })}
                  </tr>

                  {/* 用户评分 */}
                  <tr className="border-b border-gray-800">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-400" />
                        <span>User Rating</span>
                      </div>
                    </td>
                    {selectedItems.map((item, index) => {
                      const isBest = getBestValue(selectedItems.map((i) => i.userRating))[index]
                      return (
                        <td key={item.id} className="text-center p-3">
                          <div
                            className={cn(
                              "font-bold",
                              getRatingColor(item.userRating),
                              isBest && "bg-blue-900/30 rounded px-2 py-1",
                            )}
                          >
                            {item.userRating.toFixed(1)}
                          </div>
                        </td>
                      )
                    })}
                  </tr>

                  {/* 各个维度 */}
                  {Object.keys(selectedItems[0]?.dimensions || {}).map((dimension) => (
                    <tr key={dimension} className="border-b border-gray-800">
                      <td className="p-3 capitalize">{dimension}</td>
                      {selectedItems.map((item, index) => {
                        const value = item.dimensions[dimension as keyof typeof item.dimensions]
                        const isBest = getBestValue(
                          selectedItems.map((i) => i.dimensions[dimension as keyof typeof i.dimensions]),
                        )[index]
                        return (
                          <td key={item.id} className="text-center p-3">
                            <div
                              className={cn(
                                "font-bold",
                                getRatingColor(value),
                                isBest && "bg-green-900/30 rounded px-2 py-1",
                              )}
                            >
                              {value.toFixed(1)}
                            </div>
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">No items selected for comparison</div>
              <Button
                variant="outline"
                onClick={() => setShowSelector(true)}
                className="border-purple-600/50 text-purple-400"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Items to Compare
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
