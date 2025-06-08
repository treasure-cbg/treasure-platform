"use client"

import { Heart, Star, TrendingUp, TrendingDown, Eye, Crown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ToyCardProps {
  rank: number
  name: string
  brand: string
  price: string
  rating: number
  votes: number
  image: string
  category: string
  trend: "up" | "down" | "same"
  isHot?: boolean
  growth?: number
}

export function ToyCard({
  rank,
  name,
  brand,
  price,
  rating,
  votes,
  image,
  category,
  trend,
  isHot = false,
  growth = 0,
}: ToyCardProps) {
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

  return (
    <Card className="group relative overflow-hidden border border-purple-900/30 bg-gradient-to-br from-gray-900/80 to-gray-800/50 hover:border-purple-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/20">
      {isHot && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 text-xs">🔥 HOT</Badge>
        </div>
      )}

      <div className="absolute top-3 right-3 z-10">
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-black/50 hover:bg-black/70 text-white">
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* Rank Badge */}
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className={cn("flex h-8 w-8 items-center justify-center rounded-full font-bold text-sm", getRankBadge(rank))}
        >
          {rank <= 3 ? <Crown className="h-4 w-4" /> : rank}
        </div>
      </div>

      <CardContent className="p-0">
        {/* Image */}
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-purple-900/20 to-gray-900/40">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
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

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-white">{rating}</span>
              <span className="text-sm text-gray-400">({votes.toLocaleString()})</span>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-purple-400">{price}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Eye className="h-3 w-3" />
            <span>{Math.floor(Math.random() * 50000 + 10000).toLocaleString()} views</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
