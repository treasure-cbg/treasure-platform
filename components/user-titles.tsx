"use client"

import type React from "react"

import { Star, Trophy, Crown, Award, Lock, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface TitleCardProps {
  title: string
  description: string
  icon: React.ElementType
  color: string
  progress: number
  isUnlocked: boolean
  isActive?: boolean
}

function TitleCard({ title, description, icon: Icon, color, progress, isUnlocked, isActive }: TitleCardProps) {
  return (
    <Card className={`overflow-hidden ${isActive ? `border-2 border-${color}-500` : ""}`}>
      <div className={`h-2 bg-${color}-500`}></div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full bg-${color}-100 text-${color}-500`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          {isUnlocked ? (
            <Badge variant={isActive ? "default" : "outline"} className={isActive ? `bg-${color}-500` : ""}>
              {isActive ? "已装备" : "已解锁"}
            </Badge>
          ) : (
            <Badge variant="outline" className="text-muted-foreground">
              <Lock className="h-3 w-3 mr-1" />
              未解锁
            </Badge>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>解锁进度</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="mt-4">
          {isUnlocked ? (
            <Button
              className={`w-full ${
                isActive ? "bg-muted hover:bg-muted" : `bg-gradient-to-r from-${color}-500 to-${color}-600`
              }`}
              disabled={isActive}
            >
              {isActive ? "当前称号" : "装备称号"}
            </Button>
          ) : (
            <Button variant="outline" className="w-full">
              查看解锁条件
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export function UserTitles() {
  const titles = [
    {
      title: "珍宝猎人",
      description: "完成注册即可获得",
      icon: Trophy,
      color: "gray",
      progress: 100,
      isUnlocked: true,
      isActive: true,
    },
    {
      title: "潮流先锋",
      description: "参与10次打榜",
      icon: Star,
      color: "blue",
      progress: 70,
      isUnlocked: false,
    },
    {
      title: "鉴赏大师",
      description: "获得100个点赞",
      icon: Award,
      color: "amber",
      progress: 45,
      isUnlocked: false,
    },
    {
      title: "潮玩达人",
      description: "发布20篇高质量评测",
      icon: Crown,
      color: "purple",
      progress: 25,
      isUnlocked: false,
    },
    {
      title: "原创设计师",
      description: "通过设计师认证",
      icon: CheckCircle2,
      color: "pink",
      progress: 0,
      isUnlocked: false,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">我的称号</h1>
          <p className="text-muted-foreground">通过参与社区活动解锁更多专属称号</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {titles.map((title, index) => (
            <TitleCard key={index} {...title} />
          ))}
        </div>

        <div className="mt-8 bg-muted/30 rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">称号系统说明</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• 称号是展示您在Treasure Chamber社区身份和成就的标识</li>
            <li>• 通过参与打榜、发布内容、获得点赞等方式解锁更多称号</li>
            <li>• 部分称号需要通过特定认证才能获得</li>
            <li>• 您可以随时切换已解锁的称号</li>
            <li>• 特殊称号可能会获得额外权益和功能</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
