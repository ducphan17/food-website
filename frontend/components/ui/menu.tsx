"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Utensils } from "lucide-react";
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Category = {
  id: string;
  createAt: string;
  title: string;
  desc: string;
  color: string;
  img: string;
  slug: string;
  products?: Product[];
}

type Product = {
  id: string;
  createAt: Date | string; // Date from DB, string when serialized
  title: string;
  desc: string;
  img?: string;
  price: number; // Changed from string to number to match Decimal
  isFeatured: boolean;
  options: any[];
  catSlug: string;
};


// async since we're fetching data
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
 
  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

export function Menu() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getData();
        setCategories(data);
      } catch (error) {
        console.error("Error loading categories: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, [])

  // const bowls: MenuItem[] = [
  //   {
  //     id: 1,
  //     name: "Broken Rice with Grilled Pork Bowl (Cơm Tấm)",
  //     price: "$10",
  //     description:
  //       "A traditional Vietnamese dish featuring broken rice topped with grilled pork, pickled vegetables, and fresh herbs.",
  //     image: "/Broken-rice.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Grilled Pork Vermicelli Bowl (Bún Thịt Nướng)",
  //     price: "$10",
  //     description:
  //       "A refreshing bowl of vermicelli noodles topped with grilled pork, fresh vegetables, and a tangy fish sauce dressing.",
  //     image: "/Grilled-Pork-Noodle.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Savory Sticky Rice (Xôi Mặn)",
  //     price: "$10",
  //     description:
  //       "Sushi rice, fresh salmon, edamame, cucumber, seaweed salad, and spicy mayo.",
  //     image: "/xoi.jpg",
  //   },
  // ];

  // const sandwiches: MenuItem[] = [
  //   {
  //     id: 4,
  //     name: "Grilled Pork Sandwich (Bánh Mì Thịt Nướng)",
  //     price: "$10",
  //     description:
  //       "A classic Vietnamese sandwich filled with grilled pork, pickled vegetables, fresh herbs, and spicy mayo on a crispy baguette.",
  //     image: "/banhmi.jpeg",
  //   },
  // ];

  // const rolls: MenuItem[] = [
  //   {
  //     id: 5,
  //     name: "House Spring Rolls (Gỏi Cuốn)",
  //     price: "$10",
  //     quantity: "5",
  //     description:
  //       "Fresh rice paper rolls filled with shrimp, vermicelli noodles, lettuce, and herbs, served with a peanut dipping sauce.",
  //     image: "/house roll.png",
  //   },
  //   {
  //     id: 6,
  //     name: "Shrimp Spring Rolls (Gỏi Cuốn Tôm)",
  //     price: "$10",
  //     quantity: "5",
  //     description:
  //       "Delicious spring rolls filled with shrimp, vermicelli noodles, lettuce, and herbs, served with a tangy dipping sauce.",
  //     image: "/ShrimpRoll.jpg",
  //   },
  //   {
  //     id: 7,
  //     name: "Egg Rolls (Chả Giò)",
  //     price: "$10",
  //     quantity: "5",
  //     description:
  //       "Crispy fried rolls filled with a savory mixture of ground pork, mushrooms, and vegetables, served with a sweet and sour sauce.",
  //     image: "/eggroll.png",
  //   },
  // ];

  // const drinks: MenuItem[] = [
  //   {
  //     id: 8,
  //     name: "Vietnamese Iced Coffee (Cà Phê Sữa Đá)",
  //     price: "$5",
  //     description:
  //       "A strong and sweet Vietnamese iced coffee made with dark roast coffee, sweetened condensed milk, and served over ice.",
  //     image: "/icecoffee.jpg",
  //   },
  //   {
  //     id: 9,
  //     name: "Tropical Fruit Tea (Trà Trái Cây)",
  //     price: "$6",
  //     description:
  //       "A refreshing blend of tropical fruits steeped in tea, served chilled with a hint of mint.",
  //     image: "/tropicaltea.jpg",
  //   },
  // ];

  const handleItemClick = (item: Product) => {
    setSelectedItem(item);
    setQuantity(1);
  };

  const handleClose = () => {
    setSelectedItem(null);
    setQuantity(1);
  };

  const renderItemCard = (item: Product) => (
    <Card
      key={item.id}
      onClick={() => handleItemClick(item)}
      className="mb-4 cursor-pointer"
    >
      <div className="flex items-center p-4 gap-4">
        <div className="flex-1">
          <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
          <CardDescription className="text-sm mb-2">
            {item.desc}
          </CardDescription>
          <p className="text-lg font-semibold">${item.price}</p>
        </div>
        <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
          <img
            src={item.img || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Card>
  );

  if (loading) {
    return (
      <div className="max-w-screen max-h-screen bg-background bg-[#000]">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center text-white">Loading menu...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-screen max-h-screen bg-background bg-[#000]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {categories.map((category) => {
          const categoryProducts = category.products || [];

          return (
            <section key={category.id} id={category.slug} className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-black">
                {category.title}
              </h3>
              {categoryProducts.length > 0 ? (
                categoryProducts.map(renderItemCard)
              ) : (
                <div className="text-gray-400 text-center py-8">
                  No items available in this category yet.
                </div>
              )}
            </section>
          );
        })}
        {categories.length === 0 && (
          <div className="text-center text-white py-8">
            No categories found. Please add some categories in Prisma Studio.
          </div>
        )}
      </div>

      <footer className="bg-background border-t py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Utensils className="h-6 w-6 text-primary" />
                <h4 className="text-lg font-bold">Phantastic Foods</h4>
              </div>
              <p className="text-muted-foreground">
                Serving fresh, healthy, and delicious food since 2020.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Menu</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/menu" className="hover:text-primary">
                    Menu
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>Brownsville, TX 78520</li>
                <li>(505) 730-9037</li>
                <li>tiendphan07@gmail.com</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Hours</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>Mon-Fri: 7am - 9pm</li>
                <li>Saturday: 8am - 10pm</li>
                <li>Sunday: 8am - 8pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 PhantasticFood. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedItem} onOpenChange={handleClose}>
        <DialogContent className="max-w-md">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">
                  {selectedItem.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <img
                    src={selectedItem.img || "/placeholder.svg"}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <DialogDescription className="text-base">
                  {selectedItem.desc}
                </DialogDescription>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold">${selectedItem.price}</p>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="text-lg font-semibold w-8 text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Add to Cart - {selectedItem.price}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
