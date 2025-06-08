"use client"

import { useState } from "react"
import { Check, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"
import { Label } from "../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Slider } from "../components/ui/slider"
import { Badge } from "../components/ui/badge"

interface SearchFiltersProps {
  filters: {
    priceRange: number[]
    categories: string[]
    brands: string[]
    rating: number
    availability: string
  }
  onApplyFilters: (filters: any) => void
}

export function SearchFilters({ filters, onApplyFilters }: SearchFiltersProps) {
  const [localFilters, setLocalFilters] = useState(filters)
  const [priceRange, setPriceRange] = useState(filters.priceRange)

  // 模拟数据
  const categories = [
    { id: "figures", label: "Figures", count: 245 },
    { id: "blindBox", label: "Blind Box", count: 189 },
    { id: "blocks", label: "Building Blocks", count: 156 },
    { id: "models", label: "Models", count: 132 },
    { id: "plush", label: "Plush", count: 98 },
    { id: "cards", label: "Trading Cards", count: 76 },
  ]

  const brands = [
    { id: "kaws", label: "KAWS", count: 87 },
    { id: "popmart", label: "POP MART", count: 65 },
    { id: "lego", label: "LEGO", count: 54 },
    { id: "bandai", label: "Bandai", count: 43 },
    { id: "funko", label: "Funko", count: 38 },
    { id: "medicom", label: "Medicom Toy", count: 29 },
  ]

  // 处理类别变更
  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    setLocalFilters((prev) => {
      if (checked) {
        return { ...prev, categories: [...prev.categories, categoryId] }
      } else {
        return {
          ...prev,
          categories: prev.categories.filter((id) => id !== categoryId),
        }
      }
    })
  }

  // 处理品牌变更
  const handleBrandChange = (brandId: string, checked: boolean) => {
    setLocalFilters((prev) => {
      if (checked) {
        return { ...prev, brands: [...prev.brands, brandId] }
      } else {
        return {
          ...prev,
          brands: prev.brands.filter((id) => id !== brandId),
        }
      }
    })
  }

  // 处理评分变更
  const handleRatingChange = (rating: number) => {
    setLocalFilters((prev) => ({ ...prev, rating }))
  }

  // 处理可用性变更
  const handleAvailabilityChange = (availability: string) => {
    setLocalFilters((prev) => ({ ...prev, availability }))
  }

  // 处理价格范围变更
  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value)
  }

  // 应用筛选条件
  const applyFilters = () => {
    onApplyFilters({
      ...localFilters,
      priceRange,
    })
  }

  // 重置筛选条件
  const resetFilters = () => {
    setLocalFilters({
      priceRange: [0, 1000],
      categories: [],
      brands: [],
      rating: 0,
      availability: "all",
    })
    setPriceRange([0, 1000])
  }

  // 获取活跃筛选器数量
  const getActiveFilterCount = () => {
    let count = 0
    if (localFilters.categories.length > 0) count++
    if (localFilters.brands.length > 0) count++
    if (localFilters.rating > 0) count++
    if (localFilters.availability !== "all") count++
    if (priceRange[0] !== filters.priceRange[0] || priceRange[1] !== filters.priceRange[1]) count++
    return count
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Filters</h3>
        <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0" onClick={resetFilters}>
          Reset all
        </Button>
      </div>

      {/* 活跃筛选器 */}
      {getActiveFilterCount() > 0 && (
        <div>
          <h4 className="text-sm text-gray-400 mb-2">Active filters</h4>
          <div className="flex flex-wrap gap-2">
            {localFilters.categories.map((category) => {
              const categoryObj = categories.find((c) => c.id === category)
              return (
                <Badge
                  key={category}
                  className="bg-purple-900/50 text-purple-300 border-purple-700 flex items-center gap-1"
                >
                  {categoryObj?.label}
                  <button className="ml-1" onClick={() => handleCategoryChange(category, false)}>
                    ×
                  </button>
                </Badge>
              )
            })}
            {localFilters.brands.map((brand) => {
              const brandObj = brands.find((b) => b.id === brand)
              return (
                <Badge key={brand} className="bg-blue-900/50 text-blue-300 border-blue-700 flex items-center gap-1">
                  {brandObj?.label}
                  <button className="ml-1" onClick={() => handleBrandChange(brand, false)}>
                    ×
                  </button>
                </Badge>
              )
            })}
            {localFilters.rating > 0 && (
              <Badge className="bg-yellow-900/50 text-yellow-300 border-yellow-700 flex items-center gap-1">
                {localFilters.rating}+ Stars
                <button className="ml-1" onClick={() => handleRatingChange(0)}>
                  ×
                </button>
              </Badge>
            )}
            {localFilters.availability !== "all" && (
              <Badge className="bg-green-900/50 text-green-300 border-green-700 flex items-center gap-1">
                {localFilters.availability === "inStock" ? "In Stock" : "Pre-order"}
                <button className="ml-1" onClick={() => handleAvailabilityChange("all")}>
                  ×
                </button>
              </Badge>
            )}
            {(priceRange[0] !== filters.priceRange[0] || priceRange[1] !== filters.priceRange[1]) && (
              <Badge className="bg-red-900/50 text-red-300 border-red-700 flex items-center gap-1">
                ${priceRange[0]} - ${priceRange[1]}
                <button className="ml-1" onClick={() => setPriceRange(filters.priceRange)}>
                  ×
                </button>
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* 价格范围 */}
      <Card className="bg-gray-900/50 border-purple-900/30">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <Slider
              defaultValue={priceRange}
              min={0}
              max={1000}
              step={10}
              value={priceRange}
              onValueChange={handlePriceRangeChange}
              className="mb-4"
            />
            <div className="flex items-center justify-between">
              <div className="bg-gray-800 rounded px-3 py-1 text-sm">${priceRange[0]}</div>
              <div className="bg-gray-800 rounded px-3 py-1 text-sm">${priceRange[1]}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 类别 */}
      <Card className="bg-gray-900/50 border-purple-900/30">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category.id}`}
                  checked={localFilters.categories.includes(category.id)}
                  onCheckedChange={(checked) => handleCategoryChange(category.id, checked === true)}
                />
                <Label
                  htmlFor={`category-${category.id}`}
                  className="flex items-center justify-between w-full text-sm cursor-pointer"
                >
                  <span>{category.label}</span>
                  <Badge variant="outline" className="text-xs">
                    {category.count}
                  </Badge>
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 品牌 */}
      <Card className="bg-gray-900/50 border-purple-900/30">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Brands</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {brands.map((brand) => (
              <div key={brand.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand.id}`}
                  checked={localFilters.brands.includes(brand.id)}
                  onCheckedChange={(checked) => handleBrandChange(brand.id, checked === true)}
                />
                <Label
                  htmlFor={`brand-${brand.id}`}
                  className="flex items-center justify-between w-full text-sm cursor-pointer"
                >
                  <span>{brand.label}</span>
                  <Badge variant="outline" className="text-xs">
                    {brand.count}
                  </Badge>
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 评分 */}
      <Card className="bg-gray-900/50 border-purple-900/30">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Rating</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <div
                key={rating}
                className={`flex items-center p-2 rounded cursor-pointer ${
                  localFilters.rating === rating ? "bg-purple-900/30 border border-purple-700" : "hover:bg-gray-800/50"
                }`}
                onClick={() => handleRatingChange(rating)}
              >
                <div className="flex items-center flex-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                    />
                  ))}
                  <span className="ml-2 text-sm">& Up</span>
                </div>
                {localFilters.rating === rating && <Check className="h-4 w-4 text-purple-400" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 可用性 */}
      <Card className="bg-gray-900/50 border-purple-900/30">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={localFilters.availability} onValueChange={handleAvailabilityChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="availability-all" />
              <Label htmlFor="availability-all">All items</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="inStock" id="availability-instock" />
              <Label htmlFor="availability-instock">In stock</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="preOrder" id="availability-preorder" />
              <Label htmlFor="availability-preorder">Pre-order</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* 应用按钮 */}
      <Button
        onClick={applyFilters}
        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
      >
        Apply Filters
      </Button>
    </div>
  )
}
