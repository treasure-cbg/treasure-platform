"use client"

import { useState } from "react"
import { Briefcase, Star, Upload, Users, TrendingUp, CheckCircle2, Clock, BarChart3 } from "lucide-react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Progress } from "../components/ui/progress"

export function BusinessPortal() {
  const [isVerified, setIsVerified] = useState(true)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Business Header */}
      <Card className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-20 w-20 border-4 border-white/20">
              <AvatarImage src="/placeholder.svg?height=80&width=80" />
              <AvatarFallback>B</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">潮玩科技有限公司</h1>
                {isVerified && (
                  <Badge className="bg-white/20 text-white flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    已认证
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-4 mb-3">
                <Badge className="bg-white/20 text-white flex items-center gap-1">
                  <Briefcase className="h-3 w-3" />
                  企业账号
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  <span>投票权重 0.8x</span>
                </div>
              </div>
              <p className="text-white/80">专注于高品质潮玩制造，引领潮流文化 🚀</p>
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
            <Briefcase className="h-8 w-8 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold">24</div>
            <div className="text-sm text-muted-foreground">产品数量</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm text-muted-foreground">入榜产品</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-purple-500" />
            <div className="text-2xl font-bold">3,456</div>
            <div className="text-sm text-muted-foreground">关注者</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <BarChart3 className="h-8 w-8 mx-auto mb-2 text-amber-500" />
            <div className="text-2xl font-bold">8,901</div>
            <div className="text-sm text-muted-foreground">总销量</div>
          </CardContent>
        </Card>
      </div>

      {/* Verification Status */}
      {!isVerified && (
        <Card className="mb-8 border-blue-200 bg-blue-50 dark:bg-blue-900/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <Clock className="h-8 w-8 text-blue-500" />
              <div className="flex-1">
                <h3 className="font-medium mb-1">企业认证审核中</h3>
                <p className="text-sm text-muted-foreground">我们正在审核您的企业资质，通常需要3-5个工作日</p>
                <Progress value={40} className="h-2 mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Content Tabs */}
      <Tabs defaultValue="products" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="products">产品管理</TabsTrigger>
          <TabsTrigger value="votes">投票管理</TabsTrigger>
          <TabsTrigger value="analytics">数据分析</TabsTrigger>
          <TabsTrigger value="settings">账号设置</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="mt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">产品管理</h2>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
              <Upload className="h-4 w-4 mr-2" />
              添加新产品
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="aspect-square bg-muted">
                  <img
                    src={`/placeholder.svg?height=300&width=300&text=产品${item}`}
                    alt={`产品${item}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">企业潮玩系列 #{item}</h3>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">企业产品</Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span>{Math.floor(Math.random() * 1000)}</span>
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
