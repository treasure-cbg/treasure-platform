"use client"

import { useState } from "react"
import { TrendingUp, Users, Award, BarChart3 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Progress } from "../components/ui/progress"
import { cn } from "@/lib/utils"

interface RatingSystemProps {
  productId: string
  overallRating: number
  totalVotes: number
  expertRating?: number
  userRating: number
  ratingDistribution: number[]
  dimensions: {
    quality: number
    design: number
    value: number
    collectibility: number
    packaging: number
  }
  onRate?: (rating: number) => void
  userVote?: number
}

export function RatingSystem({
  productId,
  overallRating,
  totalVotes,
  expertRating,
  userRating,
  ratingDistribution,
  dimensions,
  onRate,
  userVote,
}: RatingSystemProps) {
  const [hoverRating, setHoverRating] = useState(0)
  const [showDetailed, setShowDetailed] = useState(false)

  // 获取评分颜色
  const getRatingColor = (rating: number) => {
    if (rating >= 9) return "text-green-400"
    if (rating >= 7) return "text-blue-400"
    if (rating >= 5) return "text-yellow-400"
    if (rating >= 3) return "text-orange-400"
    return "text-red-400"
  }

  // 获取评分等级
  const getRatingGrade = (rating: number) => {
    if (rating >= 9) return "Exceptional"
    if (rating >= 8) return "Excellent"
    if (rating >= 7) return "Great"
    if (rating >= 6) return "Good"
    if (rating >= 5) return "Average"
    if (rating >= 4) return "Below Average"
    if (rating >= 3) return "Poor"
    return "Very Poor"
  }

  // 渲染10分制评分圆点
  const renderRatingDots = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: 10 }).map((_, i) => {
          const dotRating = i + 1
          const isActive = dotRating <= (interactive ? hoverRating || rating : rating)
          const isHovered = interactive && hoverRating >= dotRating

          return (
            <button
              key={i}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-200",
                isActive
                  ? isHovered
                    ? "bg-purple-400 scale-125"
                    : rating >= 9
                      ? "bg-green-400"
                      : rating >= 7
                        ? "bg-blue-400"
                        : rating >= 5
                          ? "bg-yellow-400"
                          : rating >= 3
                            ? "bg-orange-400"
                            : "bg-red-400"
                  : "bg-gray-600",
                interactive && "hover:scale-125 cursor-pointer",
              )}
              onMouseEnter={() => interactive && setHoverRating(dotRating)}
              onMouseLeave={() => interactive && setHoverRating(0)}
              onClick={() => interactive && onRatingChange?.(dotRating)}
              disabled={!interactive}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* 主要评分显示 */}
      <Card className="bg-gray-900/50 border-purple-900/30">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* 总体评分 */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                <div className={`text-4xl font-bold ${getRatingColor(overallRating)}`}>{overallRating.toFixed(1)}</div>
                <div className="text-sm text-gray-400">/ 10</div>
              </div>
              <div className="mb-2">{renderRatingDots(overallRating)}</div>
              <div className="text-sm text-gray-300 mb-1">{getRatingGrade(overallRating)}</div>
              <div className="text-xs text-gray-400">{totalVotes.toLocaleString()} votes</div>
            </div>

            {/* 专业vs用户评分 */}
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expertRating && (
                  <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-700/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4 text-amber-400" />
                      <span className="text-sm font-medium text-amber-300">Expert Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-2xl font-bold ${getRatingColor(expertRating)}`}>
                        {expertRating.toFixed(1)}
                      </span>
                      {renderRatingDots(expertRating)}
                    </div>
                  </div>
                )}

                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-700/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-300">Community Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-2xl font-bold ${getRatingColor(userRating)}`}>{userRating.toFixed(1)}</span>
                    {renderRatingDots(userRating)}
                  </div>
                </div>
              </div>

              {/* 用户评分区域 */}
              <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-700/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-purple-300">Your Rating</span>
                  {userVote && <Badge className="bg-purple-600 text-white">You rated: {userVote}/10</Badge>}
                </div>
                <div className="flex items-center gap-3">
                  {renderRatingDots(userVote || 0, true, onRate)}
                  <span className="text-sm text-gray-400">Click to rate</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 详细评分维度 */}
      <Card className="bg-gray-900/50 border-purple-900/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-purple-400" />
            Rating Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {Object.entries(dimensions).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium capitalize">
                  {key === "collectibility" ? "Collectibility" : key}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`font-bold ${getRatingColor(value)}`}>{value.toFixed(1)}</span>
                  {renderRatingDots(value)}
                </div>
              </div>
              <Progress value={value * 10} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* 评分分布 */}
      <Card className="bg-gray-900/50 border-purple-900/30">
        <CardHeader>
          <CardTitle>Rating Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {ratingDistribution.map((count, index) => {
              const rating = 10 - index
              const percentage = totalVotes > 0 ? (count / totalVotes) * 100 : 0

              return (
                <div key={rating} className="flex items-center gap-3">
                  <div className="w-8 text-sm font-medium">{rating}</div>
                  <div className="flex-1">
                    <Progress value={percentage} className="h-3" />
                  </div>
                  <div className="w-12 text-sm text-gray-400 text-right">{count}</div>
                  <div className="w-12 text-sm text-gray-400 text-right">{percentage.toFixed(1)}%</div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* 评分趋势 */}
      <Card className="bg-gray-900/50 border-purple-900/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-400" />
            Rating Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">+0.3</div>
              <div className="text-sm text-gray-400">This Week</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">+0.7</div>
              <div className="text-sm text-gray-400">This Month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">+1.2</div>
              <div className="text-sm text-gray-400">This Year</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
