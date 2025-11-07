export const siteConfig = {
  // Basic Information
  name: "Skyline Yoga Studio",
  tagline: "Find your balance, strengthen your body, calm your mind.",
  description: "A serene sanctuary in the heart of the city where you can escape the hustle and bustle, reconnect with yourself, and find inner peace through the practice of yoga. Our experienced instructors guide you through various yoga styles, from gentle Hatha to dynamic Vinyasa, helping you build strength, flexibility, and mindfulness.",
  
  // Contact Information
  contact: {
    phone: "(555) 123-4567",
    email: "hello@skylineyogastudio.com",
    address: "123 Serenity Street, Peaceful Valley, CA 90210",
    hours: "Monday - Sunday: 7:00 AM to 8:00 PM"
  },

  // Navigation
  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Classes", href: "/classes" },
      { name: "Contact", href: "/contact" },
    ],
    footer: {
      company: [
        { name: "About Us", href: "/about" },
        { name: "Our Classes", href: "/classes" },
        { name: "Contact", href: "/contact" },
      ],
      resources: [
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
      ]
    }
  },

  // Classes Information
  classes: [
    {
      name: "Hatha Yoga",
      description: "Gentle, slow-paced practice focusing on basic postures and breathing techniques. Perfect for beginners.",
      duration: "60 minutes",
      level: "All Levels",
      price: "$25",
      schedule: "Mon, Wed, Fri - 9:00 AM"
    },
    {
      name: "Vinyasa Flow",
      description: "Dynamic, flowing sequences that connect breath with movement. Build strength and flexibility.",
      duration: "75 minutes",
      level: "Intermediate",
      price: "$30",
      schedule: "Tue, Thu - 7:00 PM"
    },
    {
      name: "Yin Yoga",
      description: "Passive, meditative practice holding poses for longer periods. Deep relaxation and flexibility.",
      duration: "90 minutes",
      level: "All Levels",
      price: "$28",
      schedule: "Sat, Sun - 10:00 AM"
    },
    {
      name: "Power Yoga",
      description: "Intense, fitness-focused practice that will build strength, endurance, and mental focus.",
      duration: "60 minutes",
      level: "Advanced",
      price: "$32",
      schedule: "Mon, Wed - 6:00 AM"
    }
  ],

  // Pricing Plans
  pricing: {
    dropIn: {
      name: "Drop-In Class",
      price: "$25",
      description: "Single class pass",
      features: ["Access to any class", "No commitment", "Valid for 30 days"]
    },
    monthly: {
      name: "Monthly Unlimited",
      price: "$120",
      description: "Unlimited classes for one month",
      features: ["Unlimited classes", "All class types", "Priority booking", "Free mat rental"]
    },
    yearly: {
      name: "Annual Membership",
      price: "$1,200",
      description: "Best value - 2 months free",
      features: ["Unlimited classes", "All class types", "Priority booking", "Free mat rental", "Guest passes", "Workshop discounts"]
    }
  },

  // Testimonials
  testimonials: [
    {
      name: "Sarah Johnson",
      text: "Skyline Yoga has transformed my life. The instructors are amazing and the atmosphere is so peaceful. I've never felt more centered and strong.",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "As a beginner, I was nervous about starting yoga. The Hatha classes here made me feel comfortable and confident. Highly recommend!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      text: "The Vinyasa Flow classes are incredible. I've built so much strength and flexibility. The community here is wonderful too.",
      rating: 5
    }
  ],

  // SEO
  seo: {
    title: "Skyline Yoga Studio - Find Your Balance in the City",
    description: "Professional yoga studio offering Hatha, Vinyasa, Yin, and Power Yoga classes. Find your balance, strengthen your body, and calm your mind in our serene sanctuary.",
    keywords: "yoga studio, yoga classes, meditation, mindfulness, fitness, wellness, Hatha yoga, Vinyasa, Yin yoga, Power yoga",
    ogImage: "/logo.svg"
  },

  // Colors (already defined in tailwind.config.js)
  colors: {
    primary: "#1B4332", // Deep forest green
    secondary: "#D8F3DC", // Pale green
    background: "#FFFDF6", // Soft cream
    accent: "#2D6A4F" // Medium green
  },

  // Typography
  fonts: {
    headings: "Playfair Display",
    body: "Inter"
  }
}