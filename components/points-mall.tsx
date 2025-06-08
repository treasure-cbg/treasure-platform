"use client"

import { Star, Clock, ShoppingCart } from "lucide-react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { useLanguage } from "@/hooks/use-language"

const pointsItems = [
  {
    id: 1,
    name: "限量版KAWS徽章",
    points: 500,
    originalPrice: "¥99",
    image: "/placeholder.svg?height=200&width=200",
    category: "周边",
    stock: 23,
    isHot: true,
  },
  {
    id: 2,
    name: "泡泡玛特优惠券",
    points: 200,
    originalPrice: "¥50",
    image: "/placeholder.svg?height=200&width=200",
    category: "优惠券",
    stock: 100,
  },
  {
    id: 3,
    name: "专属头像框",
    points: 100,
    originalPrice: "¥20",
    image: "/placeholder.svg?height=200&width=200",
    category: "虚拟物品",
    stock: 999,
  },
  {
    id: 4,
    name: "打榜加速卡",
    points: 50,
    originalPrice: "¥10",
    image: "/placeholder.svg?height=200&width=200",
    category: "道具",
    stock: 500,
  },
]

export function PointsMall() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t("pointsMall.title")}</h1>
        <p className="text-muted-foreground">{t("pointsMall.description")}</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">{t("pointsMall.categories.all")}</TabsTrigger>
          <TabsTrigger value="physical">{t("pointsMall.categories.physical")}</TabsTrigger>
          <TabsTrigger value="virtual">{t("pointsMall.categories.virtual")}</TabsTrigger>
          <TabsTrigger value="coupon">{t("pointsMall.categories.coupon")}</TabsTrigger>
          <TabsTrigger value="props">{t("pointsMall.categories.props")}</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pointsItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                {item.isHot && (
                  <div className="absolute top-2 left-2 z-10">
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white">🔥 {t("common.hot")}</Badge>
                  </div>
                )}

                <div className="aspect-square overflow-hidden bg-gradient-to-br from-amber-100 to-purple-100">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                    <h3 className="font-semibold line-clamp-2">{item.name}</h3>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-amber-500" />
                        <span className="font-bold text-lg text-amber-600">{item.points}</span>
                        <span className="text-sm text-muted-foreground">{t("nav.points")}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground line-through">{item.originalPrice}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>
                          {t("pointsMall.stock")} {item.stock}
                        </span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-amber-500 to-purple-600 hover:from-amber-600 hover:to-purple-700">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {t("pointsMall.exchange")}
                    </Button>
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
