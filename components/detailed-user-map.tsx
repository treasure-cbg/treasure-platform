"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Search, Globe, Users, TrendingUp, ZoomIn, ZoomOut, MapIcon } from "lucide-react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

// 模拟国家级别的用户数据
const countryData = [
  // 亚洲
  { id: "CN", name: "China", region: "East Asia", users: 8500, growth: "+32%", color: "#10B981" },
  { id: "JP", name: "Japan", region: "East Asia", users: 5200, growth: "+18%", color: "#10B981" },
  { id: "KR", name: "South Korea", region: "East Asia", users: 4500, growth: "+25%", color: "#10B981" },
  { id: "SG", name: "Singapore", region: "Southeast Asia", users: 2800, growth: "+30%", color: "#F59E0B" },
  { id: "TH", name: "Thailand", region: "Southeast Asia", users: 2400, growth: "+22%", color: "#F59E0B" },
  { id: "MY", name: "Malaysia", region: "Southeast Asia", users: 2400, growth: "+15%", color: "#F59E0B" },
  { id: "IN", name: "India", region: "South Asia", users: 3800, growth: "+40%", color: "#8B5CF6" },

  // 北美
  { id: "US", name: "United States", region: "North America", users: 7500, growth: "+12%", color: "#3B82F6" },
  { id: "CA", name: "Canada", region: "North America", users: 3200, growth: "+15%", color: "#3B82F6" },
  { id: "MX", name: "Mexico", region: "North America", users: 1800, growth: "+20%", color: "#3B82F6" },

  // 欧洲
  { id: "GB", name: "United Kingdom", region: "Europe", users: 3100, growth: "+10%", color: "#06B6D4" },
  { id: "DE", name: "Germany", region: "Europe", users: 2800, growth: "+8%", color: "#06B6D4" },
  { id: "FR", name: "France", region: "Europe", users: 2200, growth: "+12%", color: "#06B6D4" },
  { id: "IT", name: "Italy", region: "Europe", users: 1700, growth: "+15%", color: "#06B6D4" },

  // 大洋洲
  { id: "AU", name: "Australia", region: "Oceania", users: 1600, growth: "+5%", color: "#EF4444" },
  { id: "NZ", name: "New Zealand", region: "Oceania", users: 500, growth: "+12%", color: "#EF4444" },

  // 南美
  { id: "BR", name: "Brazil", region: "South America", users: 2100, growth: "+18%", color: "#EC4899" },
  { id: "AR", name: "Argentina", region: "South America", users: 800, growth: "+15%", color: "#EC4899" },
  { id: "CL", name: "Chile", region: "South America", users: 500, growth: "+22%", color: "#EC4899" },

  // 非洲
  { id: "ZA", name: "South Africa", region: "Africa", users: 900, growth: "+28%", color: "#84CC16" },
  { id: "NG", name: "Nigeria", region: "Africa", users: 600, growth: "+45%", color: "#84CC16" },
  { id: "KE", name: "Kenya", region: "Africa", users: 300, growth: "+35%", color: "#84CC16" },
]

// 按地区分组
const regionGroups = {
  "East Asia": { color: "#10B981", totalUsers: 0 },
  "Southeast Asia": { color: "#F59E0B", totalUsers: 0 },
  "South Asia": { color: "#8B5CF6", totalUsers: 0 },
  "North America": { color: "#3B82F6", totalUsers: 0 },
  Europe: { color: "#06B6D4", totalUsers: 0 },
  Oceania: { color: "#EF4444", totalUsers: 0 },
  "South America": { color: "#EC4899", totalUsers: 0 },
  Africa: { color: "#84CC16", totalUsers: 0 },
}

// 计算每个地区的总用户数
countryData.forEach((country) => {
  if (regionGroups[country.region]) {
    regionGroups[country.region].totalUsers += country.users
  }
})

// 中国省份数据（示例）
const chinaProvinces = [
  { id: "BJ", name: "Beijing", users: 1200, growth: "+28%" },
  { id: "SH", name: "Shanghai", users: 1500, growth: "+32%" },
  { id: "GD", name: "Guangdong", users: 2200, growth: "+35%" },
  { id: "JS", name: "Jiangsu", users: 950, growth: "+30%" },
  { id: "ZJ", name: "Zhejiang", users: 850, growth: "+25%" },
  { id: "SC", name: "Sichuan", users: 680, growth: "+40%" },
  { id: "HB", name: "Hubei", users: 520, growth: "+22%" },
  { id: "SD", name: "Shandong", users: 600, growth: "+18%" },
]

