"use client"

import { useState } from "react"
import { Plus, Heart, MessageCircle, Share, Trophy, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const posts = [
  {
    id: 1,
    user: {
      name: "潮玩小王子",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 5,
    },
    content: "刚入手的KAWS真的太棒了！质感超级好，值得打榜！",
    hashtags: ["#我要打榜#", "#KAWS", "#手办"],
    toy: {
      name: "KAWS Companion",
      image: "/placeholder.svg?height=100&width=100",
      rank: 1,
    },
    images: ["/placeholder.svg?height=200&width=200"],
    likes: 234,
    comments: 45,
    shares: 12,
    time: "2小时前",
    isLiked: false,
  },
  {
    id: 2,
    user: {
      name: "盲盒收集家",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 3,
    },
    content: "今天的盲盒开箱！运气爆棚抽到隐藏款！必须给MOLLY打榜！",
    hashtags: ["#我要打榜#", "#盲盒开箱", "#MOLLY"],
    toy: {
      name: "泡泡玛特 MOLLY",
      image: "/placeholder.svg?height=100&width=100",
      rank: 2,
    },
    images: ["/placeholder.svg?height=200&width=200", "/placeholder.svg?height=200&width=200"],
    likes: 567,
    comments: 89,
    shares: 23,
    time: "4小时前",
    isLiked: true,
  },
]

export function Discover() {
  const [selectedToy, setSelectedToy] = useState<any>(null)
  const [postContent, setPostContent] = useState("")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">发现</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600">
                <Plus className="h-4 w-4 mr-2" />
                发布动态
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>发布打榜动态</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Textarea
                  placeholder="分享你的潮玩心得，记得加上 #我要打榜# 标签哦！"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  className="min-h-[100px]"
                />

                <div className="space-y-2">
                  <label className="text-sm font-medium">选择要打榜的潮玩</label>
                  <div className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-muted/50">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">搜索潮玩...</span>
                  </div>
                </div>

                {selectedToy && (
                  <Card>
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={selectedToy.image || "/placeholder.svg"}
                          alt={selectedToy.name}
                          className="h-12 w-12 rounded"
                        />
                        <div>
                          <div className="font-medium">{selectedToy.name}</div>
                          <Badge variant="secondary">#{selectedToy.rank}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    取消
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600">发布</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardContent className="p-6">
                {/* User Info */}
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src={post.user.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{post.user.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        Lv.{post.user.level}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">{post.time}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <p className="mb-2">{post.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.hashtags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-pink-600 border-pink-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Toy Card */}
                {post.toy && (
                  <Card className="mb-4 bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.toy.image || "/placeholder.svg"}
                          alt={post.toy.name}
                          className="h-12 w-12 rounded"
                        />
                        <div className="flex-1">
                          <div className="font-medium">{post.toy.name}</div>
                          <div className="flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm">排名 #{post.toy.rank}</span>
                          </div>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600">
                          为TA打榜
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Images */}
                {post.images && post.images.length > 0 && (
                  <div className={`grid gap-2 mb-4 ${post.images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
                    {post.images.map((image, index) => (
                      <img
                        key={index}
                        src={image || "/placeholder.svg"}
                        alt=""
                        className="rounded-lg aspect-square object-cover"
                      />
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-6">
                    <Button variant="ghost" size="sm" className={`gap-2 ${post.isLiked ? "text-red-500" : ""}`}>
                      <Heart className={`h-4 w-4 ${post.isLiked ? "fill-current" : ""}`} />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Share className="h-4 w-4" />
                      {post.shares}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
