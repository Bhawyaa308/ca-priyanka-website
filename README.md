# CA Priyanka Aggarwal — Chartered Accountant Website

## Project Overview

A premium, luxury-minimal Chartered Accountant website for CA Priyanka Aggarwal, built as a boutique financial advisory firm website. The design avoids generic AI aesthetics and delivers a custom, trustworthy, editorial feel.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router DOM 6
- **Icons**: Font Awesome 6.5
- **Fonts**: Cormorant Garamond (headings), Inter (body), Poppins (navigation)

## Color Palette

| Role           | Hex     | Usage                     |
| -------------- | ------- | ------------------------- |
| Ivory          | #F7F1E6 | Primary background        |
| Beige          | #E0D0BA | Accent, borders, buttons  |
| Light Blue     | #D0DEE6 | Alternate section bg      |
| Secondary Blue | #8DB1C4 | Subtitles, badges         |
| Navy           | #3E5C6C | Primary headings, buttons |
| Dark Navy      | #2B3E4C | Body text, dark sections  |

## Architecture

### Pages

- `/` — Homepage (all sections scroll smoothly)
- `/gallery` — Photo gallery with filter categories

### Components (src/components/)

- **Navbar.tsx** — Sticky navbar with ivory bg, mobile hamburger, smooth scroll
- **Hero.tsx** — Two-column hero with editorial heading + portrait placeholder
- **About.tsx** — About section with image placeholder + 6 highlights
- **CoreAdvisory.tsx** — 8 service cards with FA icons on light-blue bg
- **Stats.tsx** — 4 statistics (1000+ consultations, etc.)
- **ServicesOverview.tsx** — 7 detailed service descriptions
- **Reviews.tsx** — 3 testimonial cards with star ratings
- **Location.tsx** — Office details + map placeholder
- **ConsultationCTA.tsx** — Dark navy CTA section
- **Contact.tsx** — Contact form + office details sidebar
- **Footer.tsx** — Dark navy footer with nav, social links, copyright

### Pages (src/pages/)

- **Home.tsx** — Assembles all homepage sections
- **Gallery.tsx** — Filterable photo gallery grid

## Customization Guide

- Replace portrait image in Hero.tsx and About.tsx placeholders with actual photos
- Update phone numbers, email, address in Location.tsx, Contact.tsx, Footer.tsx
- Replace review placeholders in Reviews.tsx with real Google reviews
- Add actual photos to Gallery.tsx
- Update LinkedIn URL with correct profile link
- Map embed placeholder in Location.tsx ready for Google Maps iframe

## Build Commands

```bash
pnpm install    # Install dependencies
pnpm run build  # Production build
pnpm run dev    # Development server
```
