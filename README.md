# One Design Studio

A world-class luxury architecture and construction company website built with Next.js 15, TypeScript, Tailwind CSS, and Prisma.

## Features

- **15+ Pages** - Home, About, Services, Residential, Commercial, Renovation, Projects, Project Detail, Process, Why Choose Us, Gallery, Testimonials, FAQ, Contact
- **Admin Dashboard** - Secure admin panel with CRUD operations for Projects, Gallery, Testimonials, Services, FAQ, and Settings
- **Premium Design** - Luxury cream/gold palette inspired by Studio MK27, SAOTA, Foster + Partners
- **Advanced Animations** - Framer Motion, GSAP-ready, Lenis smooth scroll, scroll progress bar
- **Responsive** - Fully responsive across all devices
- **SEO Optimized** - Complete metadata, sitemap, robots.txt, Open Graph
- **Database** - PostgreSQL with Prisma ORM
- **Authentication** - NextAuth.js with credentials provider

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion, Lenis (smooth scroll)
- **Database**: PostgreSQL + Prisma
- **Auth**: NextAuth.js
- **Forms**: React Hook Form + Zod (ready)
- **Images**: Cloudinary-ready
- **Deployment**: Vercel-ready

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env.local
```

Fill in your environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Random secret key
- `NEXTAUTH_URL` - Your app URL

### 3. Database Setup

```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin)

### 5. Build for Production

```bash
npm run build
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── (site)/            # Public website pages
│   ├── admin/             # Admin dashboard
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── loading.tsx        # Loading state
├── components/
│   ├── admin/             # Admin components
│   ├── animations/        # Reusable animations
│   ├── layout/            # Navbar, Footer, etc.
│   ├── sections/          # Page sections
│   └── ui/                # UI primitives
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities, Prisma, Auth
├── prisma/                 # Database schema & seed
├── public/                 # Static assets
├── styles/                 # Global CSS
└── types/                  # TypeScript types
```

## Design System

| Token | Value |
|-------|-------|
| Primary Background | `#F8F6F1` |
| Secondary Background | `#FFFFFF` |
| Accent Gold | `#C5A572` |
| Light Accent | `#E7D7BD` |
| Warm Gray | `#E8E5DF` |
| Ash | `#909090` |
| Text | `#2A2A2A` |
| Heading Font | Cormorant Garamond |
| Body Font | Inter |
| Numbers Font | Space Grotesk |

## Pages

### Public Pages
- `/` - Home (Hero, Stats, Services, Projects, Process, Testimonials, CTA)
- `/about` - Company story, philosophy, stats
- `/services` - All services overview
- `/residential` - Residential construction
- `/commercial` - Commercial construction
- `/renovation` - Renovation & remodeling
- `/projects` - Project portfolio with filters
- `/projects/[slug]` - Project detail page
- `/process` - Construction process steps
- `/why-choose-us` - Why clients choose us
- `/gallery` - Masonry gallery with lightbox
- `/testimonials` - Client testimonials grid
- `/faq` - Accordion FAQ with categories
- `/contact` - Contact form with map

### Admin Pages
- `/admin/login` - Secure login
- `/admin/dashboard` - Analytics overview
- `/admin/projects` - Project CRUD
- `/admin/gallery` - Gallery CRUD
- `/admin/testimonials` - Testimonials CRUD
- `/admin/services` - Services CRUD
- `/admin/faq` - FAQ CRUD
- `/admin/settings` - Site settings

## License

Proprietary - One Design Studio
