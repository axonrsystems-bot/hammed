import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Hammed Olayinka',
  jobTitle: 'Business Growth Strategist',
  description:
    'I help coaches, consultants, doctors, lawyers and service businesses grow through conversion-focused websites, engaging communities and practical growth strategy.',
  url: 'https://hammedolayinka.com',
  email: 'toyeshe20@gmail.com',
  sameAs: [
    'https://linkedin.com/in/hammedolayinka',
    'https://instagram.com/hammed.axonr',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Axonr Digital',
    url: 'https://axonrdigital.com',
  },
  knowsAbout: [
    'Business Growth Strategy',
    'Conversion Rate Optimization',
    'Website Development',
    'Community Building',
    'Circle Communities',
    'Mighty Networks',
    'Social Media Management',
    'Next.js',
    'WordPress',
    'Shopify',
    'LearnDash LMS',
    'Sales Funnel Optimization',
  ],
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://hammedolayinka.com'),
  title: {
    default: 'Hammed Olayinka | Business Growth Strategist',
    template: '%s | Hammed Olayinka',
  },
  description:
    'I help coaches, consultants, doctors, lawyers and service businesses grow through conversion-focused websites, engaging communities and practical growth strategy.',
  keywords: [
    'business growth strategist',
    'conversion focused websites',
    'coaches',
    'consultants',
    'doctors',
    'lawyers',
    'Circle community',
    'Mighty Networks',
    'Next.js developer',
    'WordPress',
    'online course platform',
    'CRO expert',
    'funnel audit',
  ],
  authors: [{ name: 'Hammed Olayinka' }],
  creator: 'Hammed Olayinka',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hammedolayinka.com',
    title: 'Hammed Olayinka | Business Growth Strategist',
    description:
      'I help coaches, consultants, doctors, lawyers and service businesses grow through conversion-focused websites, engaging communities and practical growth strategy.',
    siteName: 'Hammed Olayinka',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hammed Olayinka | Business Growth Strategist',
    description:
      'I help coaches, consultants, doctors, lawyers and service businesses grow through conversion-focused websites, engaging communities and practical growth strategy.',
    creator: '@hammedaxonr',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />

        {/* Microsoft Clarity */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xhpepypmwu");
          `}
        </Script>
      </body>
    </html>
  )
}
