"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Globe } from "lucide-react"

// 模拟全球用户分布数据
const userDistributionData = [
  { region: "North America", users: 12500, growth: "+15%", color: "#8B5CF6", countries: ["USA", "Canada", "Mexico"] },
  { region: "Europe", users: 9800, growth: "+12%", color: "#06B6D4", countries: ["UK", "Germany", "France", "Italy"] },
  { region: "East Asia", users: 18200, growth: "+28%", color: "#10B981", countries: ["China", "Japan", "South Korea"] },
  {
    region: "Southeast Asia",
    users: 7600,
    growth: "+22%",
    color: "#F59E0B",
    countries: ["Singapore", "Thailand", "Malaysia"],
  },
  { region: "Oceania", users: 2100, growth: "+8%", color: "#EF4444", countries: ["Australia", "New Zealand"] },
  {
    region: "South America",
    users: 3400,
    growth: "+18%",
    color: "#EC4899",
    countries: ["Brazil", "Argentina", "Chile"],
  },
  { region: "Africa", users: 1800, growth: "+35%", color: "#84CC16", countries: ["South Africa", "Nigeria", "Kenya"] },
]

const totalUsers = userDistributionData.reduce((sum, region) => sum + region.users, 0)

export function UserDistributionMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  const getRegionData = (regionName: string) => {
    return userDistributionData.find((r) => r.region === regionName)
  }

  return (
    <Card className="bg-gray-900/50 border-purple-900/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-purple-400" />
          Global User Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 地图区域 */}
          <div className="lg:col-span-2">
            <div className="relative bg-gray-800/50 rounded-lg p-4 h-80">
              {/* 简化的世界地图 SVG */}
              <svg
                viewBox="0 0 800 400"
                className="w-full h-full"
                style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}
              >
                {/* 北美 */}
                <path
                  d="M50 80 L200 60 L220 120 L180 180 L80 160 Z"
                  fill={hoveredRegion === "North America" ? "#A855F7" : "#8B5CF6"}
                  stroke="#1F2937"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredRegion("North America")}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => setSelectedRegion("North America")}
                />

                {/* 欧洲 */}
                <path
                  d="M280 60 L380 50 L400 100 L360 140 L300 130 Z"
                  fill={hoveredRegion === "Europe" ? "#0891B2" : "#06B6D4"}
                  stroke="#1F2937"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredRegion("Europe")}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => setSelectedRegion("Europe")}
                />

                {/* 东亚 */}
                <path
                  d="M500 80 L650 70 L680 140 L620 180 L520 170 Z"
                  fill={hoveredRegion === "East Asia" ? "#059669" : "#10B981"}
                  stroke="#1F2937"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredRegion("East Asia")}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => setSelectedRegion("East Asia")}
                />

                {/* 东南亚 */}
                <path
                  d="M520 200 L620 190 L640 240 L580 260 L540 250 Z"
                  fill={hoveredRegion === "Southeast Asia" ? "#D97706" : "#F59E0B"}
                  stroke="#1F2937"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredRegion("Southeast Asia")}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => setSelectedRegion("Southeast Asia")}
                />

                {/* 大洋洲 */}
                <path
                  d="M650 280 L720 270 L730 310 L680 320 L660 300 Z"
                  fill={hoveredRegion === "Oceania" ? "#DC2626" : "#EF4444"}
                  stroke="#1F2937"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredRegion("Oceania")}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => setSelectedRegion("Oceania")}
                />

                {/* 南美 */}
                <path
                  d="M150 220 L220 210 L240 300 L180 340 L140 320 Z"
                  fill={hoveredRegion === "South America" ? "#DB2777" : "#EC4899"}
                  stroke="#1F2937"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredRegion("South America")}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => setSelectedRegion("South America")}
                />

                {/* 非洲 */}
                <path
                  d="M300 180 L400 170 L420 280 L360 320 L280 300 Z"
                  fill={hoveredRegion === "Africa" ? "#65A30D" : "#84CC16"}
                  stroke="#1F2937"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredRegion("Africa")}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => setSelectedRegion("Africa")}
                />

                {/* 用户密度点 */}
                {userDistributionData.map((region, index) => {
                  const positions = [
                    { x: 125, y: 120 }, // North America
                    { x: 340, y: 95 }, // Europe
                    { x: 585, y: 125 }, // East Asia
                    { x: 580, y: 225 }, // Southeast Asia
                    { x: 690, y: 295 }, // Oceania
                    { x: 185, y: 265 }, // South America
                    { x: 360, y: 225 }, // Africa
                  ]

                  const size = Math.max(3, (region.users / totalUsers) * 30)

                  return (
                    <circle
                      key={region.region}
                      cx={positions[index].x}
                      cy={positions[index].y}
                      r={size}
                      fill="rgba(255,255,255,0.8)"
                      stroke={region.color}
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                  )
                })}
              </svg>

              {/* 悬停信息 */}
              {hoveredRegion && (
                <div className="absolute top-4 right-4 bg-black/80 text-white p-3 rounded-lg border border-purple-600">
                  <div className="font-semibold">{hoveredRegion}</div>
                  <div className="text-sm text-gray-300">
                    {getRegionData(hoveredRegion)?.users.toLocaleString()} users
                  </div>
                  <div className="text-sm text-green-400">{getRegionData(hoveredRegion)?.growth} growth</div>
                </div>
              )}
            </div>
          </div>

          {/* 统计信息 */}
          <div className="space-y-4">
            <div className="text-center p-4 bg-purple-900/30 rounded-lg">
              <div className="text-2xl font-bold text-white">{totalUsers.toLocaleString()}</div>
              <div className="text-sm text-gray-300">Total Active Users</div>
            </div>

            <div className="space-y-3">
              {userDistributionData
                .sort((a, b) => b.users - a.users)
                .map((region, index) => (
                  <div
                    key={region.region}
                    className={`p-3 rounded-lg border transition-all cursor-pointer ${
                      selectedRegion === region.region
                        ? "border-purple-500 bg-purple-900/30"
                        : "border-gray-700 bg-gray-800/30 hover:border-gray-600"
                    }`}
                    onClick={() => setSelectedRegion(selectedRegion === region.region ? null : region.region)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: region.color }} />
                        <span className="font-medium text-sm">{region.region}</span>
                      </div>
                      <Badge className="bg-green-900/50 text-green-300 border-green-700 text-xs">{region.growth}</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3 text-gray-400" />
                        <span className="text-sm text-gray-300">{region.users.toLocaleString()}</span>
                      </div>
                      <div className="text-xs text-gray-400">{((region.users / totalUsers) * 100).toFixed(1)}%</div>
                    </div>

                    {/* 进度条 */}
                    <div className="mt-2 w-full bg-gray-700 rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full transition-all duration-500"
                        style={{
                          backgroundColor: region.color,
                          width: `${(region.users / Math.max(...userDistributionData.map((r) => r.users))) * 100}%`,
                        }}
                      />
                    </div>

                    {/* 展开的详细信息 */}
                    {selectedRegion === region.region && (
                      <div className="mt-3 pt-3 border-t border-gray-700">
                        <div className="text-xs text-gray-400 mb-1">Top Countries:</div>
                        <div className="flex flex-wrap gap-1">
                          {region.countries.map((country) => (
                            <Badge key={country} variant="outline" className="text-xs border-gray-600 text-gray-300">
                              {country}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* 底部统计 */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
            <TrendingUp className="h-5 w-5 mx-auto mb-1 text-green-400" />
            <div className="text-lg font-bold text-white">+19.2%</div>
            <div className="text-xs text-gray-400">Average Growth</div>
          </div>

          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
            <Users className="h-5 w-5 mx-auto mb-1 text-blue-400" />
            <div className="text-lg font-bold text-white">7</div>
            <div className="text-xs text-gray-400">Active Regions</div>
          </div>

          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
            <Globe className="h-5 w-5 mx-auto mb-1 text-purple-400" />
            <div className="text-lg font-bold text-white">24</div>
            <div className="text-xs text-gray-400">Countries</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
