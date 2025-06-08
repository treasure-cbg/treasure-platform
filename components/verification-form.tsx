"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Upload, CheckCircle2, Award, Briefcase } from "lucide-react"

export function VerificationForm() {
  const [accountType, setAccountType] = useState("designer")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 模拟提交
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">认证中心</h1>
        <p className="text-muted-foreground">获得认证，享受更多特权</p>
      </div>

      {isSubmitted ? (
        <Card className="border-green-200 bg-green-50 dark:bg-green-900/20">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">申请已提交</h2>
              <p className="text-muted-foreground mb-4">
                我们已收到您的认证申请，正在审核中。审核结果将通过系统消息通知您。
              </p>
              <Button className="bg-gradient-to-r from-amber-500 to-purple-600">返回首页</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Tabs defaultValue="designer" onValueChange={setAccountType}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="designer" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              原创设计师认证
            </TabsTrigger>
            <TabsTrigger value="business" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              企业认证
            </TabsTrigger>
          </TabsList>

          <TabsContent value="designer">
            <Card>
              <CardHeader>
                <CardTitle>原创设计师认证</CardTitle>
                <CardDescription>认证后您将获得1.2倍投票权重，并获得"原创设计师"称号</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">真实姓名</Label>
                    <Input id="name" placeholder="请输入您的真实姓名" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="id">身份证号码</Label>
                    <Input id="id" placeholder="请输入您的身份证号码" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio">作品集链接</Label>
                    <Input id="portfolio" placeholder="请提供您的作品集链接" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">设计经验</Label>
                    <RadioGroup defaultValue="1-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="0-1" id="exp1" />
                        <Label htmlFor="exp1">1年以下</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-3" id="exp2" />
                        <Label htmlFor="exp2">1-3年</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-5" id="exp3" />
                        <Label htmlFor="exp3">3-5年</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5+" id="exp4" />
                        <Label htmlFor="exp4">5年以上</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="intro">个人简介</Label>
                    <Textarea id="intro" placeholder="请简要介绍您的设计风格和经历" required />
                  </div>

                  <div className="space-y-2">
                    <Label>上传作品证明</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">点击或拖拽文件至此处上传</p>
                      <p className="text-xs text-muted-foreground mt-1">支持JPG、PNG、PDF格式，最大10MB</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-purple-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "提交中..." : "提交认证申请"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="business">
            <Card>
              <CardHeader>
                <CardTitle>企业认证</CardTitle>
                <CardDescription>认证后您将获得0.8倍投票权重，并获得"认证企业"标识</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">企业名称</Label>
                    <Input id="company" placeholder="请输入企业全称" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="license">营业执照号码</Label>
                    <Input id="license" placeholder="请输入营业执照统一社会信用代码" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact">联系人姓名</Label>
                    <Input id="contact" placeholder="请输入企业联系人姓名" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">联系人职位</Label>
                    <Input id="position" placeholder="请输入联系人职位" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">联系电话</Label>
                    <Input id="phone" placeholder="请输入企业联系电话" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company-intro">企业简介</Label>
                    <Textarea id="company-intro" placeholder="请简要介绍贵公司的业务和产品" required />
                  </div>

                  <div className="space-y-2">
                    <Label>上传营业执照</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">点击或拖拽文件至此处上传</p>
                      <p className="text-xs text-muted-foreground mt-1">支持JPG、PNG、PDF格式，最大10MB</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "提交中..." : "提交认证申请"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}
