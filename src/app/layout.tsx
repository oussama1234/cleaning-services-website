import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Cindel Nettoyage - Service de Nettoyage Professionnel à Dax',
    template: '%s | Cindel Nettoyage'
  },
  description: 'Service de nettoyage professionnel à Dax. Nettoyage résidentiel, bureaux, vitres et plus. 2+ ans d\'expérience, 1000+ clients satisfaits. Devis gratuit et réservation en ligne.',
  keywords: [
    'nettoyage Dax',
    'service nettoyage professionnel',
    'nettoyage résidentiel',
    'nettoyage bureaux Dax',
    'nettoyage vitres',
    'entreprise nettoyage Landes',
    'Cindel Nettoyage',
    'nettoyage écologique',
    'nettoyage fin de bail',
    'désinfection',
    'nettoyage profondeur'
  ],
  authors: [{ name: 'Cindel Nettoyage' }],
  creator: 'Cindel Nettoyage',
  publisher: 'Cindel Nettoyage',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cindelnettoyage.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cindel Nettoyage - Service de Nettoyage Professionnel à Dax',
    description: 'Service de nettoyage professionnel à Dax. Nettoyage résidentiel, bureaux, vitres et plus. 2+ ans d\'expérience, 1000+ clients satisfaits.',
    url: 'https://cindelnettoyage.fr',
    siteName: 'Cindel Nettoyage',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/cindel-nettoyage-logo.png',
        width: 1200,
        height: 630,
        alt: 'Cindel Nettoyage - Service de Nettoyage Professionnel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cindel Nettoyage - Service de Nettoyage Professionnel à Dax',
    description: 'Service de nettoyage professionnel à Dax. Réservation en ligne, devis gratuit.',
    images: ['/images/cindel-nettoyage-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here after registering with search engines
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
