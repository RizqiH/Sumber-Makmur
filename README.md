# Sumber Makmur - Fashion E-commerce Website

A modern, responsive e-commerce website for fashion products built with Next.js 15 and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with desktop optimization
- **Modern UI/UX**: Clean, minimalist design inspired by contemporary fashion websites
- **Product Catalog**: Organized sections for Latest Products and Best Sellers
- **Interactive Navigation**: Smooth navbar with mobile bottom navigation
- **Animated Interactions**: Scroll-triggered animations and hover effects
- **Product Filtering**: Category-based filtering and sorting functionality
- **Multi-page Architecture**: Home, About, Contact, and Shop pages

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Animations**: Custom CSS animations with Intersection Observer API
- **Icons**: Custom SVG icons
- **Responsive**: Mobile-first design with bottom navigation

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page with form
│   ├── shop/           # Shop page with filtering
│   ├── globals.css     # Global styles and animations
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── Navbar.tsx              # Navigation component
│   ├── HeroCarousel.tsx        # Hero section carousel
│   ├── ProductCard.tsx         # Product display component
│   ├── LatestProducts.tsx      # Latest products section
│   ├── BestSellerProducts.tsx  # Best sellers section
│   ├── MobileBottomNav.tsx     # Mobile navigation
│   ├── AnimatedSection.tsx     # Scroll animations wrapper
│   └── FullImageSection.tsx    # Full-width image section
└── hooks/
    └── useScrollAnimation.tsx  # Custom animation hooks
```

## 🎨 Design Features

- **Color Scheme**: Neutral grays with black and white accents
- **Typography**: Geist font family for modern readability
- **Animations**: Smooth scroll-triggered and hover animations
- **Mobile Navigation**: Bottom tab bar for mobile users
- **Product Display**: Card-based layout with hover effects

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (Bottom navigation, single column)
- **Tablet**: 768px - 1024px (Two columns, hybrid navigation)
- **Desktop**: > 1024px (Full navigation, multi-column grid)

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
