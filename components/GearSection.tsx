"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GearSection() {
  const gearCategories = [
    { name: "Masks & Fins", description: "Essential visibility and propulsion gear" },
    { name: "Wetsuits", description: "Stay warm and protected underwater" },
    { name: "Regulators", description: "Breathe easy with top-quality regulators" },
    { name: "BCDs", description: "Buoyancy compensator devices for perfect control" },
  ]

  return (
    <section className="py-16 bg-tan-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Gear Purchase & Rentals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gearCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    <Button variant="outline">Rent</Button>
                    <Button>Buy</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

