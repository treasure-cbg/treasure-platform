"use client"

import { Trophy, Heart, Bookmark, ThumbsUp, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToyCard } from "./toy-card"

const userStats = {
  points: 1234,
  level: 5,
  rankingCount: 23,
  favoritesCount: 45,
  collectionsCount: 67,
  recommendationsCount: 12,
}

const myRankings = [
  {
    id: 1,
    rank: 1,
    name: "KAWS Companion",
    brand: "KAWS",
    price: "¥2,999",
    rating: 4.9,
    votes: 1234,
    image: "/placeholder.svg?height=300&width=300",
    category: "手办",
    trend: "up" as const,
    myVote: true,
  },
]

export function ProfileCenter() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <Card className="mb-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-20 w-20 border-4 border-white/20">
              <AvatarImage src="/placeholder.svg?height=80&width=80" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">潮玩达人</h1>
              <div className="flex items-center gap-4 mb-3">
                <Badge className="bg-white/20 text-white">Lv.{userStats.level}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  <span>{userStats.points} 积分</span>
                </div>
              </div>
              <p className="text-white/80">热爱收集各种潮玩，分享快乐时光 ✨</p>
            </div>

            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              编辑资料
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
            <div className="text-2xl font-bold">{userStats.rankingCount}</div>
            <div className="text-sm text-muted-foreground">我的打榜</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Heart className="h-8 w-8 mx-auto mb-2 text-red-500" />
            <div className="text-2xl font-bold">{userStats.favoritesCount}</div>
            <div className="text-sm text-muted-foreground">我的最爱</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Bookmark className="h-8 w-8 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold">{userStats.collectionsCount}</div>
            <div className="text-sm text-muted-foreground">我的收藏</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <ThumbsUp className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <div className="text-2xl font-bold">{userStats.recommendationsCount}</div>
            <div className="text-sm text-muted-foreground">我的推荐</div>
          </CardContent>
        </Card>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="rankings" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="rankings">我的打榜</TabsTrigger>
          <TabsTrigger value="favorites">我的最爱</TabsTrigger>
          <TabsTrigger value="collections">我的收藏</TabsTrigger>
          <TabsTrigger value="recommendations">我的推荐</TabsTrigger>
        </TabsList>

        <TabsContent value="rankings" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {myRankings.map((toy) => (
              <div key={toy.id} className="relative">
                <ToyCard {...toy} />
                <Badge className="absolute top-2 right-2 bg-green-500 text-white">已打榜</Badge>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="mt-6">
          <div className="text-center py-12">
            <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">还没有收藏任何潮玩</p>
            <Button className="mt-4">去发现</Button>
          </div>
        </TabsContent>

        <TabsContent value="collections" className="mt-6">
          <div className="text-center py-12">
            <Bookmark className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">还没有收藏任何内容</p>
            <Button className="mt-4">去浏览</Button>
          </div>
        </TabsContent>

        <TabsContent value="recommendations" className="mt-6">
          <div className="text-center py-12">
            <ThumbsUp className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">还没有推荐任何潮玩</p>
            <Button className="mt-4">去推荐</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
