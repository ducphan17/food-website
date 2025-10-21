import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Utensils } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RollsPage() {
  const rolls = [
    {
      id: 1,
      name: "California Roll",
      price: "$8.99",
      description: "Crab, avocado, cucumber, sesame seeds, and nori",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Classic", "Popular"],
      pieces: "8 pieces",
    },
    {
      id: 2,
      name: "Spicy Tuna Roll",
      price: "$10.99",
      description: "Fresh tuna, spicy mayo, cucumber, and scallions",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Spicy", "Fresh"],
      pieces: "8 pieces",
    },
    {
      id: 3,
      name: "Dragon Roll",
      price: "$15.99",
      description: "Shrimp tempura, avocado, eel, and eel sauce",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Premium", "Signature"],
      pieces: "8 pieces",
    },
    {
      id: 4,
      name: "Veggie Roll",
      price: "$7.99",
      description: "Cucumber, avocado, carrot, and mixed greens",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Vegan", "Healthy"],
      pieces: "8 pieces",
    },
    {
      id: 5,
      name: "Rainbow Roll",
      price: "$16.99",
      description: "California roll topped with assorted sashimi",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Colorful", "Premium"],
      pieces: "8 pieces",
    },
    {
      id: 6,
      name: "Philadelphia Roll",
      price: "$11.99",
      description: "Salmon, cream cheese, cucumber, and sesame seeds",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Creamy", "Popular"],
      pieces: "8 pieces",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Link>
              <div className="flex items-center space-x-2">
                <Utensils className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold">FreshBite</h1>
              </div>
            </div>
            <Button>Order Now</Button>
          </nav>
        </div>
      </header>

      {/* Page Header */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Fresh Sushi Rolls</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Traditional and fusion sushi rolls made with the freshest fish, premium ingredients, and expert
            craftsmanship.
          </p>
        </div>
      </section>

      {/* Rolls Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rolls.map((roll) => (
              <Card key={roll.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={roll.image || "/placeholder.svg"}
                    alt={roll.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                    {roll.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge variant="outline" className="bg-white/90">
                      {roll.pieces}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{roll.name}</CardTitle>
                    <p className="text-xl font-bold text-primary">{roll.price}</p>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">{roll.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button className="flex-1">Add to Cart</Button>
                    <Button variant="outline" size="icon">
                      ♡
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Sushi Combos</h3>
          <p className="text-muted-foreground mb-6">
            Mix and match your favorite rolls or try our chef's special combinations!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline">
              Create Your Combo
            </Button>
            <Button size="lg">Chef's Special</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
