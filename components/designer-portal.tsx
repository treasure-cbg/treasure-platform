"use client"

import { useState } from "react"
import { Palette, Star, Upload, Users, TrendingUp, CheckCircle2, Clock } from "lucide-react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Progress } from "../components/ui/progress"

export function DesignerPortal() {
  const [isVerified, setIsVerified] = useState(true)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Designer Header */}
      <Card className="mb-8 bg-gradient-to-r from-amber-500 to-purple-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-20 w-20 border-4 border-white/20">
              <AvatarImage src="/placeholder.svg?height=80&width=80" />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">创意工坊</h1>
                {isVerified && (
                  <Badge className="bg-white/20 text-white flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    已认证
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-4 mb-3">
                <Badge className="bg-white/20 text-white flex items-center gap-1">
                  <Palette className="h-3 w-3" />
                  原创设计师
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  <span>投票权重 1.2x</span>
                </div>
              </div>
              <p className="text-white/80">专注于潮玩设计，打造独特的艺术体验 ✨</p>
            </div>

            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              编辑资料
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <Palette className="h-8 w-8 mx-auto mb-2 text-amber-500" />
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm text-muted-foreground">作品数量</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm text-muted-foreground">入榜作品</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold">1,234</div>
            <div className="text-sm text-muted-foreground">粉丝数量</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Star className="h-8 w-8 mx-auto mb-2 text-purple-500" />
            <div className="text-2xl font-bold">4,567</div>
            <div className="text-sm text-muted-foreground">获得投票</div>
          </CardContent>
        </Card>
      </div>

      {/* Verification Status */}
      {!isVerified && (
        <Card className="mb-8 border-amber-200 bg-amber-50 dark:bg-amber-900/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <Clock className="h-8 w-8 text-amber-500" />
              <div className="flex-1">
                <h3 className="font-medium mb-1">认证审核中</h3>
                <p className="text-sm text-muted-foreground">我们正在审核您的设计师资质，通常需要1-3个工作日</p>
                <Progress value={60} className="h-2 mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Content Tabs */}
      <Tabs defaultValue="works" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="works">我的作品</TabsTrigger>
          <TabsTrigger value="votes">我的投票</TabsTrigger>
          <TabsTrigger value="stats">数据分析</TabsTrigger>
          <TabsTrigger value="settings">账号设置</TabsTrigger>
        </TabsList>

        <TabsContent value="works" className="mt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">我的作品</h2>
            <Button className="bg-gradient-to-r from-amber-500 to-purple-600">
              <Upload className="h-4 w-4 mr-2" />
              上传新作品
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="aspect-square bg-muted">
                  <img
                    src={`/placeholder.svg?height=300&width=300&text=作品${item}`}
                    alt={`作品${item}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">限量版潮玩设计 #{item}</h3>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">原创设计</Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span>{Math.floor(Math.random() * 500)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
