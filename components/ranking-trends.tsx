"use client"

import { useState } from "react"
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// 模拟趋势数据
const trendData = [
  {
    id: 1,
    name: "KAWS Companion",
    currentRank: 1,
    history: [
      { week: "W1", rank: 5, votes: 8900 },
      { week: "W2", rank: 4, votes: 9800 },
      { week: "W3", rank: 3, votes: 11200 },
      { week: "W4", rank: 1, votes: 12847 },
    ],
    momentum: "strong_up",
    prediction: "stable",
  },
  {
    id: 2,
    name: "POP MART MOLLY",
    currentRank: 2,
    history: [
      { week: "W1", rank: 2, votes: 8500 },
      { week: "W2", rank: 2, votes: 8800 },
      { week: "W3", rank: 2, votes: 9000 },
      { week: "W4", rank: 2, votes: 9156 },
    ],
    momentum: "stable",
    prediction: "stable",
  },
  {
    id: 3,
    name: "LEGO Architecture",
    currentRank: 3,
    history: [
      { week: "W1", rank: 1, votes: 9200 },
      { week: "W2", rank: 1, votes: 8900 },
      { week: "W3", rank: 1, votes: 8100 },
      { week: "W4", rank: 3, votes: 7234 },
    ],
    momentum: "declining",
    prediction: "down",
  },
]

export function RankingTrends() {
  const [selectedPeriod, setSelectedPeriod] = useState("4weeks")

  const getMomentumIcon = (momentum: string) => {
    switch (momentum) {
      case "strong_up":
        return <TrendingUp className="h-4 w-4 text-green-400" />
      case "declining":
        return <TrendingDown className="h-4 w-4 text-red-400" />
      default:
        return <BarChart3 className="h-4 w-4 text-gray-400" />
    }
  }

  const getMomentumColor = (momentum: string) => {
    switch (momentum) {
      case "strong_up":
        return "text-green-400"
      case "declining":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  const getPredictionBadge = (prediction: string) => {
    switch (prediction) {
      case "up":
        return <Badge className="bg-green-900/50 text-green-300 border-green-700">↗ Rising</Badge>
      case "down":
        return <Badge className="bg-red-900/50 text-red-300 border-red-700">↘ Falling</Badge>
      default:
        return <Badge className="bg-gray-900/50 text-gray-300 border-gray-700">→ Stable</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Ranking Trends</h2>
        <div className="flex gap-2">
          <Button
            variant={selectedPeriod === "4weeks" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod("4weeks")}
          >
            4 Weeks
          </Button>
          <Button
            variant={selectedPeriod === "3months" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod("3months")}
          >
            3 Months
          </Button>
          <Button
            variant={selectedPeriod === "1year" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod("1year")}
          >
            1 Year
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {trendData.map((item) => (
          <Card key={item.id} className="bg-gray-900/50 border-purple-900/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <Badge className="bg-purple-900/50 text-purple-300">#{item.currentRank}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Trend Chart */}
                <div className="space-y-2">
                  <div className="text-sm text-gray-400">Ranking History</div>
                  <div className="space-y-1">
                    {item.history.map((week, index) => (
                      <div key={week.week} className="flex items-center gap-3">
                        <span className="text-xs text-gray-400 w-8">{week.week}</span>
                        <div className="flex-1">
                          <Progress value={((6 - week.rank) / 5) * 100} className="h-2" />
                        </div>
                        <span className="text-xs font-medium w-8">#{week.rank}</span>
                        <span className="text-xs text-gray-400 w-16">{week.votes.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Momentum */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getMomentumIcon(item.momentum)}
                    <span className={`text-sm font-medium ${getMomentumColor(item.momentum)}`}>
                      {item.momentum === "strong_up"
                        ? "Strong Growth"
                        : item.momentum === "declining"
                          ? "Declining"
                          : "Stable"}
                    </span>
                  </div>
                  {getPredictionBadge(item.prediction)}
                </div>

                {/* Vote Growth */}
                <div>
                  <div className="text-sm text-gray-400 mb-1">Vote Growth</div>
                  <div className="flex items-center gap-2">
                    <Progress
                      value={Math.abs(((item.history[3].votes - item.history[0].votes) / item.history[0].votes) * 100)}
                      className="flex-1 h-2"
                    />
                    <span
                      className={`text-sm font-medium ${
                        item.history[3].votes > item.history[0].votes ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {item.history[3].votes > item.history[0].votes ? "+" : ""}
                      {(((item.history[3].votes - item.history[0].votes) / item.history[0].votes) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
