"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-600 text-white p-4 fixed w-full z-10"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1 whileHover={{ scale: 1.05 }} className="text-2xl font-bold">
          Ocean Explorers
        </motion.h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="ghost">Home</Button>
            </li>
            <li>
              <Button variant="ghost">Certification</Button>
            </li>
            <li>
              <Button variant="ghost">Local Dives</Button>
            </li>
            <li>
              <Button variant="ghost">Gear</Button>
            </li>
            <li>
              <Button variant="ghost">Contact</Button>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

