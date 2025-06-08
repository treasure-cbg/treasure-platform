"use client"

import { Briefcase, Users, TrendingUp, Globe, Award, Mail, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function BusinessPartnership() {
  const partnershipTypes = [
    {
      title: "Brand Partnership",
      description: "Collaborate with us to showcase your products to millions of treasure hunters worldwide",
      icon: Award,
      benefits: ["Global exposure", "Targeted audience", "Performance analytics", "Custom campaigns"],
      color: "purple",
    },
    {
      title: "Platform Integration",
      description: "Integrate your e-commerce platform with our ranking system for seamless user experience",
      icon: Globe,
      benefits: ["API access", "Real-time sync", "Custom widgets", "Technical support"],
      color: "blue",
    },
    {
      title: "Data Partnership",
      description: "Access our comprehensive market insights and consumer behavior data",
      icon: TrendingUp,
      benefits: ["Market reports", "Trend analysis", "Consumer insights", "Competitive intelligence"],
      color: "green",
    },
    {
      title: "Media Collaboration",
      description: "Partner with us for content creation, events, and media coverage",
      icon: Users,
      benefits: ["Content collaboration", "Event partnerships", "Media coverage", "Influencer network"],
      color: "amber",
    },
  ]

  const successStories = [
    {
      company: "KAWS Studio",
      logo: "/placeholder.svg?height=60&width=60",
      result: "+340% brand awareness",
      description: "Increased global recognition through our platform",
      category: "Art Toys",
    },
    {
      company: "POP MART",
      logo: "/placeholder.svg?height=60&width=60",
      result: "+250% sales growth",
      description: "Boosted sales through targeted campaigns",
      category: "Collectibles",
    },
    {
      company: "LEGO Group",
      logo: "/placeholder.svg?height=60&width=60",
      result: "+180% engagement",
      description: "Enhanced community engagement and loyalty",
      category: "Building Sets",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Business Partnership
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join forces with the world's leading treasure ranking platform. Reach millions of collectors, enthusiasts,
            and treasure hunters globally.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
              Start Partnership
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-900/30">
              Download Media Kit
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-700/30 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">2.5M+</div>
              <div className="text-sm text-gray-300">Monthly Active Users</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-blue-700/30 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-sm text-gray-300">Partner Brands</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-900/50 to-green-800/30 border-green-700/30 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-sm text-gray-300">Listed Products</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-amber-900/50 to-amber-800/30 border-amber-700/30 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-sm text-gray-300">Partner Satisfaction</div>
            </CardContent>
          </Card>
        </div>

        {/* Partnership Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-purple-900/30 hover:border-purple-600/50 transition-all"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-${type.color}-600 to-${type.color}-700`}
                    >
                      <type.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{type.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <div className="space-y-2 mb-6">
                    {type.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-purple-600 text-purple-400 hover:bg-purple-900/30">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-gray-900/50 border-purple-900/30">
                <CardContent className="p-6 text-center">
                  <Avatar className="h-16 w-16 mx-auto mb-4 border border-purple-600">
                    <AvatarImage src={story.logo || "/placeholder.svg"} />
                    <AvatarFallback className="bg-purple-900">{story.company[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold mb-2">{story.company}</h3>
                  <Badge variant="outline" className="border-purple-600 text-purple-300 mb-4">
                    {story.category}
                  </Badge>
                  <div className="text-2xl font-bold text-green-400 mb-2">{story.result}</div>
                  <p className="text-sm text-gray-300">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900/50 border-purple-900/30">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-gray-300 mb-6">
                    Ready to start your partnership journey? Contact our business development team to discuss
                    opportunities.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-purple-400" />
                      <span>partnerships@treasurechamber.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-purple-400" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-purple-400" />
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="bg-gray-800/50 border-purple-800/30 text-white placeholder:text-gray-400"
                    />
                    <Input
                      placeholder="Last Name"
                      className="bg-gray-800/50 border-purple-800/30 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Input
                    placeholder="Company"
                    className="bg-gray-800/50 border-purple-800/30 text-white placeholder:text-gray-400"
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    className="bg-gray-800/50 border-purple-800/30 text-white placeholder:text-gray-400"
                  />
                  <Textarea
                    placeholder="Tell us about your partnership goals..."
                    className="bg-gray-800/50 border-purple-800/30 text-white placeholder:text-gray-400 min-h-[120px]"
                  />
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                    Send Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
