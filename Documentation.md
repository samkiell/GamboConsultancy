# Gambo Consultancy Website Documentation

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Design System](#design-system)
5. [Pages & Components](#pages--components)
6. [Content Structure](#content-structure)
7. [Development Guide](#development-guide)
8. [Deployment](#deployment)
9. [Maintenance](#maintenance)
10. [Contact Information](#contact-information)

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

### Frontend Framework
- **Next.js 16** - React framework with App Router for server-side rendering and optimal performance
- **TypeScript** - Type-safe JavaScript for improved developer experience

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- **Custom CSS Variables** - For consistent theming and design tokens

### Animation
- **Framer Motion** - Production-ready motion library for React
- **CSS Animations** - Custom keyframe animations for subtle effects

### UI Components
- **Lucide React** - Beautiful and consistent icon library
- **React Hot Toast** - Elegant toast notifications

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing with Tailwind

---

## 📁 Project Structure

```
GamboConsultancy/
├── public/
│   ├── draft/                    # Draft images and assets
│   ├── images/                   # Production images
│   ├── next.svg
│   └── vercel.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout with Navbar & Footer
│   │   ├── page.tsx              # Landing page
│   │   ├── globals.css           # Global styles and CSS variables
│   │   ├── about/
│   │   │   └── page.tsx          # About Us page
│   │   ├── services/
│   │   │   ├── page.tsx          # Services overview
│   │   │   ├── educational/
│   │   │   │   └── page.tsx      # Educational Consultancy
│   │   │   ├── it/
│   │   │   │   └── page.tsx      # IT Consultancy
│   │   │   ├── leadership/
│   │   │   │   └── page.tsx      # Leadership Consultancy
│   │   │   ├── mentorship/
│   │   │   │   └── page.tsx      # Mentorship Consultancy
│   │   │   └── life-coaching/
│   │   │       └── page.tsx      # Life Coaching
│   │   └── contact/
│   │       └── page.tsx          # Contact page
│   └── components/
│       ├── Navbar.tsx            # Navigation component
│       └── Footer.tsx            # Footer component
├── Documentation.md              # This documentation
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

---

## 🎨 Design System

### Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Primary** | `#007BFF` | Main brand color, CTAs, links |
| **Primary Dark** | `#0056b3` | Hover states, emphasis |
| **Primary Light** | `#4da3ff` | Highlights, accents |
| **Secondary** | `#28A745` | Success states, green accents |
| **Secondary Dark** | `#1e7e34` | Hover states |
| **Accent** | `#17A2B8` | Supporting highlights |
| **Text** | `#212529` | Primary body text |
| **Text Light** | `#6c757d` | Secondary text |
| **Background** | `#F8F9FA` | Page backgrounds |
| **Dark** | `#1a1a2e` | Dark sections, footer |

### Typography

- **Primary Font**: Geist Sans (via `next/font/google`)
- **Monospace Font**: Geist Mono
- **Fallback**: Inter, system-ui, sans-serif

### Spacing Scale

Following Tailwind CSS default spacing scale with custom additions for consistency.

### Border Radius

- **Small**: `8px` - Buttons, small elements
- **Medium**: `16px` - Cards, containers
- **Large**: `24px` - Feature sections
- **Full**: `9999px` - Pills, avatars

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-lg: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

### Gradients

```css
--gradient-primary: linear-gradient(135deg, #007BFF 0%, #17A2B8 100%);
--gradient-secondary: linear-gradient(135deg, #28A745 0%, #17A2B8 100%);
--gradient-hero: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
```

---

## 📄 Pages & Components

### Landing Page (`/`)

The landing page is the main entry point featuring:

1. **Hero Section**
   - Animated background with gradient effects
   - Welcome headline with gradient text
   - CTA buttons for consultation booking
   - Consultant image with floating cards
   - Trust badges

2. **Stats Section**
   - Key metrics: Clients served, Years of experience, Projects, Satisfaction rate

3. **Services Overview**
   - Five service cards with icons
   - Brief descriptions
   - Links to detailed service pages

4. **About Section**
   - Company introduction
   - Key features grid
   - Experience badge
   - CTA to full about page

5. **Why Choose Us**
   - Six differentiator cards
   - Dark gradient background
   - Icon-based features

6. **Testimonials**
   - Client reviews with ratings
   - Avatar initials
   - Quote styling

7. **Call-to-Action**
   - Consultation scheduling
   - Phone contact option

8. **Contact Info Bar**
   - Phone, Email, Location cards

### About Page (`/about`) - *To be developed*

- Mission & Vision statements
- Company history
- Team profiles
- Values and approach

### Services Pages (`/services/*`) - *To be developed*

#### Educational Consultancy
- Academic Development
- Teaching Consultancy
- Research Consultancy
- Institutional Capacity Building

#### IT Consultancy
- IT Strategy Development
- Digital Transformation
- Cybersecurity Solutions
- Technology Integration

#### Leadership Consultancy
- Executive Coaching
- Management Consultancy
- Strategic Planning
- Organizational Development

#### Mentorship Consultancy
- Career Coaching
- Leadership Mentoring
- Entrepreneurial Mentoring
- Professional Development

#### Life Coaching
- Personal Growth
- Career Transition
- Work-Life Balance
- Time Management Coaching

### Contact Page (`/contact`) - *To be developed*

- Contact form
- Contact information
- Interactive map
- Social media links

### Reusable Components

#### Navbar (`src/components/Navbar.tsx`)
- Sticky header with scroll effects
- Responsive design with mobile menu
- Dropdown navigation for services
- Top bar with contact info
- Book Consultation CTA

#### Footer (`src/components/Footer.tsx`)
- Newsletter subscription
- Service links
- Company links
- Support links
- Contact information
- Social media links
- Copyright notice

---

## 📝 Content Structure

### Key Messaging

**Tagline**: "Empowering Excellence in Every Consultation"

**Value Propositions**:
1. Expert guidance from industry professionals
2. Proven track record of success
3. Tailored solutions for unique challenges
4. Comprehensive support across multiple domains
5. Commitment to measurable results

### Service Descriptions

Each service page should include:
- Detailed service overview
- Key benefits
- Service offerings list
- Ideal client profile
- Case studies/testimonials
- CTA for consultation

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

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Pages

1. Create folder in `src/app/{page-name}/`
2. Add `page.tsx` file
3. Update navigation in `Navbar.tsx`
4. Update footer links in `Footer.tsx`

### Adding Components

1. Create component file in `src/components/`
2. Follow naming convention: `ComponentName.tsx`
3. Include 'use client' directive for client components
4. Export default function

### Working with Images

1. Place production images in `public/images/`
2. Use Next.js `Image` component for optimization
3. Provide appropriate alt text for accessibility
4. Use WebP format when possible for better performance

### Animation Guidelines

- Use Framer Motion for complex animations
- Apply `initial`, `animate`, and `transition` props
- Use `whileInView` for scroll-triggered animations
- Include `viewport={{ once: true }}` to trigger once

---

## 🚀 Deployment

### Recommended Platform: Vercel

1. Push code to GitHub repository
2. Connect to Vercel
3. Configure build settings (auto-detected for Next.js)
4. Deploy

### Environment Variables

Currently, no environment variables are required. For future features:

```env
# .env.local
NEXT_PUBLIC_CONTACT_API=<api-endpoint>
NEXT_PUBLIC_ANALYTICS_ID=<google-analytics-id>
```

### Build Optimization

- Images are automatically optimized by Next.js
- Static pages are automatically generated
- Dynamic imports for code splitting

---

## 🔧 Maintenance

### Regular Updates

1. **Weekly**: Check for package updates with `npm outdated`
2. **Monthly**: Update dependencies with `npm update`
3. **Quarterly**: Review and update content
4. **Annually**: Redesign review and performance audit

### Performance Monitoring

Recommended tools:
- Vercel Analytics (built-in)
- Google Analytics
- Google PageSpeed Insights
- Lighthouse audits

### Security

- Keep dependencies updated
- Use HTTPS (automatic with Vercel)
- Implement Content Security Policy
- Regular security audits

### Backup

- Code backed up via Git/GitHub
- Content documented in this file
- Images stored in repository

---

## 📞 Contact Information

### Gambo Consultancy

| Channel | Details |
|---------|---------|
| **Email** | gamboconsultancy@gmail.com |
| **Phone** | +234 703 496 6376 |
| **WhatsApp** | +234 906 921 2785 |
| **Address** | Road 2, ICT Centre, Centre of Excellence in Software Engineering, Obafemi Awolowo University, Ile-Ife, 22028, Osun State |

### Developer Contact

| Role | Contact |
|------|---------|
| **Developer** | SAMKIEL |
| **Project Lead** | Dr. Muhammad Gambo |

---

## 📊 Feature Roadmap

### Phase 1: Landing Page ✅
- [x] Hero section
- [x] Services overview
- [x] About section
- [x] Testimonials
- [x] CTA section
- [x] Footer
- [x] Navbar

### Phase 2: Content Pages (Upcoming)
- [ ] About Us page
- [ ] Services pages (5)
- [ ] Contact page with form

### Phase 3: Enhanced Features (Future)
- [ ] Blog/Articles section
- [ ] Newsletter integration
- [ ] Contact form backend
- [ ] Client portal
- [ ] Testimonial management
- [ ] Analytics dashboard

### Phase 4: Advanced Features (Planned)
- [ ] Online booking system
- [ ] Payment integration
- [ ] Client testimonials/reviews system
- [ ] Multi-language support
- [ ] Dark mode toggle

---

## 📜 License

This project is proprietary and owned by Gambo Consultancy. All rights reserved.

---

*Documentation last updated: December 2024*
*Version: 1.0.0*
