"use client"

import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Footer() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-20">
      {/* Top Gradient Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent blur-sm"></div>
      
      {/* Main Footer Content */}
      <div className="relative bg-gradient-to-b from-primary-50/50 via-white/80 to-transparent backdrop-blur-custom">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-12 rounded-lg overflow-hidden">
                  <img 
                    src="/logo.svg" 
                    alt={`${siteConfig.name} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-primary-700">
                    {siteConfig.name}
                  </h3>
                  <p className="text-primary-600 text-sm">
                    {siteConfig.tagline}
                  </p>
                </div>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                {siteConfig.description}
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="font-serif font-semibold text-base text-primary-700">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-sm text-text-muted hover:text-primary-700 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('classes')}
                    className="text-sm text-text-muted hover:text-primary-700 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer"
                  >
                    Our Classes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-sm text-text-muted hover:text-primary-700 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-3">
              <h4 className="font-serif font-semibold text-base text-primary-700">
                Resources
              </h4>
              <ul className="space-y-2">
                {siteConfig.navigation.footer.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-primary-700 transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright below Resources */}
          <div className="mt-10 md:mt-6 text-sm text-text-muted text-start">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </div>

          {/* Contact Info Section */}
          <div className="mt-8 pt-6 border-t border-primary-200/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-text-muted">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary-600" />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary-600" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary-600 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock size={16} className="text-primary-600 mt-0.5" />
                <span>{siteConfig.contact.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
