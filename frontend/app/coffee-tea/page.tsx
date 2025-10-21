import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Utensils } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CoffeeTeaPage() {
  const coffees = [
    {
      id: 1,
      name: "Artisan Espresso",
      price: "$3.99",
      description: "Rich, bold espresso shot from single-origin Ethiopian beans",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Premium", "Strong"],
      size: "2 oz",
    },
    {
      id: 2,
      name: "Cappuccino",
      price: "$4.99",
      description: "Perfect balance of espresso, steamed milk, and foam",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Classic", "Popular"],
      size: "8 oz",
    },
    {
      id: 3,
      name: "Cold Brew",
      price: "$4.49",
      description: "Smooth, refreshing cold-brewed coffee served over ice",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Cold", "Smooth"],
      size: "12 oz",
    },
    {
      id: 4,
      name: "Caramel Macchiato",
      price: "$5.99",
      description: "Espresso with vanilla syrup, steamed milk, and caramel drizzle",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Sweet", "Signature"],
      size: "12 oz",
    },
    {
      id: 5,
      name: "Mocha Latte",
      price: "$5.49",
      description: "Rich espresso with chocolate syrup and steamed milk",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Chocolate", "Indulgent"],
      size: "12 oz",
    },
    {
      id: 6,
      name: "Vanilla Latte",
      price: "$5.29",
      description: "Smooth espresso with vanilla syrup and steamed milk",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Vanilla", "Creamy"],
      size: "12 oz",
    },
  ]

  const teas = [
    {
      id: 1,
      name: "Earl Grey",
      price: "$3.49",
      description: "Classic black tea with bergamot oil and cornflower petals",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Classic", "Aromatic"],
      size: "12 oz",
    },
    {
      id: 2,
      name: "Green Tea",
      price: "$3.29",
      description: "Premium Japanese sencha green tea with antioxidants",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Healthy", "Antioxidants"],
      size: "12 oz",
    },
    {
      id: 3,
      name: "Chamomile",
      price: "$3.99",
      description: "Soothing herbal tea perfect for relaxation",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Herbal", "Calming"],
      size: "12 oz",
    },
    {
      id: 4,
      name: "Chai Latte",
      price: "$4.99",
      description: "Spiced black tea with steamed milk and honey",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Spiced", "Warming"],
      size: "12 oz",
    },
    {
      id: 5,
      name: "Iced Tea",
      price: "$2.99",
      description: "Refreshing black tea served cold with lemon",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Cold", "Refreshing"],
      size: "16 oz",
    },
    {
      id: 6,
      name: "Matcha Latte",
      price: "$5.49",
      description: "Premium matcha powder with steamed milk",
      image: "/placeholder.svg?height=300&width=400",
      badges: ["Matcha", "Premium"],
      size: "12 oz",
    },
  ]

  const DrinkGrid = ({ drinks }: { drinks: typeof coffees }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {drinks.map((drink) => (
        <Card key={drink.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative">
            <Image
              src={drink.image || "/placeholder.svg"}
              alt={drink.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2 flex flex-wrap gap-1">
              {drink.badges.map((badge, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
            <div className="absolute top-2 right-2">
              <Badge variant="outline" className="bg-white/90">
                {drink.size}
              </Badge>
            </div>
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">{drink.name}</CardTitle>
              <p className="text-xl font-bold text-primary">{drink.price}</p>
            </div>
            <CardDescription className="text-sm leading-relaxed">{drink.description}</CardDescription>
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
  )

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
      <section className="py-12 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Coffee & Tea</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium coffee beans and finest tea leaves carefully selected and expertly brewed to create the perfect cup
            every time.
          </p>
        </div>
      </section>

      {/* Drinks Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="coffee" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="coffee" className="text-lg">
                Coffee
              </TabsTrigger>
              <TabsTrigger value="tea" className="text-lg">
                Tea
              </TabsTrigger>
            </TabsList>

            <TabsContent value="coffee">
              <DrinkGrid drinks={coffees} />
            </TabsContent>

            <TabsContent value="tea">
              <DrinkGrid drinks={teas} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Customize Your Drink</h3>
          <p className="text-muted-foreground mb-6">Make it yours with different milk options, syrups, and sizes!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-4 bg-background rounded-lg">
              <h4 className="font-semibold mb-2">Milk Options</h4>
              <p className="text-sm text-muted-foreground">Whole, 2%, Oat, Almond, Soy</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h4 className="font-semibold mb-2">Syrups</h4>
              <p className="text-sm text-muted-foreground">Vanilla, Caramel, Hazelnut, Sugar-free</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h4 className="font-semibold mb-2">Sizes</h4>
              <p className="text-sm text-muted-foreground">Small, Medium, Large, Extra Large</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
