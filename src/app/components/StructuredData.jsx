'use client';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cindel Nettoyage",
    "image": "https://cindelnettoyage.fr/images/cindel-nettoyage-logo.png",
    "@id": "https://cindelnettoyage.fr",
    "url": "https://cindelnettoyage.fr",
    "telephone": "+33640604057",
    "email": "hadri.abdelmoumen@gmail.com",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "115 Avenue Saint Vincent De Paul",
      "addressLocality": "Dax",
      "addressRegion": "Nouvelle-Aquitaine",
      "postalCode": "40100",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7102,
      "longitude": -1.0502
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://facebook.com/cindelnettoyage",
      "https://instagram.com/cindelnettoyage"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1000"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 43.7102,
        "longitude": -1.0502
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de Nettoyage",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nettoyage Résidentiel",
            "description": "Services de nettoyage complets pour maison et espaces de vie"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nettoyage de Bureaux",
            "description": "Nettoyage professionnel pour bureaux et espaces d'affaires"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nettoyage en Profondeur",
            "description": "Nettoyage en profondeur pour zones très sales"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nettoyage de Vitres",
            "description": "Nettoyage de vitres impeccable sans traces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nettoyage Fin de Bail",
            "description": "Service complet pour déménagement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Désinfection",
            "description": "Services avancés de désinfection et assainissement"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
