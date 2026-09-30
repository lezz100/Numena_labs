import type { Metadata } from "next";
import { Space_Grotesk, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Footer } from "@/components/layout/Footer";
import { siteName, siteUrl } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Numena Labs — AI Automation Systems for East African Service Businesses",
    template: "%s | Numena Labs",
  },
  description:
    "Numena Labs is based in Eldoret, Kenya. We build WhatsApp-first operational systems for clinics, pharmacies, hotels and service businesses across East Africa — connecting intake, SMS reminders, M-Pesa billing and daily follow-up.",
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName,
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Numena Labs",
      url: siteUrl,
      description:
        "AI automation and operational systems for service businesses in Kenya and East Africa.",
      email: "numenalabs@outlook.com",
      telephone: "+254700888719",
      foundingLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Eldoret",
          addressRegion: "Uasin Gishu County",
          addressCountry: "KE",
        },
      },
      areaServed: [
        { "@type": "Country", name: "Kenya" },
        { "@type": "Place", name: "East Africa" },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#local`,
      name: "Numena Labs",
      url: siteUrl,
      telephone: "+254700888719",
      email: "numenalabs@outlook.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Eldoret",
        addressRegion: "Uasin Gishu County",
        addressCountry: "KE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "0.5143",
        longitude: "35.2698",
      },
      priceRange: "Custom",
      currenciesAccepted: "KES",
      paymentAccepted: "M-Pesa, Bank transfer",
      areaServed: "East Africa",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${montserrat.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <Breadcrumb />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
