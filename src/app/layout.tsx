import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://caturhariwijaya.com'

export const metadata: Metadata = {
  metadataBase: new URL('https://caturhariwijaya.com'),
  robots: {
    index: false,
    follow: false,
  },
  title: 'Catur Hari Wijaya — Multi-instrumentalist & Composer',
  description:
    'Multi-instrumentalist weaving global rhythms and ancient Indonesian wisdom. World music, Afro Java Psychedelic, drum workshops in Ubud Bali.',
  keywords: [
    'Catur Hari Wijaya',
    'multi-instrumentalist',
    'world music',
    'Indonesian music',
    'Afro Java',
    'djembe',
    'drum workshop',
    'Ubud Bali',
    'composer',
    'KOSMOS album',
    'Bali to Mali',
  ],
  authors: [{ name: 'Catur Hari Wijaya', url: siteUrl }],
  creator: 'Catur Hari Wijaya',
  publisher: 'Catur Hari Wijaya',
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  openGraph: {
    title: 'Catur Hari Wijaya — Multi-instrumentalist & Composer',
    description: 'Multi-instrumentalist weaving global rhythms and ancient Indonesian wisdom.',
    url: siteUrl,
    siteName: 'Catur Hari Wijaya',
    images: [
      {
        url: `${siteUrl}/images/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: 'Catur Hari Wijaya',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catur Hari Wijaya — Multi-instrumentalist & Composer',
    description:
      'Multi-instrumentalist weaving global rhythms and ancient Indonesian wisdom.',
    images: [`${siteUrl}/images/thumbnail.png`],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased font-sans"
      suppressHydrationWarning
    >
      <body
        className="flex h-full bg-[#f8f8f5] dark:bg-[#0F1C27]"
        suppressHydrationWarning
      >
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
