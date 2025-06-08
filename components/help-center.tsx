"use client"

import { useState } from "react"
import { Search, MessageCircle, Book, Video, Mail, Phone, Clock, CheckCircle, ArrowRight, Star } from "lucide-react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"

export function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("")

  const helpCategories = [
    {
      title: "Getting Started",
      icon: Book,
      color: "purple",
      articles: 12,
      description: "Learn the basics of using Treasure Chamber",
    },
    {
      title: "Rankings & Voting",
      icon: Star,
      color: "amber",
      articles: 8,
      description: "Understanding our ranking system and voting process",
    },
    {
      title: "Account & Profile",
      icon: MessageCircle,
      color: "blue",
      articles: 15,
      description: "Manage your account settings and profile",
    },
    {
      title: "Payments & Rewards",
      icon: CheckCircle,
      color: "green",
      articles: 6,
      description: "Points, rewards, and payment information",
    },
  ]

  const popularArticles = [
    {
      title: "How to vote on treasure rankings",
      views: "12.5K views",
      category: "Rankings",
      readTime: "3 min read",
    },
    {
      title: "Understanding the 10-point rating system",
      views: "8.9K views",
      category: "Rankings",
      readTime: "5 min read",
    },
    {
      title: "Setting up your collector profile",
      views: "7.2K views",
      category: "Account",
      readTime: "4 min read",
    },
    {
      title: "Earning and spending points in the rewards mall",
      views: "6.8K views",
      category: "Rewards",
      readTime: "6 min read",
    },
    {
      title: "Joining events and competitions",
      views: "5.4K views",
      category: "Events",
      readTime: "4 min read",
    },
  ]

  const faqs = [
    {
      question: "How does the ranking system work?",
      answer:
        "Our ranking system uses a combination of user votes, expert reviews, and market data to create comprehensive rankings. Each item is rated on a 10-point scale across multiple dimensions including quality, design, value, and collectibility.",
    },
    {
      question: "How can I become a verified collector?",
      answer:
        "To become a verified collector, you need to complete your profile, verify your identity, and demonstrate expertise in your collecting areas. Verified collectors get enhanced voting weight and special badges.",
    },
    {
      question: "What are points and how do I earn them?",
      answer:
        "Points are our reward currency that you can earn by voting, reviewing items, participating in events, and engaging with the community. Points can be exchanged for exclusive items in our rewards mall.",
    },
    {
      question: "Can I submit my own items for ranking?",
      answer:
        "Yes! Verified users can submit items for community ranking. All submissions go through a moderation process to ensure quality and authenticity.",
    },
    {
      question: "How do I report inappropriate content?",
      answer:
        "You can report any inappropriate content using the report button found on each item or user profile. Our moderation team reviews all reports within 24 hours.",
    },
  ]

  const contactOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      availability: "24/7",
      responseTime: "< 2 minutes",
      color: "green",
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      availability: "24/7",
      responseTime: "< 4 hours",
      color: "blue",
    },
    {
      title: "Phone Support",
      description: "Speak directly with our team",
      icon: Phone,
      availability: "Mon-Fri 9AM-6PM PST",
      responseTime: "Immediate",
      color: "purple",
    },
    {
      title: "Video Call",
      description: "Screen sharing and personalized help",
      icon: Video,
      availability: "By appointment",
      responseTime: "Same day",
      color: "amber",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Help Center
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Find answers, get support, and learn how to make the most of Treasure Chamber
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search for help articles, guides, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-gray-900/50 border-purple-800/30 text-white placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-purple-900/30 hover:border-purple-600/50 transition-all cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br from-${category.color}-600 to-${category.color}-700 mb-4`}
                  >
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{category.description}</p>
                  <Badge variant="outline" className="border-purple-600/50 text-purple-300">
                    {category.articles} articles
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900/50 mb-8">
            <TabsTrigger value="articles" className="data-[state=active]:bg-purple-900/50">
              Popular Articles
            </TabsTrigger>
            <TabsTrigger value="faq" className="data-[state=active]:bg-purple-900/50">
              FAQ
            </TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-purple-900/50">
              Contact Support
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Popular Articles</h3>
              {popularArticles.map((article, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-purple-900/30 hover:border-purple-600/50 transition-all cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2 hover:text-purple-400 transition-colors">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{article.views}</span>
                          <span>•</span>
                          <Badge variant="outline" className="border-purple-600/50 text-purple-300">
                            {article.category}
                          </Badge>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faq">
            <div>
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-purple-900/30 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:text-purple-400">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-300 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Support</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactOptions.map((option, index) => (
                  <Card key={index} className="bg-gray-900/50 border-purple-900/30">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br from-${option.color}-600 to-${option.color}-700`}
                        >
                          <option.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{option.title}</h4>
                          <p className="text-gray-400 mb-3">{option.description}</p>
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center gap-2">
                              <Clock className="h-3 w-3 text-gray-400" />
                              <span className="text-gray-300">{option.availability}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-400" />
                              <span className="text-gray-300">Response time: {option.responseTime}</span>
                            </div>
                          </div>
                          <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                            Start {option.title}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
