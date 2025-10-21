"use client";
import { Button } from "@/components/ui/button";
import { Utensils } from "lucide-react";
import Image from "next/image";
// import Menu from "@/components/ui/menu"
import {Menu} from "@/components/ui/menu"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Utensils className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold">Phantastic Food</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Button className="bg-[#000] hover:bg-[#CDCDCD] focus:ring-2">
                Order Now
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        {/* Delivery Info Bar */}
        <div className="bg-muted/50 border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Deliver to 3245 Dusk Drive</p>
                <p className="text-sm text-muted-foreground">
                  Phantastic Foods (2600 Central Boulevard)
                </p>
                <p className="text-sm text-muted-foreground">
                  Tomorrow: 8:35 AM - 9:00 AM
                </p>
              </div>
              <Button variant="outline">Change</Button>
            </div>
          </div>
        </div>

        {/* Hero Image Banner */}
        <div className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
          <div className="grid grid-cols-6 h-full">
            <div className="relative h-full">
              <Image
                src="/Broken-rice.jpg"
                alt="Food"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-full">
              <Image
                src="/banhmi.jpeg"
                alt="Food"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-full">
              <Image
                src="/house roll.png"
                alt="Food"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-full">
              <Image
                src="/tropicaltea.jpg"
                alt="Food"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-full">
              <Image src="/xoi.jpg" alt="Food" fill className="object-cover" />
            </div>
            <div className="relative h-full">
              <Image
                src="/bobatea.png"
                alt="Food"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20 ">
            <div className="text-center p-5 border rounded-4xl text-white backdrop-blur-sm relative overflow-hidden shadow-[0_0_20px_rgba(255,255,255,1)]">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                Fresh Vietnamese Food
              </h2>
              <p className="text-xl mb-6">Your daily cure, delivered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Options */}
      <Menu></Menu>

      {/* Footer */}
    </div>
  );
}
