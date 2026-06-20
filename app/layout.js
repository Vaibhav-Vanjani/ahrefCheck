import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://internationalschooling.org";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "International Schooling | Flexible Online Education",
    template: "%s | International Schooling",
  },

  description:
    "International Schooling offers flexible online education for students, athletes, performers, and homeschooling families worldwide.",

  keywords: [
    "online school",
    "virtual school",
    "international schooling",
    "online education",
    "homeschool alternative",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "International Schooling | Flexible Online Education",
    description:
      "Accredited online schooling with flexible learning plans for students worldwide.",
    url: siteUrl,
    siteName: "International Schooling",
    locale: "en_US",
    type: "website",
    publishedTime: "2026-06-19T10:00:00.000Z",
    modifiedTime: "2026-06-19T10:00:00.000Z",

    images: [
      {
        url: "/og/USA.jpg",
        width: 1200,
        height: 630,
        alt: "International Schooling",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "International Schooling",
    site:"@intschooling",
    description:
      "Flexible online education for students around the world.",
    images: ["/og/USA.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://internationalschooling.org",

    languages: {
      "en-US": "https://internationalschooling.org/us",
      "pt-BR": "https://internationalschooling.org/brazil",
      "es-419": "https://internationalschooling.org/latin-america",
    },
  },

};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "International Schooling",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    datePublished: "2026-06-19", // for dates in content section
    dateModified: "2026-06-19",

    description:
      "International Schooling provides accredited online education with flexible learning plans.",

    educationalCredentialAwarded: "High School Diploma",

    sameAs: [
      "https://facebook.com/internationalschooling",
      "https://instagram.com/internationalschooling",
      "https://linkedin.com/company/internationalschooling",
    ],

    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="d2BvKZWc0WK23Etos/3Ucw" async></script>
      </head>
      <body className="min-h-full flex flex-col">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        {children}
      </body>
  
    </html>
  );
}