"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Users, Award, Clock } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: "Mindful Practice",
    description: "We focus on the connection between mind, body, and spirit through intentional movement and breath."
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Join a supportive community of practitioners at all levels, from beginners to advanced yogis."
  },
  {
    icon: Award,
    title: "Expert Instructors",
    description: "Learn from certified instructors with years of experience and a passion for teaching."
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Classes available throughout the day to fit your busy lifestyle and personal preferences."
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-700 mb-4">
            Why Choose Skyline Yoga?
          </h2>
          <p className="text-md md:text-lg text-text-muted max-w-3xl mx-auto leading-relaxed pt-4">
            We believe yoga is more than just physical exercise—it's a journey of self-discovery, 
            healing, and transformation that extends far beyond the mat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary-700 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted text-md leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-primary-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-serif text-3xl md:text-5xl font-bold text-primary-700 mb-2">
                500+
              </div>
              <div className="text-text-muted font-medium">
                Happy Students
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-5xl font-bold text-primary-700 mb-2">
                15+
              </div>
              <div className="text-text-muted font-medium">
                Years Experience
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-5xl font-bold text-primary-700 mb-2">
                50+
              </div>
              <div className="text-text-muted font-medium">
                Classes Weekly
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
