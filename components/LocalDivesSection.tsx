"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function LocalDivesSection() {
  const diveSpots = [
    { name: "USS Oriskany", description: "Explore the world's largest artificial reef" },
    { name: "Pensacola Beach Pier", description: "Discover diverse marine life in shallow waters" },
    { name: "Fort Pickens Jetties", description: "Perfect for beginners and night dives" },
  ]

  return (
    <section className="py-16 bg-blue-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Local Dive Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diveSpots.map((spot, index) => (
            <motion.div
              key={spot.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt={spot.name}
                width={400}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
                <h3 className="text-xl font-bold">{spot.name}</h3>
                <p>{spot.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

