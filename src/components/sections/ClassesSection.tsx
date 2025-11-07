"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, Users, Star } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function ClassesSection() {
  return (
    <section id="classes" className="section-padding bg-background-pale-green/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-700 mb-6">
            Our Classes
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Discover the perfect yoga practice for your needs. From gentle Hatha to dynamic Vinyasa, 
            we offer classes for every level and preference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.classes.map((yogaClass, index) => (
            <motion.div
              key={yogaClass.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-6xl">🧘‍♀️</span>
                  </div>
                  <CardTitle className="font-serif text-xl text-primary-700">
                    {yogaClass.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-text-muted leading-relaxed">
                    {yogaClass.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-text-muted">
                      <Clock className="w-4 h-4 mr-2 text-primary-600" />
                      <span>{yogaClass.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-text-muted">
                      <Users className="w-4 h-4 mr-2 text-primary-600" />
                      <span>{yogaClass.level}</span>
                    </div>
                    <div className="flex items-center text-sm text-text-muted">
                      <Star className="w-4 h-4 mr-2 text-primary-600" />
                      <span>{yogaClass.schedule}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-2xl font-bold text-primary-700">
                      {yogaClass.price}
                    </div>
                    <Button 
                      size="sm" 
                      className="btn-primary"
                      onClick={() => {
                        const element = document.getElementById('contact')
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold text-primary-700 mb-4">
              Choose Your Plan
            </h3>
            <p className="text-lg text-text-muted">
              Flexible options to fit your practice and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(siteConfig.pricing).map(([key, plan], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full hover:shadow-xl transition-all duration-300 flex flex-col ${
                  key === 'monthly' ? 'ring-2 ring-primary-500 scale-105' : ''
                }`}>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="font-serif text-xl text-primary-700">
                      {plan.name}
                    </CardTitle>
                    <div className="text-3xl font-bold text-primary-700">
                      {plan.price}
                    </div>
                    <p className="text-text-muted text-sm">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <ul className="space-y-2 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-text-muted">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button 
                        className={`w-full ${
                          key === 'monthly' 
                            ? 'btn-primary' 
                            : 'btn-secondary'
                        }`}
                        onClick={() => {
                          const element = document.getElementById('contact')
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                          }
                        }}
                      >
                        Get Started
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
