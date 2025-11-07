# Skyline Yoga Studio Website

A website for Skyline Yoga Studio built with Next.js, TypeScript, and TailwindCSS.

## Features

- **Modern Design**: Clean, elegant design with deep forest green and soft cream color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Complete SEO setup with meta tags, sitemap, and structured data
- **Accessibility**: Built with accessibility best practices
- **Contact Forms**: Aesthetic contact forms (portfolio demonstration only - no actual submission)
- **Single-Page Application**: Homepage with sections (Hero, About, Classes, Testimonials, Contact) plus separate Terms and Privacy pages

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Or use the provided batch file (Windows):
```bash
start-local.bat
```

Open [http://localhost:3000](http://localhost:3000) in your browser (or http://localhost:3001 if using `start-local.bat`).

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── terms/           # Terms of Service page
│   ├── privacy/         # Privacy Policy page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage (single-page app with sections)
│   └── globals.css      # Global styles
├── components/          # Reusable components
│   ├── ui/              # Basic UI components (button, card)
│   ├── sections/        # Page sections (Hero, About, Classes, Testimonials, Contact)
│   ├── Navigation.tsx    # Navigation component
│   ├── Footer.tsx       # Footer component
│   └── ScrollToSection.tsx # Scroll functionality
├── config/              # Configuration files
│   └── site.ts          # Site configuration and content
└── lib/                 # Utility functions
    └── utils.ts         # Helper functions
```

## Customization

### Content Updates

All client-editable content is stored in `/src/config/site.ts`. This includes:

- Company information
- Contact details
- Class schedules and pricing
- Testimonials
- Navigation links
- SEO metadata

### Styling

The website uses a custom color scheme defined in `tailwind.config.js`:

- Primary: Deep forest green (#1B4332)
- Secondary: Pale green (#D8F3DC)
- Background: Soft cream (#FFFDF6)
- Text: Various shades of green and gray

### Images

Replace placeholder images in the following locations:
- Hero section background
- Class type illustrations
- Instructor photos
- Studio images

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## License

This is a portfolio project created for demonstration purposes. The design and code are available for reference, but the content (yoga studio information, policies, etc.) are placeholder examples and not real business information.
