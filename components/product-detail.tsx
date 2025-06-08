"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Star,
  TrendingUp,
  TrendingDown,
  Heart,
  Share2,
  Play,
  ThumbsUp,
  Award,
  Calendar,
  Eye,
} from "lucide-react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Progress } from "../components/ui/progress"
import { RatingSystem } from "./rating-system"

interface ProductDetailProps {
  productId: string
  onBack: () => void
}

export function ProductDetail({ productId, onBack }: ProductDetailProps) {
  const [isLiked, setIsLiked] = useState(false)

  // Mock data - in real app this would come from API
  const product = {
    id: productId,
    name: "KAWS Companion",
    brand: "KAWS",
    currentRank: 1,
    previousRank: 3,
    rating: 9.2, // 改为10分制
    expertRating: 9.5,
    userRating: 8.9,
    ratingDistribution: [2156, 3245, 2847, 1893, 1456, 892, 358, 0, 0, 0], // 10-1分的分布
    dimensions: {
      quality: 9.8,
      design: 9.6,
      value: 8.5,
      collectibility: 9.7,
      packaging: 9.2,
    },
    totalVotes: 12847,
    price: "$299",
    category: "Art Toys",
    releaseDate: "2023-10-15",
    description:
      "The iconic KAWS Companion figure featuring the signature crossed-out eyes and expressive pose. A must-have collectible for art toy enthusiasts.",
    images: [
      "/placeholder.svg?height=600&width=600&text=KAWS+Main",
      "/placeholder.svg?height=400&width=400&text=KAWS+Side",
      "/placeholder.svg?height=400&width=400&text=KAWS+Back",
    ],
    stats: {
      weeklyGrowth: 23.5,
      monthlyGrowth: 45.2,
      totalViews: 234567,
      totalLikes: 45678,
      totalShares: 8901,
    },
    trendData: [
      { week: "W1", rank: 5 },
      { week: "W2", rank: 4 },
      { week: "W3", rank: 3 },
      { week: "W4", rank: 1 },
    ],
  }

  const expertReviews = [
    {
      id: 1,
      expert: {
        name: "Alex Chen",
        title: "Art Toy Specialist",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
        followers: 45600,
      },
      rating: 5,
      review:
        "Exceptional craftsmanship and attention to detail. The KAWS Companion represents the pinnacle of contemporary art toys.",
      likes: 234,
      date: "2024-01-15",
    },
    {
      id: 2,
      expert: {
        name: "Sarah Kim",
        title: "Collectibles Curator",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
        followers: 32100,
      },
      rating: 5,
      review: "A timeless piece that bridges the gap between street art and high-end collectibles. Investment-worthy.",
      likes: 189,
      date: "2024-01-12",
    },
  ]

  const topRecommendations = [
    {
      id: 1,
      type: "video",
      title: "KAWS Companion Unboxing & Review",
      creator: "ToyReviewPro",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Video+Thumbnail",
      views: 125000,
      likes: 8900,
      duration: "12:34",
    },
    {
      id: 2,
      type: "post",
      title: "Why KAWS Companion is Worth Every Penny",
      creator: "CollectorInsights",
      image: "/placeholder.svg?height=200&width=300&text=Post+Image",
      likes: 5600,
      comments: 234,
    },
  ]

  const getRankTrend = () => {
    const change = product.previousRank - product.currentRank
    if (change > 0) {
      return { direction: "up", value: change, color: "text-green-400" }
    } else if (change < 0) {
      return { direction: "down", value: Math.abs(change), color: "text-red-400" }
    }
    return { direction: "same", value: 0, color: "text-gray-400" }
  }

  const trend = getRankTrend()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-purple-900/20 bg-gray-900/50">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-gray-300 hover:text-white hover:bg-purple-900/30 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Rankings
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Images */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-900 mb-4">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden bg-gray-900 cursor-pointer hover:ring-2 hover:ring-purple-500"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-purple-900/50 text-purple-300 border-purple-700">#{product.currentRank}</Badge>
                <Badge variant="outline" className="border-gray-700 text-gray-300">
                  {product.category}
                </Badge>
                {trend.direction === "up" && (
                  <Badge className="bg-green-900/50 text-green-300 border-green-700">
                    <TrendingUp className="h-3 w-3 mr-1" />+{trend.value}
                  </Badge>
                )}
                {trend.direction === "down" && (
                  <Badge className="bg-red-900/50 text-red-300 border-red-700">
                    <TrendingDown className="h-3 w-3 mr-1" />-{trend.value}
                  </Badge>
                )}
              </div>

              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-xl text-gray-300 mb-4">by {product.brand}</p>

              {/* 在产品header之后添加详细评分系统 */}
              <RatingSystem
                productId={product.id}
                overallRating={product.rating}
                totalVotes={product.totalVotes}
                expertRating={product.expertRating}
                userRating={product.userRating}
                ratingDistribution={product.ratingDistribution}
                dimensions={product.dimensions}
                onRate={(rating) => console.log("User rated:", rating)}
                userVote={undefined} // 用户尚未评分
              />

              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-gray-400">({product.totalVotes.toLocaleString()} votes)</span>
                </div>
                <div className="text-2xl font-bold text-purple-400">{product.price}</div>
              </div>

              <p className="text-gray-300 mb-6">{product.description}</p>

              <div className="flex items-center gap-4">
                <Button
                  variant={isLiked ? "default" : "outline"}
                  onClick={() => setIsLiked(!isLiked)}
                  className={`${
                    isLiked
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "border-purple-600 text-purple-400 hover:bg-purple-900/30"
                  }`}
                >
                  <Heart className={`h-4 w-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                  {isLiked ? "Liked" : "Like"}
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardContent className="p-4 text-center">
                  <Eye className="h-6 w-6 mx-auto mb-2 text-purple-400" />
                  <div className="text-lg font-bold">{product.stats.totalViews.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Total Views</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardContent className="p-4 text-center">
                  <Heart className="h-6 w-6 mx-auto mb-2 text-red-400" />
                  <div className="text-lg font-bold">{product.stats.totalLikes.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Total Likes</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-6 w-6 mx-auto mb-2 text-green-400" />
                  <div className="text-lg font-bold">+{product.stats.weeklyGrowth}%</div>
                  <div className="text-xs text-gray-400">Weekly Growth</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardContent className="p-4 text-center">
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-blue-400" />
                  <div className="text-lg font-bold">+{product.stats.monthlyGrowth}%</div>
                  <div className="text-xs text-gray-400">Monthly Growth</div>
                </CardContent>
              </Card>
            </div>

            {/* Ranking Trend Chart */}
            <Card className="bg-gray-900/50 border-purple-900/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Ranking Trend</h3>
                <div className="space-y-3">
                  {product.trendData.map((data, index) => (
                    <div key={data.week} className="flex items-center gap-4">
                      <div className="w-8 text-sm text-gray-400">{data.week}</div>
                      <div className="flex-1">
                        <Progress value={((6 - data.rank) / 5) * 100} className="h-2" />
                      </div>
                      <div className="w-12 text-right font-semibold">#{data.rank}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Content Tabs */}
            <Tabs defaultValue="experts" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-900/50">
                <TabsTrigger value="experts" className="data-[state=active]:bg-purple-900/50">
                  Expert Reviews
                </TabsTrigger>
                <TabsTrigger value="community" className="data-[state=active]:bg-purple-900/50">
                  Top Posts
                </TabsTrigger>
                <TabsTrigger value="videos" className="data-[state=active]:bg-purple-900/50">
                  Featured Videos
                </TabsTrigger>
              </TabsList>

              <TabsContent value="experts" className="mt-6">
                <div className="space-y-4">
                  {expertReviews.map((review) => (
                    <Card key={review.id} className="bg-gray-900/50 border-purple-900/30">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="border border-purple-600">
                            <AvatarImage src={review.expert.avatar || "/placeholder.svg"} />
                            <AvatarFallback className="bg-purple-900">{review.expert.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-semibold">{review.expert.name}</span>
                              {review.expert.verified && <Award className="h-4 w-4 text-purple-400" />}
                              <Badge variant="outline" className="border-gray-700 text-gray-400 text-xs">
                                {review.expert.title}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <span className="text-sm text-gray-400">
                                {review.expert.followers.toLocaleString()} followers
                              </span>
                            </div>
                            <p className="text-gray-300 mb-3">{review.review}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <button className="flex items-center gap-1 hover:text-purple-400">
                                <ThumbsUp className="h-4 w-4" />
                                {review.likes}
                              </button>
                              <span>{review.date}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="community" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {topRecommendations
                    .filter((rec) => rec.type === "post")
                    .map((post) => (
                      <Card key={post.id} className="bg-gray-900/50 border-purple-900/30 overflow-hidden">
                        <div className="aspect-video bg-gray-800">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-2">{post.title}</h4>
                          <p className="text-sm text-gray-400 mb-3">by {post.creator}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <Heart className="h-4 w-4" />
                              {post.likes.toLocaleString()}
                            </span>
                            <span>{post.comments} comments</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="videos" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {topRecommendations
                    .filter((rec) => rec.type === "video")
                    .map((video) => (
                      <Card key={video.id} className="bg-gray-900/50 border-purple-900/30 overflow-hidden">
                        <div className="relative aspect-video bg-gray-800">
                          <img
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Button size="icon" className="bg-purple-600 hover:bg-purple-700 rounded-full">
                              <Play className="h-6 w-6" />
                            </Button>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs">
                            {video.duration}
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-2">{video.title}</h4>
                          <p className="text-sm text-gray-400 mb-3">by {video.creator}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {video.views.toLocaleString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <ThumbsUp className="h-4 w-4" />
                              {video.likes.toLocaleString()}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
