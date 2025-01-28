"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function CertificationSection() {
  return (
    <section className="py-16 bg-tan-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Scuba Certification Training</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Open Water", "Advanced Open Water", "Rescue Diver"].map((course, index) => (
            <motion.div
              key={course}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{course}</CardTitle>
                  <CardDescription>Learn essential diving skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Master the techniques and safety procedures for {course.toLowerCase()} diving.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

