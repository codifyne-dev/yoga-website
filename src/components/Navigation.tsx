"use client"

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronUp } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomepage = pathname === '/'
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    // If not on homepage, always show scrolled state
    if (!isHomepage) {
      setIsScrolled(true)
    } else {
      handleScroll()
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isHomepage])

  // Ensure mobile menu has no transitions when it opens
  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      mobileMenuRef.current.style.transition = 'none'
      mobileMenuRef.current.style.animation = 'none'
      mobileMenuRef.current.style.willChange = 'auto'
    }
  }, [isOpen])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    // If we're on the homepage, scroll to section
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If we're on another page, navigate to homepage and then scroll
      window.location.href = `/#${sectionId}`
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomepage
          ? 'bg-white/20 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-12 h-10 lg:w-14 lg:h-12 rounded-lg overflow-hidden lg:group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/logo.svg" 
                  alt={`${siteConfig.name} Logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 lg:flex-none text-left">
                <h1 className={`font-serif font-bold text-xl lg:text-2xl transition-colors duration-300 ${
                  isScrolled ? 'text-primary-700' : 'text-white'
                }`}>
                  {siteConfig.name}
                </h1>
                <p className={`hidden sm:block text-xs -mt-1 transition-colors duration-300 ${
                  isScrolled ? 'text-primary-600' : 'text-primary-100'
                }`}>
                  {siteConfig.tagline}
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className={`font-medium transition-colors duration-300 relative group ${
                  isScrolled 
                    ? 'text-primary-700 hover:text-primary-800' 
                    : 'text-white hover:text-primary-200'
                }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-primary-700' : 'bg-primary-200'
                }`}></span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-colors duration-300 relative group ${
                  isScrolled 
                    ? 'text-primary-700 hover:text-primary-800' 
                    : 'text-white hover:text-primary-200'
                }`}
              >
                About
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-primary-700' : 'bg-primary-200'
                }`}></span>
              </button>
              <button
                onClick={() => scrollToSection('classes')}
                className={`font-medium transition-colors duration-300 relative group ${
                  isScrolled 
                    ? 'text-primary-700 hover:text-primary-800' 
                    : 'text-white hover:text-primary-200'
                }`}
              >
                Classes
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-primary-700' : 'bg-primary-200'
                }`}></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`font-medium transition-colors duration-300 relative group ${
                  isScrolled 
                    ? 'text-primary-700 hover:text-primary-800' 
                    : 'text-white hover:text-primary-200'
                }`}
              >
                Contact
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-primary-700' : 'bg-primary-200'
                }`}></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary cursor-pointer"
              >
                Book a Class
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled || !isHomepage
                  ? 'text-primary-700'
                  : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} className="w-6 h-6" /> : <Menu size={24} className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-16 left-0 right-0 z-40 lg:hidden border-t border-primary-100 shadow-2xl bg-white/20 backdrop-blur-sm"
          style={{ 
            transition: 'none',
            animation: 'none',
            willChange: 'auto'
          }}
        >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('hero')}
                  className={`font-medium py-2 transition-colors duration-300 text-left cursor-pointer ${
                    isScrolled || !isHomepage
                      ? 'text-primary-700'
                      : 'text-white'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className={`font-medium py-2 transition-colors duration-300 text-left cursor-pointer ${
                    isScrolled || !isHomepage
                      ? 'text-primary-700'
                      : 'text-white'
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('classes')}
                  className={`font-medium py-2 transition-colors duration-300 text-left cursor-pointer ${
                    isScrolled || !isHomepage
                      ? 'text-primary-700'
                      : 'text-white'
                  }`}
                >
                  Classes
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`font-medium py-2 transition-colors duration-300 text-left cursor-pointer ${
                    isScrolled || !isHomepage
                      ? 'text-primary-700'
                      : 'text-white'
                  }`}
                >
                  Contact
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary w-full mt-4 cursor-pointer"
                >
                  Book a Class
                </button>
              </div>
            </div>
        </div>
      )}

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isScrolled ? 1 : 0, 
          scale: isScrolled ? 1 : 0 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-primary-700 text-white rounded-full shadow-lg lg:hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Back to top"
      >
        <ChevronUp size={20} />
      </motion.button>
    </>
  )
}
