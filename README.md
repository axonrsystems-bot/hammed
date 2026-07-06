# Hammed Olayinka — Personal Brand Website

A premium personal brand website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter + Newsreader (Google Fonts via next/font)
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
hammed-portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles + Tailwind
│   ├── layout.tsx          # Root layout with fonts and metadata
│   └── page.tsx            # Homepage
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed navigation with mobile menu
│   │   └── Footer.tsx      # Site footer
│   ├── sections/           # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── WaysIHelp.tsx
│   │   ├── FeaturedWork.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── About.tsx
│   │   └── ContactCTA.tsx
│   └── ui/
│       ├── AnimatedSection.tsx  # Scroll-triggered animation wrapper
│       └── Container.tsx        # Max-width container
├── content/                # TypeScript data files (no hardcoded content in components)
│   ├── projects.ts
│   ├── services.ts
│   ├── testimonials.ts
│   └── process.ts
├── lib/
│   └── utils.ts            # cn() utility for Tailwind class merging
├── types/
│   └── index.ts            # Shared TypeScript interfaces
└── public/
    └── images/
        ├── hammed.png      # Profile photo
        └── logo.png        # Axonr Digital logo
```

## Deploying to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — no extra configuration needed
4. Click Deploy

## Customisation

All content is stored in the `/content` directory as TypeScript files. To update:

- **Projects:** Edit `content/projects.ts`
- **Services:** Edit `content/services.ts`
- **Testimonials:** Edit `content/testimonials.ts`
- **Process steps:** Edit `content/process.ts`

To update contact email, search for `toyeshe20@gmail.com` and replace globally.

To update the domain in metadata, edit `metadataBase` in `app/layout.tsx`.
