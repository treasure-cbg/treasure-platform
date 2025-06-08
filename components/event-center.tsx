"use client"

import { Calendar, Clock, MapPin, Users, Trophy, Star, ArrowRight, Play, Heart, Share2, Ticket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function EventCenter() {
  const featuredEvents = [
    {
      id: 1,
      title: "Global Treasure Hunt 2024",
      description: "The biggest treasure hunting competition with $100K in prizes",
      image: "/placeholder.svg?height=400&width=600&text=Global+Treasure+Hunt",
      date: "2024-03-15",
      time: "10:00 AM PST",
      location: "Worldwide (Online)",
      participants: 15420,
      prizes: "$100,000",
      status: "upcoming",
      category: "Competition",
      featured: true,
    },
    {
      id: 2,
      title: "KAWS Exhibition Opening",
      description: "Exclusive preview of the latest KAWS collection",
      image: "/placeholder.svg?height=400&width=600&text=KAWS+Exhibition",
      date: "2024-02-28",
      time: "6:00 PM EST",
      location: "New York, NY",
      participants: 500,
      status: "upcoming",
      category: "Exhibition",
      featured: true,
    },
  ]

  const upcomingEvents = [
    {
      id: 3,
      title: "Collector's Meetup Tokyo",
      date: "2024-03-20",
      time: "2:00 PM JST",
      location: "Tokyo, Japan",
      participants: 200,
      category: "Meetup",
      image: "/placeholder.svg?height=200&width=300&text=Tokyo+Meetup",
    },
    {
      id: 4,
      title: "NFT Treasure Drop",
      date: "2024-03-25",
      time: "12:00 PM UTC",
      location: "Online",
      participants: 5000,
      category: "Drop",
      image: "/placeholder.svg?height=200&width=300&text=NFT+Drop",
    },
    {
      id: 5,
      title: "Designer Spotlight: Takashi Murakami",
      date: "2024-04-01",
      time: "8:00 PM EST",
      location: "Online",
      participants: 1200,
      category: "Webinar",
      image: "/placeholder.svg?height=200&width=300&text=Designer+Spotlight",
    },
  ]

  const pastEvents = [
    {
      id: 6,
      title: "Winter Treasure Festival",
      date: "2024-01-15",
      participants: 8500,
      highlights: "Record-breaking participation",
      category: "Festival",
      rating: 4.9,
    },
    {
      id: 7,
      title: "Blind Box Championship",
      date: "2024-01-08",
      participants: 3200,
      highlights: "Amazing community engagement",
      category: "Competition",
      rating: 4.8,
    },
  ]

  const eventCategories = [
    { name: "All Events", count: 24, active: true },
    { name: "Competitions", count: 8, active: false },
    { name: "Exhibitions", count: 6, active: false },
    { name: "Meetups", count: 5, active: false },
    { name: "Webinars", count: 3, active: false },
    { name: "Drops", count: 2, active: false },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800">
              <Calendar className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Event Center
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover exclusive events, competitions, and experiences in the world of collectibles and treasures.
          </p>
        </div>

        {/* Featured Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="bg-gray-900/50 border-purple-900/30 overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 text-white">{event.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button variant="ghost" size="icon" className="bg-black/50 hover:bg-black/70 text-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>{event.participants.toLocaleString()} participants</span>
                    </div>
                  </div>

                  {event.prizes && (
                    <div className="flex items-center gap-2 mb-4">
                      <Trophy className="h-5 w-5 text-yellow-400" />
                      <span className="font-semibold text-yellow-400">{event.prizes} in prizes</span>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                      <Ticket className="h-4 w-4 mr-2" />
                      Register Now
                    </Button>
                    <Button variant="outline" size="icon" className="border-purple-600 text-purple-400">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Categories & Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <TabsList className="grid w-full lg:w-auto grid-cols-3 bg-gray-900/50">
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-purple-900/50">
                Upcoming
              </TabsTrigger>
              <TabsTrigger value="live" className="data-[state=active]:bg-purple-900/50">
                Live Now
              </TabsTrigger>
              <TabsTrigger value="past" className="data-[state=active]:bg-purple-900/50">
                Past Events
              </TabsTrigger>
            </TabsList>

            <div className="flex flex-wrap gap-2">
              {eventCategories.map((category) => (
                <Badge
                  key={category.name}
                  variant={category.active ? "default" : "outline"}
                  className={`cursor-pointer ${
                    category.active
                      ? "bg-purple-600 text-white"
                      : "border-purple-600/50 text-purple-300 hover:bg-purple-900/30"
                  }`}
                >
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>
          </div>

          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="bg-gray-900/50 border-purple-900/30 overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-purple-600 text-white text-xs">{event.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">{event.title}</h4>
                    <div className="space-y-1 text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{event.participants} attending</span>
                      <Button size="sm" variant="outline" className="border-purple-600 text-purple-400">
                        Join
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="live">
            <div className="text-center py-12">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-900/50 border-2 border-red-500">
                  <Play className="h-8 w-8 text-red-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Live Events</h3>
              <p className="text-gray-400">Check back soon for live events and streams!</p>
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="space-y-4">
              {pastEvents.map((event) => (
                <Card key={event.id} className="bg-gray-900/50 border-purple-900/30">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold mb-1">{event.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                          <span>{event.participants.toLocaleString()} participants</span>
                          <Badge variant="outline" className="border-purple-600/50 text-purple-300">
                            {event.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-300 mt-2">{event.highlights}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(event.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">{event.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 border-purple-700/30">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Want to Host an Event?</h2>
              <p className="text-gray-300 mb-6">
                Partner with us to create amazing experiences for the treasure hunting community.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                Submit Event Proposal
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
