"use client"

import { useState } from "react"
import { Code, Key, Book, Zap, Shield, Globe, Copy, Check, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DeveloperAPI() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const apiFeatures = [
    {
      title: "Real-time Rankings",
      description: "Access live ranking data with sub-second updates",
      icon: Zap,
      color: "yellow",
    },
    {
      title: "Global Coverage",
      description: "Data from 150+ countries and 7 major regions",
      icon: Globe,
      color: "blue",
    },
    {
      title: "Secure & Reliable",
      description: "99.9% uptime with enterprise-grade security",
      icon: Shield,
      color: "green",
    },
    {
      title: "Easy Integration",
      description: "RESTful API with comprehensive documentation",
      icon: Code,
      color: "purple",
    },
  ]

  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/rankings",
      description: "Get global treasure rankings",
      params: ["category", "limit", "offset", "region"],
    },
    {
      method: "GET",
      path: "/api/v1/items/{id}",
      description: "Get detailed item information",
      params: ["include_reviews", "include_stats"],
    },
    {
      method: "POST",
      path: "/api/v1/votes",
      description: "Submit a vote for an item",
      params: ["item_id", "rating", "dimensions"],
    },
    {
      method: "GET",
      path: "/api/v1/trends",
      description: "Get trending data and analytics",
      params: ["timeframe", "category", "region"],
    },
  ]

  const codeExamples = {
    javascript: `// Get top 10 rankings
const response = await fetch('https://api.treasurechamber.com/v1/rankings?limit=10', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const rankings = await response.json();
console.log(rankings);`,

    python: `import requests

# Get top 10 rankings
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.treasurechamber.com/v1/rankings?limit=10',
    headers=headers
)

rankings = response.json()
print(rankings)`,

    curl: `curl -X GET "https://api.treasurechamber.com/v1/rankings?limit=10" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
  }

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      requests: "1,000",
      features: ["Basic rankings data", "Community support", "Rate limit: 10/min"],
      color: "gray",
    },
    {
      name: "Developer",
      price: "$29",
      period: "/month",
      requests: "50,000",
      features: ["Full API access", "Email support", "Rate limit: 100/min", "Webhooks"],
      color: "purple",
      popular: true,
    },
    {
      name: "Business",
      price: "$99",
      period: "/month",
      requests: "500,000",
      features: ["Priority support", "Custom rate limits", "Analytics dashboard", "SLA guarantee"],
      color: "blue",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      requests: "Unlimited",
      features: ["Dedicated support", "Custom integrations", "On-premise options", "24/7 phone support"],
      color: "green",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Developer API
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build amazing applications with our comprehensive treasure ranking API
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
              <Key className="h-4 w-4 mr-2" />
              Get API Key
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-900/30">
              <Book className="h-4 w-4 mr-2" />
              View Documentation
            </Button>
          </div>
        </div>

        {/* API Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {apiFeatures.map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 border-purple-900/30">
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br from-${feature.color}-600 to-${feature.color}-700 mb-4`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="quickstart" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900/50 mb-8">
            <TabsTrigger value="quickstart" className="data-[state=active]:bg-purple-900/50">
              Quick Start
            </TabsTrigger>
            <TabsTrigger value="endpoints" className="data-[state=active]:bg-purple-900/50">
              Endpoints
            </TabsTrigger>
            <TabsTrigger value="examples" className="data-[state=active]:bg-purple-900/50">
              Examples
            </TabsTrigger>
            <TabsTrigger value="pricing" className="data-[state=active]:bg-purple-900/50">
              Pricing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quickstart">
            <div className="space-y-8">
              <Card className="bg-gray-900/50 border-purple-900/30">
                <CardHeader>
                  <CardTitle>Getting Started</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">1. Get Your API Key</h4>
                    <p className="text-gray-400 mb-4">
                      Sign up for a free account and generate your API key from the developer dashboard.
                    </p>
                    <Button className="bg-gradient-to-r from-purple-600 to-purple-700">Generate API Key</Button>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">2. Make Your First Request</h4>
                    <p className="text-gray-400 mb-4">
                      Use your API key to authenticate and make your first request to our rankings endpoint.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4 relative">
                      <code className="text-green-400 text-sm">
                        curl -H "Authorization: Bearer YOUR_API_KEY" https://api.treasurechamber.com/v1/rankings
                      </code>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2"
                        onClick={() =>
                          copyToClipboard(
                            'curl -H "Authorization: Bearer YOUR_API_KEY" https://api.treasurechamber.com/v1/rankings',
                            "quickstart",
                          )
                        }
                      >
                        {copiedCode === "quickstart" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">3. Explore the Data</h4>
                    <p className="text-gray-400">
                      Browse our comprehensive documentation to discover all available endpoints and features.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="endpoints">
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <Card key={index} className="bg-gray-900/50 border-purple-900/30">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className={`${endpoint.method === "GET" ? "bg-green-600" : "bg-blue-600"} text-white`}>
                            {endpoint.method}
                          </Badge>
                          <code className="text-purple-400 font-mono">{endpoint.path}</code>
                        </div>
                        <p className="text-gray-400">{endpoint.description}</p>
                      </div>
                      <Button variant="outline" size="sm" className="border-purple-600 text-purple-400">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Try it
                      </Button>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold mb-2">Parameters:</h5>
                      <div className="flex flex-wrap gap-2">
                        {endpoint.params.map((param, paramIndex) => (
                          <Badge key={paramIndex} variant="outline" className="border-gray-600 text-gray-300">
                            {param}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="examples">
            <div className="space-y-6">
              <Tabs defaultValue="javascript" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-800/50">
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>

                {Object.entries(codeExamples).map(([language, code]) => (
                  <TabsContent key={language} value={language}>
                    <Card className="bg-gray-900/50 border-purple-900/30">
                      <CardContent className="p-0">
                        <div className="relative">
                          <pre className="p-6 overflow-x-auto">
                            <code className="text-sm text-gray-300">{code}</code>
                          </pre>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute top-4 right-4"
                            onClick={() => copyToClipboard(code, language)}
                          >
                            {copiedCode === language ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </TabsContent>

          <TabsContent value="pricing">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`bg-gray-900/50 border-purple-900/30 relative ${
                    plan.popular ? "border-purple-600 scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-purple-600 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <div className="mb-6">
                      <div className="text-lg font-semibold">{plan.requests}</div>
                      <div className="text-sm text-gray-400">requests/month</div>
                    </div>
                    <ul className="space-y-2 mb-6 text-sm">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-400" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                    >
                      {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
