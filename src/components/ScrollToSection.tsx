"use client"

import { useEffect } from 'react'

export default function ScrollToSection() {
  useEffect(() => {
    // Handle hash navigation when coming from other pages
    const handleHashNavigation = () => {
      const hash = window.location.hash
      if (hash) {
        // Remove the # from the hash
        const sectionId = hash.substring(1)
        const element = document.getElementById(sectionId)
        
        if (element) {
          // Small delay to ensure page is loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        }
      }
    }

    // Run on mount
    handleHashNavigation()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation)

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation)
    }
  }, [])

  return null
}
