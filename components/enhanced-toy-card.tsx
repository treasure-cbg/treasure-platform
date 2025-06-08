"use client"

import { Heart, TrendingUp, TrendingDown, Eye, Crown, Award, Users } from "lucide-react"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { cn } from "@/lib/utils"

interface EnhancedToyCardProps {
  rank: number
  name: string
  brand: string
  price: string
  rating: number
  expertRating?: number
  votes: number
  image: string
  category: string
  trend: "up" | "down" | "same"
  isHot?: boolean
  isNew?: boolean
  growth?: number
  onVote?: () => void
  onViewDetails?: () => void
  userRating?: number
}

export function EnhancedToyCard({
  rank,
  name,
  brand,
  price,
  rating,
  expertRating,
  votes,
  image,
  category,
  trend,
  isHot = false,
  isNew = false,
  growth = 0,
  onVote,
  onViewDetails,
  userRating,
}: EnhancedToyCardProps) {
  const getRankBadge = (rank: number) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
    if (rank === 2) return "bg-gradient-to-r from-gray-300 to-gray-400 text-black"
    if (rank === 3) return "bg-gradient-to-r from-amber-600 to-amber-700 text-white"
    return "bg-gradient-to-r from-purple-600 to-purple-700 text-white"
  }

  const getTrendIcon = () => {
    if (trend === "up") return <TrendingUp className="h-3 w-3 text-green-400" />
    if (trend === "down") return <TrendingDown className="h-3 w-3 text-red-400" />
    return <div className="h-3 w-3 rounded-full bg-gray-500" />
  }

  const getRatingColor = (rating: number) => {
    if (rating >= 9) return "text-green-400"
    if (rating >= 7) return "text-blue-400"
    if (rating >= 5) return "text-yellow-400"
    if (rating >= 3) return "text-orange-400"
    return "text-red-400"
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
    <Card className="group relative overflow-hidden border border-purple-900/30 bg-gradient-to-br from-gray-900/80 to-gray-800/50 hover:border-purple-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/20">
      {/* 状态标签 */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {isHot && (
          <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 text-xs">🔥 HOT</Badge>
        )}
        {isNew && (
          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs">✨ NEW</Badge>
        )}
      </div>

      {/* 收藏按钮 */}
      <div className="absolute top-3 right-3 z-10">
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-black/50 hover:bg-black/70 text-white">
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* 排名徽章 */}
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className={cn("flex h-8 w-8 items-center justify-center rounded-full font-bold text-sm", getRankBadge(rank))}
        >
          {rank <= 3 ? <Crown className="h-4 w-4" /> : rank}
        </div>
      </div>

      <CardContent className="p-0">
        {/* 图片 */}
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-purple-900/20 to-gray-900/40">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* 内容 */}
        <div className="p-4 space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs border-purple-600/50 text-purple-300">
                {category}
              </Badge>
              {getTrendIcon()}
              {growth !== 0 && (
                <span className={`text-xs font-medium ${growth > 0 ? "text-green-400" : "text-red-400"}`}>
                  {growth > 0 ? "+" : ""}
                  {growth}%
                </span>
              )}
            </div>
            <h3 className="font-semibold text-lg leading-tight text-white">{name}</h3>
            <p className="text-sm text-gray-400">{brand}</p>
          </div>

          {/* 评分系统 */}
          <div className="space-y-2">
            {/* 总体评分 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`text-lg font-bold ${getRatingColor(rating)}`}>{rating.toFixed(1)}</span>
                <span className="text-xs text-gray-400">/10</span>
              </div>
              <span className="text-xs text-gray-400">({votes.toLocaleString()})</span>
            </div>

            {/* 评分圆点 */}
            <div className="flex items-center justify-between">
              {renderRatingDots(rating)}
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-purple-400 hover:text-purple-300 p-0 h-auto"
                onClick={onVote}
              >
                Vote
              </Button>
            </div>

            {/* 专家vs用户评分 */}
            {expertRating && (
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1">
                  <Award className="h-3 w-3 text-amber-400" />
                  <span className="text-amber-400">{expertRating.toFixed(1)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3 text-blue-400" />
                  <span className="text-blue-400">{rating.toFixed(1)}</span>
                </div>
              </div>
            )}

            {/* 用户评分 */}
            {userRating && (
              <div className="bg-purple-900/20 rounded p-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-300">Your Rating:</span>
                  <span className={`text-sm font-bold ${getRatingColor(userRating)}`}>{userRating}/10</span>
                </div>
              </div>
            )}
          </div>

          {/* 价格和操作 */}
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-purple-400">{price}</div>
            <Button
              size="sm"
              variant="outline"
              className="border-purple-600/50 text-purple-400 hover:bg-purple-900/30"
              onClick={onViewDetails}
            >
              Details
            </Button>
          </div>

          {/* 统计信息 */}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{Math.floor(Math.random() * 50000 + 10000).toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              <span>{Math.floor(votes * 0.3).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
