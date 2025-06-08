"use client"

import { Filter, SortAsc, Grid, List } from "lucide-react"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
import { useLanguage } from "@/hooks/use-language"

interface FiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  selectedSort: string
  onSortChange: (sort: string) => void
  viewMode: "grid" | "list"
  onViewModeChange: (mode: "grid" | "list") => void
}

export function Filters({
  selectedCategory,
  onCategoryChange,
  selectedSort,
  onSortChange,
  viewMode,
  onViewModeChange,
}: FiltersProps) {
  const { t } = useLanguage()

  const categories = [
    { key: "all", label: t("categories.all") },
    { key: "figures", label: t("categories.figures") },
    { key: "blindBox", label: t("categories.blindBox") },
    { key: "blocks", label: t("categories.blocks") },
    { key: "models", label: t("categories.models") },
    { key: "plush", label: t("categories.plush") },
    { key: "cards", label: t("categories.cards") },
  ]

  const sortOptions = ["综合排名", "价格升序", "价格降序", "评分最高", "最新上架"]

  return (
    <div className="flex flex-col gap-4 p-4 bg-gradient-to-r from-amber-50 to-purple-50 dark:from-amber-950/20 dark:to-purple-950/20 rounded-xl">
      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category.key}
            variant={selectedCategory === category.key ? "default" : "secondary"}
            className={`cursor-pointer transition-all hover:scale-105 ${
              selectedCategory === category.key
                ? "bg-gradient-to-r from-amber-500 to-purple-600 text-white"
                : "hover:bg-amber-100 dark:hover:bg-amber-900/20"
            }`}
            onClick={() => onCategoryChange(category.key)}
          >
            {category.label}
          </Badge>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <SortAsc className="h-4 w-4" />
                {selectedSort}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {sortOptions.map((option) => (
                <DropdownMenuItem key={option} onClick={() => onSortChange(option)}>
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            筛选
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="icon"
            onClick={() => onViewModeChange("grid")}
            className="h-8 w-8"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="icon"
            onClick={() => onViewModeChange("list")}
            className="h-8 w-8"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
