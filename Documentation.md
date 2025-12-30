# Gambo Consultancy Website Documentation

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Design System](#design-system)
5. [Current Pages](#current-pages)
6. [Planned Pages](#planned-pages)
7. [Development Guide](#development-guide)
8. [Deployment](#deployment)
9. [Contact Information](#contact-information)

---

## 🎯 Project Overview

### About
**Gambo Consultancy** is a premier consultancy firm website designed to showcase professional services in Education, IT, Leadership, Mentorship, and Life Coaching. The website aims to establish a strong online presence and provide a platform for potential clients to engage with the consultancy.

### Mission Statement
> Empowering individuals, organizations, and educational institutions to achieve their full potential through expert consultancy and guidance.

### Vision Statement
> To be a leading consultancy firm recognized for expertise, innovation, and unwavering commitment to excellence.

### Target Audience
- Educational institutions seeking academic development
- Organizations requiring IT strategy and digital transformation
- Executives and managers looking for leadership coaching
- Professionals seeking career mentorship
- Individuals pursuing personal growth and life coaching

---

## 🛠 Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | Next.js | 16 |
| **Language** | TypeScript | 5 |
| **Styling** | Tailwind CSS | 4 |
| **Animation** | Framer Motion | Latest |
| **Icons** | Lucide React | Latest |
| **Notifications** | React Hot Toast | Latest |
| **Fonts** | Geist (Sans & Mono) | Latest |

---

## 📁 Project Structure

```
GamboConsultancy/
├── public/
│   ├── draft/                    # Draft images and assets
│   └── images/                   # Production images (to be added)
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout with Navbar & Footer
│   │   ├── page.tsx              # ✅ Landing page (COMPLETE)
│   │   ├── globals.css           # Global styles and CSS variables
│   │   ├── about/
│   │   │   └── page.tsx          # 🚧 Placeholder - Coming Soon
│   │   ├── services/
│   │   │   └── page.tsx          # 🚧 Placeholder - Coming Soon
│   │   └── contact/
│   │       └── page.tsx          # 🚧 Placeholder - Coming Soon
│   └── components/
│       ├── Navbar.tsx            # Navigation component
│       └── Footer.tsx            # Footer component
├── Documentation.md              # This documentation
├── README.md                     # Project README
├── package.json
├── tsconfig.json
└── next.config.ts
```

### Legend
- ✅ **COMPLETE** - Fully developed and functional
- 🚧 **PLACEHOLDER** - Coming Soon page, to be developed

---

## 🎨 Design System

### Color Palette

| Color Name | Hex Code | CSS Variable | Usage |
|------------|----------|--------------|-------|
| **Primary** | `#007BFF` | `--primary` | Main brand color, CTAs, links |
| **Primary Dark** | `#0056b3` | `--primary-dark` | Hover states, emphasis |
| **Primary Light** | `#4da3ff` | `--primary-light` | Highlights, accents |
| **Secondary** | `#28A745` | `--secondary` | Success states, green accents |
| **Accent** | `#17A2B8` | `--accent` | Supporting highlights |
| **Text** | `#212529` | `--text` | Primary body text |
| **Text Light** | `#6c757d` | `--text-light` | Secondary text |
| **Background** | `#F8F9FA` | `--background` | Page backgrounds |
| **Dark** | `#1a1a2e` | `--dark` | Dark sections, footer |

### Gradients

```css
--gradient-primary: linear-gradient(135deg, #007BFF 0%, #17A2B8 100%);
--gradient-secondary: linear-gradient(135deg, #28A745 0%, #17A2B8 100%);
--gradient-hero: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
```

### Typography
- **Primary Font**: Geist Sans
- **Monospace Font**: Geist Mono
- **Fallback**: Inter, system-ui, sans-serif

---

## 📄 Current Pages

### ✅ Landing Page (`/`)

**Status:** Complete

The landing page is fully developed and includes:

| Section | Description |
|---------|-------------|
| **Hero** | Animated gradient background, consultant image, floating cards, trust badges |
| **Stats** | 500+ Clients, 15+ Years, 50+ Projects, 98% Satisfaction |
| **Services** | 5 service cards with icons, descriptions, and links |
| **About** | Company introduction with features grid |
| **Why Choose Us** | 6 differentiator cards on dark gradient |
| **Testimonials** | 3 client reviews with star ratings |
| **CTA** | Consultation booking call-to-action |
| **Contact Info** | Phone, Email, Location cards |

### Reusable Components

| Component | File | Description |
|-----------|------|-------------|
| **Navbar** | `src/components/Navbar.tsx` | Responsive navigation with dropdowns, mobile menu, top bar |
| **Footer** | `src/components/Footer.tsx` | Newsletter, links, contact info, social media |

---

## 🚧 Planned Pages

The following pages have placeholder "Coming Soon" pages and are ready for development:

### About Page (`/about`)
**Priority:** High

Planned content:
- Mission & Vision statements
- Company history and story
- Team profiles
- Core values
- Achievements timeline

### Services Page (`/services`)
**Priority:** High

Planned content:
- Services overview
- Individual service sections:
  - Educational Consultancy
  - IT Consultancy
  - Leadership Consultancy
  - Mentorship Consultancy
  - Life Coaching
- Service process/methodology
- Pricing information (optional)

### Contact Page (`/contact`)
**Priority:** High

Planned content:
- Contact form with validation
- Google Maps integration
- Contact information cards
- Working hours
- Social media links
- FAQ section

### Future Pages (Lower Priority)
- `/services/educational` - Educational Consultancy details
- `/services/it` - IT Consultancy details
- `/services/leadership` - Leadership Consultancy details
- `/services/mentorship` - Mentorship Consultancy details
- `/services/life-coaching` - Life Coaching details
- `/blog` - Articles and insights
- `/testimonials` - Full testimonials page
- `/faq` - Frequently asked questions

---

## 💻 Development Guide

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn package manager
- Git for version control

### Local Setup

```bash
# Clone the repository
git clone <repository-url>
cd GamboConsultancy

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser at http://localhost:3000
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

### Adding New Pages

1. Create folder in `src/app/{page-name}/`
2. Add `page.tsx` file with page component
3. Update navigation in `Navbar.tsx` if needed
4. Update footer links in `Footer.tsx` if needed
5. Update this documentation

### Component Guidelines

- Use `'use client'` directive for client-side components
- Follow existing naming conventions
- Use Framer Motion for animations
- Use Lucide React for icons
- Apply Tailwind CSS with design system colors

---

## 🚀 Deployment

### Recommended Platform: Vercel

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure build settings (auto-detected for Next.js)
4. Deploy

### Build Command
```bash
npm run build
```

### Environment Variables
Currently, no environment variables are required.

---

## 📞 Contact Information

### Gambo Consultancy

| Channel | Details |
|---------|---------|
| **Email** | gamboconsultancy@gmail.com |
| **Phone** | +234 703 496 6376 |
| **WhatsApp** | +234 906 921 2785 |
| **Address** | Road 2, ICT Centre, Centre of Excellence in Software Engineering, Obafemi Awolowo University, Ile-Ife, 22028, Osun State |

### Developer

| Role | Name |
|------|------|
| **Developer** | SAMKIEL |

---

## 📊 Development Progress

| Page | Status | Progress |
|------|--------|----------|
| Landing Page | ✅ Complete | 100% |
| Navbar | ✅ Complete | 100% |
| Footer | ✅ Complete | 100% |
| About Page | 🚧 Placeholder | 10% |
| Services Page | 🚧 Placeholder | 10% |
| Contact Page | 🚧 Placeholder | 10% |
| Individual Service Pages | 📋 Planned | 0% |
| Blog | 📋 Planned | 0% |

---

*Documentation last updated: December 2024*  
*Version: 1.0.0*