// 美国州数据（示例）
const usStates = [
  { id: "CA", name: "California", users: 1800, growth: "+15%" },
  { id: "NY", name: "New York", users: 1200, growth: "+10%" },
  { id: "TX", name: "Texas", users: 950, growth: "+18%" },
  { id: "FL", name: "Florida", users: 850, growth: "+12%" },
  { id: "WA", name: "Washington", users: 680, growth: "+20%" },
  { id: "MA", name: "Massachusetts", users: 520, growth: "+8%" },
  { id: "IL", name: "Illinois", users: 480, growth: "+9%" },
]

const totalUsers = countryData.reduce((sum, country) => sum + country.users, 0)

export function DetailedUserMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"world" | "country">("world")
  const [selectedDetailCountry, setSelectedDetailCountry] = useState<string>("CN")
  const [zoomLevel, setZoomLevel] = useState(1)

  // 筛选国家数据
  const filteredCountries = countryData.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.region.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // 获取特定国家的省份/州数据
  const getDetailedRegions = (countryId: string) => {
    if (countryId === "CN") return chinaProvinces
    if (countryId === "US") return usStates
    return []
  }

  const detailedRegions = getDetailedRegions(selectedDetailCountry)

  // 获取国家坐标（简化版）
  const getCountryPosition = (id: string) => {
    const positions: { [key: string]: { x: number; y: number } } = {
      // 亚洲
      CN: { x: 600, y: 150 },
      JP: { x: 680, y: 140 },
      KR: { x: 650, y: 130 },
      SG: { x: 580, y: 220 },
      TH: { x: 560, y: 200 },
      MY: { x: 570, y: 230 },
      IN: { x: 520, y: 180 },

      // 北美
      US: { x: 150, y: 140 },
      CA: { x: 150, y: 100 },
      MX: { x: 130, y: 180 },

      // 欧洲
      GB: { x: 330, y: 110 },
      DE: { x: 350, y: 120 },
      FR: { x: 330, y: 130 },
      IT: { x: 350, y: 140 },

      // 大洋洲
      AU: { x: 650, y: 280 },
      NZ: { x: 700, y: 300 },

      // 南美
      BR: { x: 220, y: 250 },
      AR: { x: 200, y: 280 },
      CL: { x: 180, y: 270 },

      // 非洲
      ZA: { x: 380, y: 280 },
      NG: { x: 340, y: 210 },
      KE: { x: 390, y: 220 },
    }

    return positions[id] || { x: 0, y: 0 }
  }

  return (
    <Card className="bg-gray-900/50 border-purple-900/30">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-purple-400" />
          Global User Distribution
        </CardTitle>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setZoomLevel((prev) => Math.max(0.8, prev - 0.2))}
            disabled={zoomLevel <= 0.8}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setZoomLevel((prev) => Math.min(1.5, prev + 0.2))}
            disabled={zoomLevel >= 1.5}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Select value={viewMode} onValueChange={(value: "world" | "country") => setViewMode(value)}>
            <SelectTrigger className="w-[130px] h-8">
              <SelectValue placeholder="View Mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="world">World View</SelectItem>
              <SelectItem value="country">Country Detail</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-4 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search countries or regions..."
              className="pl-8 bg-gray-800/50 border-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {viewMode === "country" && (
            <Select value={selectedDetailCountry} onValueChange={setSelectedDetailCountry}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CN">China</SelectItem>
                <SelectItem value="US">United States</SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>

        <Tabs defaultValue="map" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="map" className="flex items-center gap-1">
              <MapIcon className="h-4 w-4" /> Map View
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" /> Data View
            </TabsTrigger>
          </TabsList>

          <TabsContent value="map">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* 地图区域 */}
              <div className="lg:col-span-2">
                <div className="relative bg-gray-800/50 rounded-lg p-4 h-[400px] overflow-hidden">
                  {viewMode === "world" ? (
                    /* 世界地图 SVG */
                    <div className="w-full h-full overflow-auto">
                      <div
                        style={{
                          transform: `scale(${zoomLevel})`,
                          transformOrigin: "center",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <svg
                          viewBox="0 0 800 400"
                          className="w-full h-full"
                          style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}
                        >
                          {/* 简化的世界地图轮廓 */}
                          <path
                            d="M50 80 L200 60 L220 120 L180 180 L80 160 Z"
                            fill={hoveredItem === "North America" ? "#4B91F1" : "#3B82F6"}
                            fillOpacity="0.3"
                            stroke="#3B82F6"
                            strokeWidth="1"
                          />
                          <path
                            d="M280 60 L380 50 L400 100 L360 140 L300 130 Z"
                            fill={hoveredItem === "Europe" ? "#22A5C0" : "#06B6D4"}
                            fillOpacity="0.3"
                            stroke="#06B6D4"
                            strokeWidth="1"
                          />
                          <path
                            d="M500 80 L650 70 L680 140 L620 180 L520 170 Z"
                            fill={hoveredItem === "East Asia" ? "#34D399" : "#10B981"}
                            fillOpacity="0.3"
                            stroke="#10B981"
                            strokeWidth="1"
                          />
                          <path
                            d="M520 200 L620 190 L640 240 L580 260 L540 250 Z"
                            fill={hoveredItem === "Southeast Asia" ? "#FBBF24" : "#F59E0B"}
                            fillOpacity="0.3"
                            stroke="#F59E0B"
                            strokeWidth="1"
                          />
                          <path
                            d="M650 280 L720 270 L730 310 L680 320 L660 300 Z"
                            fill={hoveredItem === "Oceania" ? "#F87171" : "#EF4444"}
                            fillOpacity="0.3"
                            stroke="#EF4444"
                            strokeWidth="1"
                          />
                          <path
                            d="M150 220 L220 210 L240 300 L180 340 L140 320 Z"
                            fill={hoveredItem === "South America" ? "#F472B6" : "#EC4899"}
                            fillOpacity="0.3"
                            stroke="#EC4899"
                            strokeWidth="1"
                          />
                          <path
                            d="M300 180 L400 170 L420 280 L360 320 L280 300 Z"
                            fill={hoveredItem === "Africa" ? "#A3E635" : "#84CC16"}
                            fillOpacity="0.3"
                            stroke="#84CC16"
                            strokeWidth="1"
                          />
                          <path
                            d="M450 150 L520 140 L540 200 L480 210 L460 190 Z"
                            fill={hoveredItem === "South Asia" ? "#A78BFA" : "#8B5CF6"}
                            fillOpacity="0.3"
                            stroke="#8B5CF6"
                            strokeWidth="1"
                          />

                          {/* 国家标记 */}
                          {countryData.map((country) => {
                            const position = getCountryPosition(country.id)
                            const size = Math.max(3, Math.sqrt(country.users) / 10)

                            return (
                              <g key={country.id}>
                                <circle
                                  cx={position.x}
                                  cy={position.y}
                                  r={size}
                                  fill={hoveredItem === country.id ? "#fff" : country.color}
                                  stroke={country.color}
                                  strokeWidth="1.5"
                                  className="cursor-pointer transition-all duration-300"
                                  onMouseEnter={() => setHoveredItem(country.id)}
                                  onMouseLeave={() => setHoveredItem(null)}
                                  onClick={() => setSelectedCountry(selectedCountry === country.id ? null : country.id)}
                                />
                                {(hoveredItem === country.id || selectedCountry === country.id) && (
                                  <text
                                    x={position.x + size + 5}
                                    y={position.y + 4}
                                    fontSize="10"
                                    fill="#fff"
                                    className="pointer-events-none"
                                  >
                                    {country.name}
                                  </text>
                                )}
                              </g>
                            )
                          })}
                        </svg>
                      </div>
                    </div>
                  ) : (
                    /* 国家详细地图 */
                    <div className="w-full h-full flex flex-col">
                      <h3 className="text-center text-lg font-medium mb-2">
                        {selectedDetailCountry === "CN" ? "China" : "United States"} - Provincial Distribution
                      </h3>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 overflow-y-auto p-2">
                        {detailedRegions.map((region) => (
                          <div
                            key={region.id}
                            className="bg-gray-800/80 border border-gray-700 rounded-lg p-3 hover:border-purple-500 transition-all cursor-pointer"
                            onMouseEnter={() => setHoveredItem(region.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{region.name}</span>
                              <Badge className="bg-green-900/50 text-green-300 border-green-700 text-xs">
                                {region.growth}
                              </Badge>
                            </div>
                            <div className="mt-2 flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3 text-gray-400" />
                                <span className="text-sm">{region.users.toLocaleString()}</span>
                              </div>
                              <div className="text-xs text-gray-400">
                                {((region.users / (selectedDetailCountry === "CN" ? 8500 : 7500)) * 100).toFixed(1)}%
                              </div>
                            </div>
                            <div className="mt-2 w-full bg-gray-700 rounded-full h-1.5">
                              <div
                                className="h-1.5 rounded-full bg-purple-500"
                                style={{
                                  width: `${(region.users / Math.max(...detailedRegions.map((r) => r.users))) * 100}%`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 悬停信息 - 国家 */}
                  {hoveredItem && viewMode === "world" && countryData.find((c) => c.id === hoveredItem) && (
                    <div className="absolute top-4 right-4 bg-black/80 text-white p-3 rounded-lg border border-purple-600">
                      <div className="font-semibold">{countryData.find((c) => c.id === hoveredItem)?.name}</div>
                      <div className="text-sm text-gray-300">
                        {countryData.find((c) => c.id === hoveredItem)?.users.toLocaleString()} users
                      </div>
                      <div className="text-sm text-green-400">
                        {countryData.find((c) => c.id === hoveredItem)?.growth} growth
                      </div>
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

                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                  {(searchQuery ? filteredCountries : countryData)
                    .sort((a, b) => b.users - a.users)
                    .map((country) => (
                      <div
                        key={country.id}
                        className={`p-3 rounded-lg border transition-all cursor-pointer ${
                          selectedCountry === country.id
                            ? "border-purple-500 bg-purple-900/30"
                            : "border-gray-700 bg-gray-800/30 hover:border-gray-600"
                        }`}
                        onClick={() => setSelectedCountry(selectedCountry === country.id ? null : country.id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: country.color }} />
                            <span className="font-medium text-sm">{country.name}</span>
                          </div>
                          <Badge className="bg-green-900/50 text-green-300 border-green-700 text-xs">
                            {country.growth}
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3 text-gray-400" />
                            <span className="text-sm text-gray-300">{country.users.toLocaleString()}</span>
                          </div>
                          <div className="text-xs text-gray-400">
                            {((country.users / totalUsers) * 100).toFixed(1)}%
                          </div>
                        </div>

                        {/* 进度条 */}
                        <div className="mt-2 w-full bg-gray-700 rounded-full h-1.5">
                          <div
                            className="h-1.5 rounded-full transition-all duration-500"
                            style={{
                              backgroundColor: country.color,
                              width: `${(country.users / Math.max(...countryData.map((r) => r.users))) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="data">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 地区分布 */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Regional Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(regionGroups)
                      .sort(([, a], [, b]) => b.totalUsers - a.totalUsers)
                      .map(([region, data]) => (
                        <div key={region} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }} />
                            <span className="text-sm">{region}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-300">{data.totalUsers.toLocaleString()}</span>
                            <div className="w-24 bg-gray-700 rounded-full h-1.5">
                              <div
                                className="h-1.5 rounded-full"
                                style={{
                                  backgroundColor: data.color,
                                  width: `${(data.totalUsers / totalUsers) * 100}%`,
                                }}
                              />
                            </div>
                            <span className="text-xs text-gray-400 w-10 text-right">
                              {((data.totalUsers / totalUsers) * 100).toFixed(1)}%
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* 增长热图 */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Growth Heatmap</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2">
                    {countryData
                      .sort((a, b) => Number.parseInt(b.growth) - Number.parseInt(a.growth))
                      .slice(0, 9)
                      .map((country) => {
                        const growthValue = Number.parseInt(country.growth)
                        let bgColor = "bg-green-900/20"
                        if (growthValue > 30) bgColor = "bg-green-900/60"
                        else if (growthValue > 20) bgColor = "bg-green-900/40"

                        return (
                          <div
                            key={country.id}
                            className={`p-2 rounded-lg ${bgColor} border border-green-900/30 flex flex-col items-center justify-center`}
                          >
                            <div className="text-xs font-medium mb-1">{country.name}</div>
                            <div className="text-green-400 font-bold">{country.growth}</div>
                          </div>
                        )
                      })}
                  </div>
                </CardContent>
              </Card>

              {/* 用户密度排名 */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Top 5 Countries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {countryData
                      .sort((a, b) => b.users - a.users)
                      .slice(0, 5)
                      .map((country, index) => (
                        <div key={country.id} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{country.name}</span>
                              <span className="text-sm">{country.users.toLocaleString()}</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
                              <div
                                className="h-1.5 rounded-full"
                                style={{
                                  backgroundColor: country.color,
                                  width: `${(country.users / countryData[0].users) * 100}%`,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* 增长最快 */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Fastest Growing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {countryData
                      .sort((a, b) => Number.parseInt(b.growth) - Number.parseInt(a.growth))
                      .slice(0, 5)
                      .map((country, index) => (
                        <div key={country.id} className="flex items-center gap-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                            style={{ backgroundColor: `${country.color}50` }}
                          >
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{country.name}</span>
                              <span className="text-green-400 font-medium">{country.growth}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <Users className="h-3 w-3" />
                              <span>{country.users.toLocaleString()} users</span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
